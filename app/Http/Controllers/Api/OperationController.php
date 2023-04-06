<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\BankAccount;
use App\Models\Operation;
use App\Models\PersonalAccount;
use App\Models\CompanyAccount;
use App\Models\FundOrigin;

class OperationController extends Controller
{
    public function getPaginated(Request $request)
    {
        $operations = Operation::query();
        $operations->with([
            'bank_account_send.personal_account.user',
            'bank_account_send.personal_account.document_type',
            'bank_account_send.company_account.user',
            'bank_account_send.bank',
            'bank_account_send.coin_type',
            'bank_account_receive.bank',
            'bank_account_receive.coin_type',
            'bank_account_transfer.bank',
            'fund_origin'
        ]);

        if (!$request->user()->hasRole('admin')) {
            if($request->user()->active_account_type == 0){
                $personalAccountId = PersonalAccount::find($request->user()->active_account)->id;

                $operations->where(function($query) use ($personalAccountId) {
                    $query->whereHas('bank_account_send.personal_account', function ($query) use ($personalAccountId) {
                        $query->where('id', $personalAccountId);
                    });
                });
            }
            else if($request->user()->active_account_type == 1){
                $companyAccountId = CompanyAccount::find($request->user()->active_account)->id;

                $operations->where(function($query) use ($companyAccountId) {
                    $query->whereHas('bank_account_send.company_account', function ($query) use ($companyAccountId) {
                        $query->where('id', $companyAccountId);
                    });
                });
            }
        }

        // Filters
        if ($request->search) {
            // If the param is a number, filter only by amounts.
            if (intval($request->search) > 0) {
                $search = strval($request->search);

                $operations->where(function($query) use ($search) {
                    $query->orWhereRaw('CAST(amount as CHAR) LIKE "%'. $search .'%"');
                    $query->orWhereRaw('CAST(change_amount as CHAR) LIKE "%'. $search .'%"');
                    $query->orWhereRaw('CAST(exchange_rate as CHAR) LIKE "%'. $search .'%"');
                });
            }
            else {
                $search = strtolower($request->search);

                $operations->where(function($query) use ($search) {
                    $query->orWhereHas('bank_account_send.personal_account', function ($query) use ($search) {
                        $query->whereRaw('LOWER(name) LIKE "%'. $search .'%"');
                        $query->orWhereRaw('LOWER(surname) LIKE "%'. $search .'%"');
                    });
                    $query->orWhereHas('bank_account_send.company_account', function ($query) use ($search) {
                        $query->whereRaw('LOWER(business_name) LIKE "%'. $search .'%"');
                    });
                });
            }
        }
        if ($request->status) {
            $operations->where('status', $request->status);
        }

        $operations->orderBy('id', 'desc');
        return $this->returnSuccess(200, $operations->paginate());
    }

    public function changeStatus(Request $request, $operationId)
    {
        if (!$operationId) {
            return $this->returnFail(400, "El ID de la operación es requerido.");
        }

        if (!$request->current_status || !in_array($request->current_status, array(-1,0,1,2,3))) {
            return $this->returnFail(400, "El estado actual de la operación es requerido.");
        }

        if (!$request->new_status|| !in_array($request->new_status, array(-1,0,1,2,3))) {
            return $this->returnFail(400, "El nuevo estado de la operación es requerido.");
        }

        $operation = Operation::find($operationId);

        if (!$operation) {
            return $this->returnFail(404, "Operación no encontrada.");
        }

        $operation->previous_status = $request->current_status;
        $operation->status = $request->new_status;
        $operation->last_user_modified = $request->user()->username;
        $operation->save();

        // TODO: enviar emails a admin y cliente?...
        return $this->returnSuccess(200, ['id' => $operation->id, 'status' => $operation->status, 'status_label' => $operation->getStatusByKey($operation->status)]);
    }

