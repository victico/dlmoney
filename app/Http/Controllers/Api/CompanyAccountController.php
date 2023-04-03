<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CompanyAccount;
use Exception;

class CompanyAccountController extends Controller
{
    public function getAll(Request $request)
    {
        $companyAccounts = CompanyAccount::query();
        $companyAccounts->with('document_type_lr', 'document_type_c', 'user');

        if ($request->with_deleted && $request->with_deleted == true) {
            $companyAccounts->withTrashed();
        }

        return $this->returnSuccess(200, $companyAccounts->get());
    }

    public function store(Request $request)
    {
        $validated = $this->validateRequiredFields($request->user()->id, $request->all());

        if (!$validated['validated']) {
            return $this->returnFail(400, $validated['message']);
        }

        try {
            $documentFrontPathLr = "";
            $documentBackPathLr = "";
            $documentFrontPathC = "";
            $documentBackPathC = "";
            if($request->hasFile("document_front_lr")){
                $documentFrontPathLr = 'media/images/account_documents/' . 'user_id_' . $request->user()->id . '_document_front_' . rand(1000000, 100000000) . '.' . $request->File('document_front_lr')->getClientOriginalExtension();
                $request->file('document_front_lr')->move(public_path() . '/media/images/account_documents/', $documentFrontPathLr);
            }
            if($request->hasFile("document_back_lr")){
                $documentBackPathLr = 'media/images/account_documents/' . 'user_id_' . $request->user()->id . '_document_back_' . rand(1000000, 100000000) . '.' . $request->File('document_back_lr')->getClientOriginalExtension();
                $request->file('document_back_lr')->move(public_path() . '/media/images/account_documents/', $documentBackPathLr);
            }
            if($request->hasFile("document_front_c")){
                $documentFrontPathC = 'media/images/account_documents/' . 'user_id_' . $request->user()->id . '_document_front_' . rand(1000000, 100000000) . '.' . $request->File('document_front_c')->getClientOriginalExtension();
                $request->file('document_front_c')->move(public_path() . '/media/images/account_documents/', $documentFrontPathC);
            }
            if($request->hasFile("document_back_c")){
                $documentBackPathC = 'media/images/account_documents/' . 'user_id_' . $request->user()->id . '_document_back_' . rand(1000000, 100000000) . '.' . $request->File('document_back_c')->getClientOriginalExtension();
                $request->file('document_back_c')->move(public_path() . '/media/images/account_documents/', $documentBackPathC);
            }

            $userId = $request->user_id ? $request->user_id : $request->user()->id;

            $companyAccount = CompanyAccount::create([
                'user_id' => $userId,
                'ruc' => $request->ruc,
                'business_name' => $request->business_name,
                'business_turn' => $request->business_turn,
                'fiscal_address' => $request->fiscal_address,
                'country_id' => $request->country_id,
                'department_id' => $request->department_id,
                'province_id' => $request->province_id,
                'district_id' => $request->district_id,
                'email' => $request->email,
                'phone' => $request->phone,
                'document_type_lr_id' => $request->document_type_lr_id,
                'document_number_lr' => $request->document_number_lr,
                'document_front_lr' => $documentFrontPathLr,
                'document_back_lr' => $documentBackPathLr,
                'name_lr' => $request->name_lr,
                'surname_lr' => $request->surname_lr,
                'ocupation_lr_id' => $request->ocupation_lr_id,
                'document_type_c_id' => $request->document_type_c_id,
                'document_number_c' => $request->document_number_c,
                'document_front_c' => $documentFrontPathC,
                'document_back_c' => $documentBackPathC,
                'name_c' => $request->name_c,
                'surname_c' => $request->surname_c,
                'birthdate_c' => $request->birthdate_c,
                'phone_c' => $request->phone_c,
            ]);
        } catch (Exception $e) {
            return $this->returnFail(500, 'Error al crear la cuenta de la empresa. Error: ' . $e->getMessage());
        }

        $userController = new UserController();
        $userController->setActiveAccount($request->user()->id, 1, $companyAccount->id);

        return $this->returnSuccess(201, $companyAccount->load('document_type_lr')->load('document_type_c')->load('user'));
    }

