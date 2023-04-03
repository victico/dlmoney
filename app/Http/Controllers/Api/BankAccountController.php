<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Bank;
use Illuminate\Http\Request;
use App\Models\BankAccount;
use App\Models\BankAccountType;
use App\Models\CoinType;
use App\Models\CompanyAccount;
use App\Models\PersonalAccount;

class BankAccountController extends Controller
{
    public function getAll(Request $request)
    {
        $bankAccounts = BankAccount::query();
        $bankAccounts->with(['bank_account_type', 'bank', 'coin_type', 'owner_document_type']);

        if ($request->with_deleted && $request->with_deleted == true) {
            $bankAccounts->withTrashed();
        }

        if (!$request->user()->hasRole('admin')) { // If is not admin
            if($request->user()->active_account_type == 0){
                $personalAccount = PersonalAccount::find($request->user()->active_account);

                $bankAccounts->where('personal_account_id', $personalAccount->id);
            }
            else if($request->user()->active_account_type == 1){
                $companyAccount = CompanyAccount::find($request->user()->active_account);

                $bankAccounts->where('company_account_id', $companyAccount->id);
            }
        } else { // else: is admin
            if ($request->account_id && $request->account_type) {
                if ($request->user_type == 0) {
                    $bankAccounts->where('personal_account_id', $request->account_id);
                }
                else if ($request->user_type == 1) {
                    $bankAccounts->where('company_account_id', $request->account_id);
                }
            }
        }

        return $this->returnSuccess(200, $bankAccounts->get());
    }

    public function getAllToTransfer()
    {
        return $this->returnSuccess(200, BankAccount::with(['bank_account_type', 'bank', 'coin_type'])->where('to_transfer', 1)->get());
    }

    public function store(Request $request)
    {
        $validated = $this->validateRequiredFields($request->all());

        if (!$validated['validated']) {
            return $this->returnFail(400, $validated['message']);
        }

        $validated = $this->validateCorrectFields($request->user()->id, $request->all());

        if (!$validated['validated']) {
            return $this->returnFail(400, $validated['message']);
        }

        $accountType = $request->account_type ? $request->account_type : $request->user()->active_account_type;
        $activeAccount = $request->active_account ? $request->active_account : $request->user()->active_account;

        if($accountType == 0){
            $personalAccountId = PersonalAccount::find($activeAccount)->id;
        }
        else if($accountType == 1){
            $companyAccountId = CompanyAccount::find($activeAccount)->id;
        }

        $bankAccount = BankAccount::create([
            'company_account_id' => $companyAccountId ?? null,
            'personal_account_id' => $personalAccountId ?? null,
            'bank_id' => $request->bank_id,
            'bank_account_type_id' => $request->bank_account_type_id,
            'coin_type_id' => $request->coin_type_id,
            'account_number' => $request->account_number,
            'account_number_cci' => $request->account_number_cci,
            'alias' => $request->alias,
            'own_account' => $request->own_account,
            'owner_name' => $request->owner_name,
            'owner_document_type_id' => $request->owner_document_type_id,
            'owner_document_number' => $request->owner_document_number,
            'authorized_deposit' => $request->authorized_deposit,
        ]);

        return $this->returnSuccess(201, $bankAccount->load(['bank_account_type', 'bank', 'coin_type', 'owner_document_type']));
    }

