<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Bank;
use Exception;

class BankController extends Controller
{
    public function getAll(Request $request)
    {
        $banks = Bank::query();

        if ($request->with_deleted && $request->with_deleted == true) {
            $banks->withTrashed();
        }

        return $this->returnSuccess(200, $banks->get());
    }

    public function store(Request $request)
    {
        if (!$request->name) {
            return $this->returnFail(400, "El nombre del banco es requerido.");
        }

        if (!$request->File('logo')) {
            return $this->returnFail(400, "El logo del banco es requerido.");
        }

        $bankLogo = "";

        if($request->logo){
            $bankLogo = 'media/images/banks/'.rand(0, 999999).$request->File('logo')->getClientOriginalName();
            $request->file('logo')->move(public_path().'/media/images/banks/', $bankLogo);
        }
        else{
            $bankLogo = 'media/images/banks/default-logo.png';
        }

        $bank = Bank::create([
            'name' => $request->name,
            'code' => strtolower(preg_replace('/\s+/', '_', $request->name)),
            'logo' => $bankLogo,
        ]);

        return $this->returnSuccess(201, $bank);
    }

    public function update(Request $request, $bankId)
    {
        if (!$bankId) {
            return $this->returnFail(400, "El ID del banco es requerido.");
        }

        if (!$request->name) {
            return $this->returnFail(400, "El nombre del banco es requerido.");
        }

        if (!$request->File('logo')) {
            return $this->returnFail(400, "El logo del banco es requerido.");
        }

        $bank = Bank::find($bankId);

        if (!$bank) {
            return $this->returnFail(404, "Banco no encontrado.");
        }

        if ($bank->name != $request->name) {
            $bank->name = $request->name;
        }

        $bankLogo = explode('/', $bank->logo);
        $bankLogo = $bankLogo[count($bankLogo) - 1];

        if ($bankLogo != $request->File('logo')->getClientOriginalName()) {
            $bankLogo = 'media/images/banks/'.rand(0, 999999).$request->File('logo')->getClientOriginalName();
            $request->file('logo')->move(public_path().'/media/images/banks/', $bankLogo);
            $bank->logo = $bankLogo;
        }

        $bank->save();

        return $this->returnSuccess(200, $bank);
    }

    public function delete($bankId)
    {
        if (!$bankId) {
            return $this->returnFail(400, "El ID del banco es requerido.");
        }

        $bank = Bank::find($bankId);

        if (!$bank) {
            return $this->returnFail(404, "Banco no encontrado.");
        }

        $bank->delete();

        return $this->returnSuccess(200, ['id' => $bankId, 'deleted_at' => $bank->deleted_at]);
    }

    public function restore($bankId)
    {
        if (!$bankId) {
            return $this->returnFail(400, "El ID del banco es requerido.");
        }

        $bank = Bank::withTrashed()->find($bankId);

        if (!$bank) {
            return $this->returnFail(404, "Banco no encontrado.");
        }

        $bank->restore();

        return $this->returnSuccess(200, ['id' => $bankId]);
    }
}