    public function update(Request $request, $companyAccountId)
    {
        $validated = $this->validateRequiredFields($request->user()->id, $request->all());

        if (!$validated['validated']) {
            return $this->returnFail(400, $validated['message']);
        }

        $companyAccount = CompanyAccount::find($companyAccountId);

        if (!$companyAccount) {
            return $this->returnFail(404, "Cuenta empresarial no encontrada.");
        }

        try {
            $companyAccount->ruc = $request->ruc;
            $companyAccount->business_name = $request->business_name;
            $companyAccount->business_turn = $request->business_turn;
            $companyAccount->fiscal_address = $request->fiscal_address;
            $companyAccount->country_id = $request->country_id;
            $companyAccount->department_id = $request->department_id;
            $companyAccount->province_id = $request->province_id;
            $companyAccount->district_id = $request->district_id;
            $companyAccount->email = $request->email;
            $companyAccount->phone = $request->phone;
            $companyAccount->name_lr = $request->name_lr;
            $companyAccount->surname_lr = $request->surname_lr;
            $companyAccount->document_type_lr_id = $request->document_type_lr_id;
            $companyAccount->document_number_lr = $request->document_number_lr;
            $companyAccount->name_c = $request->name_c;
            $companyAccount->surname_c = $request->surname_c;
            $companyAccount->document_type_c_id = $request->document_type_c_id;
            $companyAccount->document_number_c = $request->document_number_c;
            $companyAccount->phone_c = $request->phone_c;
            $companyAccount->save();

            return $this->returnSuccess(200, $companyAccount->load('document_type_lr')->load('document_type_c')->load('user'));
        } catch (Exception $e) {
            return $this->returnFail(500, 'Error al actualizar la cuenta empresarial. Error: ' . $e->getMessage());
        }
    }

    public function delete($companyAccountId)
    {
        if (!$companyAccountId) {
            return $this->returnFail(400, "El ID de la cuenta empresarial es requerido.");
        }

        $companyAccount = CompanyAccount::find($companyAccountId);

        if (!$companyAccount) {
            return $this->returnFail(404, "Cuenta empresarial no encontrada.");
        }

        $companyAccount->delete();

        return $this->returnSuccess(200, ['id' => $companyAccountId, 'deleted_at' => $companyAccount->deleted_at]);
    }

    public function restore($companyAccountId)
    {
        if (!$companyAccountId) {
            return $this->returnFail(400, "El ID de la cuenta empresarial es requerido.");
        }

        $companyAccount = CompanyAccount::withTrashed()->find($companyAccountId);

        if (!$companyAccount) {
            return $this->returnFail(404, "Cuenta empresarial no encontrada.");
        }

        $companyAccount->restore();

        return $this->returnSuccess(200, ['id' => $companyAccountId]);
    }

    public function setPreferential(Request $request, $companyAccountId)
    {
        if (!$companyAccountId) {
            return $this->returnFail(400, "El ID de la cuenta empresarial es requerido.");
        }

        $companyAccount = CompanyAccount::find($companyAccountId);

        if (!$companyAccount) {
            return $this->returnFail(404, "Cuenta personal no encontrada.");
        }

        $companyAccount->preferential = 1;
        $companyAccount->preferential_purchase = $request->preferential_purchase;
        $companyAccount->preferential_sale = $request->preferential_sale;
        $companyAccount->save();

        return $this->returnSuccess(200, $companyAccount);
    }

    public function deletePreferential($companyAccountId)
    {
        if (!$companyAccountId) {
            return $this->returnFail(400, "El ID de la cuenta personal es requerido.");
        }

        $companyAccount = CompanyAccount::find($companyAccountId);

        if (!$companyAccount) {
            return $this->returnFail(404, "Cuenta personal no encontrada.");
        }

        $companyAccount->preferential = 0;
        $companyAccount->preferential_purchase = null;
        $companyAccount->preferential_sale = null;
        $companyAccount->save();
        
        return $this->returnSuccess(200, $companyAccount);
    }