    public function update(Request $request, $bankAccountId)
    {
        $validated = $this->validateRequiredFields($request->all());

        if (!$validated['validated']) {
            return $this->returnFail(400, $validated['message']);
        }

        $validated = $this->validateCorrectFields($request->user()->id, $request->all());

        if (!$validated['validated']) {
            return $this->returnFail(400, $validated['message']);
        }

        $bankAccount = BankAccount::find($bankAccountId);

        if (!$bankAccount) {
            return $this->returnFail(404, 'Cuenta bancaria no encontrada.');
        }

        $bankAccount->bank_id = $request->bank_id;
        $bankAccount->bank_account_type_id = $request->bank_account_type_id;
        $bankAccount->coin_type_id = $request->coin_type_id;
        $bankAccount->account_number = $request->account_number;
        $bankAccount->account_number_cci = $request->account_number_cci;
        $bankAccount->alias = $request->alias;
        $bankAccount->own_account = $request->own_account;
        $bankAccount->owner_name = $request->owner_name;
        $bankAccount->owner_document_type_id = $request->owner_document_type_id;
        $bankAccount->owner_document_number = $request->owner_document_number;
        $bankAccount->authorized_deposit = $request->authorized_deposit;

        $bankAccount->save();

        return $this->returnSuccess(200, $bankAccount->load(['bank_account_type', 'bank', 'coin_type', 'owner_document_type']));
    }

    public function delete($bankAccountId)
    {
        if (!$bankAccountId) {
            return $this->returnFail(400, "El ID de la cuenta bancaria es requerido.");
        }

        $bankAccount = BankAccount::find($bankAccountId);

        if (!$bankAccount) {
            return $this->returnFail(404, 'Cuenta bancaria no encontrada.');
        }

        $bankAccount->delete();

        return $this->returnSuccess(200, ['id' => $bankAccountId, 'deleted_at' => $bankAccount->deleted_at]);
    }

    public function restore($bankAccountId)
    {
        if (!$bankAccountId) {
            return $this->returnFail(400, "El ID de la cuenta bancaria es requerido.");
        }

        $bankAccount = BankAccount::withTrashed()->find($bankAccountId);

        if (!$bankAccount) {
            return $this->returnFail(404, 'Cuenta bancaria no encontrada.');
        }

        $bankAccount->restore();

        return $this->returnSuccess(200, ['id' => $bankAccountId]);
    }

    private function validateRequiredFields($inputRequest)
    {
        if (!$inputRequest['bank_id']) {
            return [
                'validated' => false,
                'message' => 'El ID del banco de la cuenta bancaria es requerido.',
            ];
        }

        if (!$inputRequest['bank_account_type_id']) {
            return [
                'validated' => false,
                'message' => 'El ID del tipo de banco de la cuenta bancaria es requerido.',
            ];
        }

        if (!$inputRequest['coin_type_id']) {
            return [
                'validated' => false,
                'message' => 'El ID del tipo de moneda de la cuenta bancaria es requerido.',
            ];
        }

        if (!$inputRequest['account_number']) {
            return [
                'validated' => false,
                'message' => 'El número de la cuenta bancaria es requerido.',
            ];
        }

        if (!$inputRequest['account_number_cci']) {
            return [
                'validated' => false,
                'message' => 'El número CCI de la cuenta bancaria es requerido.',
            ];
        }

        if (!$inputRequest['alias']) {
            return [
                'validated' => false,
                'message' => 'El alias de la cuenta bancaria es requerido.',
            ];
        }

        if (is_null($inputRequest['own_account'])) {
            return [
                'validated' => false,
                'message' => 'Debe indicar si es una cuenta propia o no.',
            ];
        }

        return [
            'validated' => true,
        ];
    }

    private function validateCorrectFields($usedId, $inputRequest)
    {
        if (!in_array($inputRequest['bank_id'], Bank::select('id')->get()->pluck('id')->toArray())) {
            return [
                'validated' => false,
                'message' => 'ID de banco inválido.',
            ];
        }

        if (!in_array($inputRequest['bank_account_type_id'], BankAccountType::select('id')->get()->pluck('id')->toArray())) {
            return [
                'validated' => false,
                'message' => 'ID del tipo de banco inválido.',
            ];
        }

        if (!in_array($inputRequest['coin_type_id'], CoinType::select('id')->get()->pluck('id')->toArray())) {
            return [
                'validated' => false,
                'message' => 'ID de tipo de moneda inválido.',
            ];
        }

        return [
            'validated' => true,
        ];
    }
}