    public function store(Request $request)
    {
        $validated = $this->validateRequiredFields($request->all());

        if (!$validated['validated']) {
            return $this->returnFail(400, $validated['message']);
        }
        date_default_timezone_set('America/Lima');
        $operation = Operation::create([
            'bank_account_send_id' => $request->bank_account_send_id,
            'bank_account_receive_id' => $request->bank_account_receive_id,
            'amount' => $request->amount,
            'bank_account_transfer_id' => $request->bank_account_transfer_id,
            'change_amount' => $request->change_amount,
            'exchange_rate' => $request->exchange_rate,
            'status' => 1,
            'previous_status' => 0,
            'operation_number' => $request->operation_number ?? null,
            'fund_origin_id' => $request->fund_origin_id,
            'other_fund_origin' => $request->other_fund_origin ?? null,
            'additional_info' => json_encode(""),
            'last_user_modified' => $request->user()->username,
            'created_by' => $request->user()->username,
        ]);

        // TODO: enviar emails a admin y cliente?...
        $this->clearPreferential($request);

        return $this->returnSuccess(201, $operation);

        // // if the operation has additional data
        // for ($i = 1; $i < 5; $i++) {
        //     $voucherPath = "";

        //     if(!$request->has('operation_data_' . $i)){
        //         continue;
        //     }

        //     $voucherPath = '/images/operations/' . $request->user()->username . '/' . rand(0, 999999) . $request->file('operation_data_' . $i)->getClientOriginalName();
        //     $request->file('operation_data_' . $i)->move(public_path() . '/images/operations/' . $request->user()->username . '/', $voucherPath);

        //     OperationData::create([
        //         'operation_id' => $operation->id,
        //         'operation_number' => $request->input('operation_number_' . $i) ? $request->input('operation_number_' . $i) : 0,
        //         'voucher' => $voucherPath,
        //     ]);
        // }

    }
    public function reportsbs(Request $request){
        $operations = Operation::query();
        $operations->with([
            'bank_account_send.personal_account.user',
            'bank_account_send.personal_account.document_type',
            'bank_account_send.personal_account.department',
            'bank_account_send.personal_account.ocupation',
            'bank_account_send.personal_account.province',
            'bank_account_send.personal_account.district',
            'bank_account_send.personal_account.country',
            'bank_account_send.company_account.user',
            'bank_account_send.company_account.document_type_lr',
            'bank_account_send.company_account.document_type_c',
            'bank_account_send.company_account.ocupation_lr',
            'bank_account_send.company_account.department',
            'bank_account_send.company_account.province',
            'bank_account_send.company_account.district',
            'bank_account_send.company_account.country',
            'bank_account_send.bank',
            'bank_account_send.coin_type',
            'bank_account_send.bank_account_type',
            'bank_account_receive.bank',
            'bank_account_receive.coin_type',
            'bank_account_receive.owner_document_type',
            'bank_account_receive.personal_account.country',
            'bank_account_receive.company_account.country',
            'bank_account_receive.company_account.document_type_lr',
            'bank_account_receive.personal_account.document_type',
            'bank_account_transfer.bank',
            'bank_account_transfer.coin_type',
            'fund_origin'
        ]);
        $dateReportFrom = date("Y-m-d H:i:s", strtotime($request->dateFrom.' 00:00:00'));
        $dateReportTo = date("Y-m-d H:i:s", strtotime($request->dateTo.' 23:59:00'));
        $operations->where('status', 3);
        $operations->whereBetween('created_at', [$dateReportFrom, $dateReportTo]);
        $operations->orderBy('id', 'desc');
        return $this->returnSuccess(200, $operations->paginate());
    }
    private function validateRequiredFields($inputRequest) {
        if (!$inputRequest['bank_account_send_id']) {
            return [
                'validated' => false,
                'message' => 'El ID de la cuenta bancaria de envío es requerido'
            ];
        }

        if (!$inputRequest['bank_account_receive_id']) {
            return [
                'validated' => false,
                'message' => 'El ID de la cuenta bancaria a donde se recibe es requerido'
            ];
        }

        if (!in_array($inputRequest['bank_account_send_id'], BankAccount::select('id')->get()->pluck('id')->toArray())) {
            return [
                'validated' => false,
                'message' => 'El ID de la cuenta bancaria de envío es inválido'
            ];
        }

        if (!in_array($inputRequest['bank_account_receive_id'], BankAccount::select('id')->get()->pluck('id')->toArray())) {
            return [
                'validated' => false,
                'message' => 'El ID de la cuenta bancaria a donde se recibe es inválido'
            ];
        }

        if (!$inputRequest['amount']) {
            return [
                'validated' => false,
                'message' => 'El monto es requerido'
            ];
        }

        if (!$inputRequest['change_amount']) {
            return [
                'validated' => false,
                'message' => 'La cantidad de cambio es requerido'
            ];
        }

        if (!$inputRequest['exchange_rate']) {
            return [
                'validated' => false,
                'message' => 'El tipo de cambio es requerido'
            ];
        }

        if (!$inputRequest['bank_account_transfer_id']) {
            return [
                'validated' => false,
                'message' => 'El ID de la cuenta bancaria a donde transfiere es requerido'
            ];
        }

        if (!in_array($inputRequest['bank_account_transfer_id'], BankAccount::select('id')->get()->pluck('id')->toArray())) {
            return [
                'validated' => false,
                'message' => 'El ID de la cuenta bancaria a donde transfiere es inválido'
            ];
        }

        if (!$inputRequest['fund_origin_id']) {
            return [
                'validated' => false,
                'message' => 'El ID del origen de fondos es requerido'
            ];
        }

        if (!in_array($inputRequest['fund_origin_id'], FundOrigin::select('id')->get()->pluck('id')->toArray())) {
            return [
                'validated' => false,
                'message' => 'El ID del origen de fondos es es inválido'
            ];
        }

        return [
            'validated' => true,
        ];
    }

    private function clearPreferential($request) {
        $accountType = $request->account_type ?? $request->user()->active_account_type;
        $accountId = $request->active_account ?? $request->user()->active_account;

        if($accountType == 0){
            $account = PersonalAccount::find($accountId);
        }
        else if($request->user()->active_account_type == 1){
            $account = CompanyAccount::find($accountId);
        }

        $account->preferential = 0;
        $account->preferential_purchase = null;
        $account->preferential_sale = null;
        $account->save();
    }
}
