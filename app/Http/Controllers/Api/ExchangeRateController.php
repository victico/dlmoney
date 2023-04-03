<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\CompanyAccount;
use App\Models\ExchangeRate;
use App\Models\PersonalAccount;
use stdClass;

class ExchangeRateController extends Controller
{
    public function getAll(Request $request)
    {
        $query = ExchangeRate::orderBy('id', 'DESC');
        $query->when($request->last, function ($query) use ($request) { 
            return $query->take($request->last);
        });

        return $this->returnSuccess(200, $query->get());
    }

    public function getLast(Request $request)
    {
        if($request->user()->active_account_type == 0){
            $personalAccount = PersonalAccount::find($request->user()->active_account);

            if ($personalAccount->preferential == 1) {
                $exchangeRate = new stdClass();
                $exchangeRate->sale = $personalAccount->preferential_sale;
                $exchangeRate->purchase = $personalAccount->preferential_purchase;

                return $this->returnSuccess(200, $exchangeRate);
            }
        }
        else if($request->user()->active_account_type == 1){
            $companyAccount = CompanyAccount::find($request->user()->active_account);

            if ($companyAccount->preferential == 1) {
                $exchangeRate = new stdClass();
                $exchangeRate->sale = $companyAccount->preferential_sale;
                $exchangeRate->purchase = $companyAccount->preferential_purchase;

                return $this->returnSuccess(200, $exchangeRate);
            }
        }

        return $this->returnSuccess(200, ExchangeRate::orderBy('id', 'DESC')->first());
    }

    public function store(Request $request)
    {
        if (!$request->purchase) {
            return $this->returnFail(400, "El valor de compra es requerido.");
        }

        if (!$request->sale) {
            return $this->returnFail(400, "El valor de venta es requerido.");
        }

        if (!$request->user()->username) {
            return $this->returnFail(400, "El usuario es requerido.");
        }

        $exchangeRate = ExchangeRate::create([
            'purchase' => $request->purchase,
            'sale' => $request->sale,
            'created_by' => $request->user()->username,
        ]);

        return $this->returnSuccess(201, $exchangeRate);
    }

    public function update(Request $request, $exchangeRateId)
    {
        if (!$exchangeRateId) {
            return $this->returnFail(400, "El ID del tipo de cambio es requerido.");
        }

        $exchangeRate = ExchangeRate::find($exchangeRateId);

        if (!$exchangeRate) {
            return $this->returnFail(404, "Tipo de cambio no encontrado.");
        }

        $exchangeRate->purchase = $request->purchase;
        $exchangeRate->sale = $request->sale;
        $exchangeRate->created_by = $request->user()->username;
        $exchangeRate->save();

        return $this->returnSuccess(200, $exchangeRate);
    }

    public function delete($exchangeRateId)
    {
        if (!$exchangeRateId) {
            return $this->returnFail(400, "El ID del tipo de cambio es requerido.");
        }

        $exchangeRate = ExchangeRate::find($exchangeRateId);

        if (!$exchangeRate) {
            return $this->returnFail(404, "Tipo de cambio no encontrado.");
        }

        $exchangeRate->delete();

        return $this->returnSuccess(200, ['id' => $exchangeRateId, 'deleted_at' => $exchangeRate->deleted_at]);
    }

    public function restore($exchangeRateId)
    {
        if (!$exchangeRateId) {
            return $this->returnFail(400, "El ID del tipo de cambio es requerido.");
        }

        $exchangeRate = ExchangeRate::withTrashed()->find($exchangeRateId);

        if (!$exchangeRate) {
            return $this->returnFail(404, "Tipo de cambio no encontrado.");
        }

        $exchangeRate->restore();

        return $this->returnSuccess(200, ['id' => $exchangeRateId]);

    }
}
