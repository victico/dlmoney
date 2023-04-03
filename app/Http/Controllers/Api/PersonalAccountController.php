<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PersonalAccount;
use Exception;

class PersonalAccountController extends Controller
{
    public function getAll(Request $request)
    {
        $personalAccounts = PersonalAccount::query();
        $personalAccounts->with('document_type', 'user');

        if ($request->with_deleted && $request->with_deleted == true) {
            $personalAccounts->withTrashed();
        }

        return $this->returnSuccess(200, $personalAccounts->get());
    }

    public function store(Request $request)
    {
        $validated = $this->validateRequiredFields($request->user()->id, $request->all());

        if (!$validated['validated']) {
            return $this->returnFail(400, $validated['message']);
        }

        try {
            $documentFrontPath = "";
            $documentBackPath = "";
            if($request->hasFile("document_front")){
                $documentFrontPath = 'media/images/account_documents/' . 'user_id_' . $request->user()->id . '_document_front_' . rand(1000000, 100000000) . '.' . $request->File('document_front')->getClientOriginalExtension();
                $request->file('document_front')->move(public_path() . '/media/images/account_documents/', $documentFrontPath);
            }
            if($request->hasFile("document_back")){
                $documentBackPath = 'media/images/account_documents/' . 'user_id_' . $request->user()->id . '_document_back_' . rand(1000000, 100000000) . '.' . $request->File('document_back')->getClientOriginalExtension();
                $request->file('document_back')->move(public_path() . '/media/images/account_documents/', $documentBackPath);
            }

            $userId = $request->user_id ? $request->user_id : $request->user()->id;

            $personalAccount = PersonalAccount::create([
                'user_id' => $userId,
                'document_type_id' => $request->document_type_id,
                'document_number' => $request->document_number,
                'document_front' => $documentFrontPath,
                'document_back' => $documentBackPath,
                'name' => $request->name,
                'surname' => $request->surname,
                'birthdate' => $request->birthdate,
                'phone' => $request->phone,
                'cellphone1' => $request->cellphone1,
                'cellphone2' => $request->cellphone2,
                'country_id' => $request->country_id,
                'department_id' => $request->department_id,
                'province_id' => $request->province_id,
                'district_id' => $request->district_id,
                'address' => $request->address,
                'ocupation_id' => $request->ocupation_id,
                'exposed_person' => $request->exposed_person,
                'position' => $request->position,
                'workplace' => $request->workplace,
            ]);
        } catch (Exception $e) {
            return $this->returnFail(500, 'Error al crear la cuenta personal. Error: ' . $e->getMessage());
        }

        $userController = new UserController();
        $userController->setActiveAccount($request->user()->id, 0, $personalAccount->id);

        return $this->returnSuccess(201, $personalAccount->load('document_type')->load('user'));
    }

    public function update(Request $request, $personalAccountId)
    {
        $validated = $this->validateRequiredFields($request->user()->id, $request->all());

        if (!$validated['validated']) {
            return $this->returnFail(400, $validated['message']);
        }

        $personalAccount = PersonalAccount::find($personalAccountId);

        if (!$personalAccount) {
            return $this->returnFail(404, "Cuenta personal no encontrada.");
        }

        try {
            $personalAccount->name = $request->name;
            $personalAccount->surname = $request->surname;
            $personalAccount->document_type_id = $request->document_type_id;
            $personalAccount->document_number = $request->document_number;
            $personalAccount->birthdate = $request->birthdate;
            $personalAccount->phone = $request->phone;
            $personalAccount->cellphone1 = $request->cellphone1;
            $personalAccount->cellphone2 = $request->cellphone2;
            $personalAccount->country_id = $request->country_id;
            $personalAccount->department_id = $request->department_id;
            $personalAccount->province_id = $request->province_id;
            $personalAccount->district_id = $request->district_id;
            $personalAccount->address = $request->address;
            $personalAccount->ocupation_id = $request->ocupation_id;
            $personalAccount->exposed_person = $request->exposed_person;
            $personalAccount->position = $request->position;
            $personalAccount->workplace = $request->workplace;
            $personalAccount->save();

            return $this->returnSuccess(200, $personalAccount->load('document_type')->load('country')->load('ocupation')->load('user'));
        } catch (Exception $e) {
            return $this->returnFail(500, 'Error al actualizar la cuenta personal. Error: ' . $e->getMessage());
        }
    }