    private function validateRequiredFields($userId, $inputRequest)
    {
        if (!$userId) {
            return [
                'validated' => false,
                'message' => 'El ID del usuario de la cuenta es requerido.',
            ];
        }

        if (!$inputRequest['ruc']) {
            return [
                'validated' => false,
                'message' => "El RUC de la empresa de la cuenta es requerido."
            ];
        }
        if (!$inputRequest['business_name']) {
            return [
                'validated' => false,
                'message' => "La razón social de la empresa de la cuenta es requerida."
            ];
        }
        if (!$inputRequest['business_turn']) {
            return [
                'validated' => false,
                'message' => "El giro de negocio de la empresa de la cuenta es requerido."
            ];
        }
        if (!$inputRequest['fiscal_address']) {
            return [
                'validated' => false,
                'message' => "El domicilio fiscal de la empresa de la cuenta es requerido."
            ];
        }
        if (!$inputRequest['country_id']) {
            return [
                'validated' => false,
                'message' => "El país de la empresa de la cuenta es requerido."
            ];
        }
        if (!$inputRequest['department_id']) {
            return [
                'validated' => false,
                'message' => "El departamento de la empresa de la cuenta es requerido."
            ];
        }
        if (!$inputRequest['province_id']) {
            return [
                'validated' => false,
                'message' => "La provincia de la empresa de la cuenta es requerido."
            ];
        }
        if (!$inputRequest['district_id']) {
            return [
                'validated' => false,
                'message' => "El distrito de la empresa de la cuenta es requerido."
            ];
        }
        if (!$inputRequest['email']) {
            return [
                'validated' => false,
                'message' => "El email de la empresa de la cuenta es requerido."
            ];
        }
        if (!$inputRequest['phone']) {
            return [
                'validated' => false,
                'message' => "El teléfono de la empresa de la cuenta es requerido."
            ];
        }
        if (!$inputRequest['document_type_lr_id']) {
            return [
                'validated' => false,
                'message' => "El tipo de documento del representante legal de la empresa de la cuenta es requerido."
            ];
        }
        if (!$inputRequest['document_number_lr']) {
            return [
                'validated' => false,
                'message' => 'El documento (frente) del representante legal de la empresa de la cuenta es requerido.',
            ];
        }
        if (!$inputRequest['document_front_lr']) {
            return [
                'validated' => false,
                'message' => 'El documento (dorso) del representante legal de la empresa de la cuenta es requerido.',
            ];
        }
        if (!$inputRequest['document_back_lr']) {
            return [
                'validated' => false,
                'message' => "El número de documento del representante legal de la empresa de la cuenta es requerido."
            ];
        }
        if (!$inputRequest['name_lr']) {
            return [
                'validated' => false,
                'message' => "El nombre del representante legal de la empresa de la cuenta es requerido."
            ];
        }
        if (!$inputRequest['surname_lr']) {
            return [
                'validated' => false,
                'message' => "El apellido del representante legal de la empresa de la cuenta es requerido."
            ];
        }
        if (!$inputRequest['ocupation_lr_id']) {
            return [
                'validated' => false,
                'message' => "El tipo de documento del representante legal de la empresa de la cuenta es requerido."
            ];
        }
        if (!$inputRequest['document_type_c_id']) {
            return [
                'validated' => false,
                'message' => "El tipo de documento de contacto de la empresa de la cuenta es requerido."
            ];
        }
        if (!$inputRequest['document_number_c']) {
            return [
                'validated' => false,
                'message' => "El número de documento de contacto de la empresa de la cuenta es requerido."
            ];
        }
        if (!$inputRequest['document_front_lr']) {
            return [
                'validated' => false,
                'message' => 'El documento (dorso) del contacto de la empresa de la cuenta es requerido.',
            ];
        }
        if (!$inputRequest['document_back_lr']) {
            return [
                'validated' => false,
                'message' => "El número de documento del contacto de la empresa de la cuenta es requerido."
            ];
        }
        if (!$inputRequest['name_c']) {
            return [
                'validated' => false,
                'message' => "El nombre de contacto de la empresa de la cuenta es requerido."
            ];
        }
        if (!$inputRequest['surname_c']) {
            return [
                'validated' => false,
                'message' => "El apellido de contacto de la empresa de la cuenta es requerido."
            ];
        }
        if (!$inputRequest['birthdate_c']) {
            return [
                'validated' => false,
                'message' => "La fecha de nacimiento de contacto de la empresa de la cuenta es requerido."
            ];
        }

        return [
            'validated' => true,
        ];
    }
}