    public function delete($personalAccountId)
    {
        if (!$personalAccountId) {
            return $this->returnFail(400, "El ID de la cuenta personal es requerido.");
        }

        $personalAccount = PersonalAccount::find($personalAccountId);

        if (!$personalAccount) {
            return $this->returnFail(404, "Cuenta personal no encontrada.");
        }

        $personalAccount->delete();

        return $this->returnSuccess(200, ['id' => $personalAccountId, 'deleted_at' => $personalAccount->deleted_at]);
    }

    public function restore($personalAccountId)
    {
        if (!$personalAccountId) {
            return $this->returnFail(400, "El ID de la cuenta personal es requerido.");
        }

        $personalAccount = PersonalAccount::withTrashed()->find($personalAccountId);

        if (!$personalAccount) {
            return $this->returnFail(404, "Cuenta personal no encontrada.");
        }

        $personalAccount->restore();

        return $this->returnSuccess(200, ['id' => $personalAccountId]);
    }

    public function setPreferential(Request $request, $personalAccountId)
    {
        if (!$personalAccountId) {
            return $this->returnFail(400, "El ID de la cuenta personal es requerido.");
        }

        $personalAccount = PersonalAccount::find($personalAccountId);

        if (!$personalAccount) {
            return $this->returnFail(404, "Cuenta personal no encontrada.");
        }

        $personalAccount->preferential = 1;
        $personalAccount->preferential_purchase = $request->preferential_purchase;
        $personalAccount->preferential_sale = $request->preferential_sale;
        $personalAccount->save();

        return $this->returnSuccess(200, $personalAccount);
    }

    public function deletePreferential($personalAccountId)
    {
        if (!$personalAccountId) {
            return $this->returnFail(400, "El ID de la cuenta personal es requerido.");
        }

        $personalAccount = PersonalAccount::find($personalAccountId);

        if (!$personalAccount) {
            return $this->returnFail(404, "Cuenta personal no encontrada.");
        }

        $personalAccount->preferential = 0;
        $personalAccount->preferential_purchase = null;
        $personalAccount->preferential_sale = null;
        $personalAccount->save();
        
        return $this->returnSuccess(200, $personalAccount);
    }

    private function validateRequiredFields($userId, $inputRequest)
    {
        if (!$userId) {
            return [
                'validated' => false,
                'message' => 'El ID del usuario de la cuenta es requerido.',
            ];
        }
        if (!$inputRequest['document_type_id']) {
            return [
                'validated' => false,
                'message' => 'El tipo de documento de la persona de la cuenta es requerido.',
            ];
        }
        if (!$inputRequest['document_number']) {
            return [
                'validated' => false,
                'message' => 'El número de documento de la persona de la cuenta es requerido.',
            ];
        }
        if (!$inputRequest['document_front']) {
            return [
                'validated' => false,
                'message' => 'El documento (frente) de la persona de la cuenta es requerido.',
            ];
        }
        if (!$inputRequest['document_back']) {
            return [
                'validated' => false,
                'message' => 'El documento (dorso) de la persona de la cuenta es requerido.',
            ];
        }
        if (!$inputRequest['name']) {
            return [
                'validated' => false,
                'message' => 'El nombre de la persona de la cuenta es requerido.',
            ];
        }
        if (!$inputRequest['surname']) {
            return [
                'validated' => false,
                'message' => 'El apellido de la persona de la cuenta es requerido.',
            ];
        }
        if (!$inputRequest['birthdate']) {
            return [
                'validated' => false,
                'message' => 'La fecha de nacimiento de la persona de la cuenta es requerida.',
            ];
        }
        if (!$inputRequest['country_id']) {
            return [
                'validated' => false,
                'message' => 'El país de la persona de la cuenta es requerido.',
            ];
        }
        if (!$inputRequest['department_id']) {
            return [
                'validated' => false,
                'message' => 'El departamento de la persona de la cuenta es requerido.',
            ];
        }
        if (!$inputRequest['province_id']) {
            return [
                'validated' => false,
                'message' => 'La provincia de la persona de la cuenta es requerida.',
            ];
        }
        if (!$inputRequest['district_id']) {
            return [
                'validated' => false,
                'message' => 'El distrito de la persona de la cuenta es requerido.',
            ];
        }
        if (!$inputRequest['address']) {
            return [
                'validated' => false,
                'message' => 'El domicilio de la persona de la cuenta es requerido.',
            ];
        }
        if (!$inputRequest['ocupation_id']) {
            return [
                'validated' => false,
                'message' => 'La ocupación de persona de la cuenta es requerido.',
            ];
        }
        if (is_null($inputRequest['exposed_person'])) {
            return [
                'validated' => false,
                'message' => 'La exposición de la persona de la cuenta es requerido.',
            ];
        }

        return [
            'validated' => true,
        ];
    }
}
