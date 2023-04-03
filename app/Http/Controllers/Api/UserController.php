<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\PersonalAccount;
use App\Models\CompanyAccount;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;
use Exception;

class UserController extends Controller
{
    public function getUser(Request $request)
    {
        $user = User::with('roles')->find($request->user()->id);
        if($request->user()->active_account_type == 0){
            $user->setAttribute('active_account', PersonalAccount::find($request->user()->active_account));
        }
        else if($request->user()->active_account_type == 1){
            $user->setAttribute('active_account', CompanyAccount::find($request->user()->active_account));
        }

        return $user;
    }

    public function getLabelActiveAccount(Request $request)
    {
        if($request->user()->active_account_type == 0){
            $personalAccount = PersonalAccount::find($request->user()->active_account);

            $accountLabel = $personalAccount->name . ' ' . $personalAccount->surname;
        }
        else if($request->user()->active_account_type == 1){
            $companyAccount = CompanyAccount::find($request->user()->active_account);

            $accountLabel = $companyAccount->business_name;
        }

        return $this->returnSuccess(200, [
            'accountLabel' => $accountLabel,
        ]);
    }

    public function getAllAccounts(Request $request)
    {
        $personalAccounts = PersonalAccount::with(['document_type', 'country', 'ocupation'])->where('user_id', $request->user()->id)->get();
        $companyAccounts = CompanyAccount::with(['country', 'document_type_lr', 'document_type_c'])->where('user_id', $request->user()->id)->get();

        return $this->returnSuccess(200, [
            'personalAccounts' => $personalAccounts,
            'companyAccounts' => $companyAccounts,
            'activeAccountType' => $request->user()->active_account_type,
            'activeAccountId' => $request->user()->active_account,
        ]);
    }

    public function changeActiveAccount(Request $request)
    {
        $result = $this->setActiveAccount($request->user()->id, $request->active_account_type, $request->active_account);

        if (!$result) {
            return $this->returnFail(404, "Usuario no encontrado.");
        }

        return $this->returnSuccess(200, ['message' => 'Cuenta activa cambiada correctamente.']);
    }

    public function setActiveAccount($userId, $activeAccountType, $activeAccount)
    {
        $user = User::find($userId);
        if (!$user) {
            return false;
        }

        $user->active_account_type = $activeAccountType;
        $user->active_account = $activeAccount;
        $user->save();

        return true;
    }

    public function create(Request $request)
    {
        $input = $request->only('username', 'email', 'password');

        if (!$input['username']) {
            return $this->returnFail(400, "El usuario es requerido.");
        }
        if (!$input['email']) {
            return $this->returnFail(400, "El email es requerido.");
        }
        if (!$input['password']) {
            return $this->returnFail(400, "El password es requerido.");
        }
        if (strlen($input['password']) < 8) {
            return $this->returnFail(400, "El password debe tener al menos 8 caracteres.");
        }

        $userExists = User::where('username', $request->username)->orWhere('email', $request->email)->first();
        if($userExists){
            return $this->returnSuccess(200, $userExists);
        }

        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $user-> email_verified_at = now();
        $user->save();

        $userRole = Role::where('name', 'user')->first();
        $user->roles()->attach($userRole);

        return $this->returnSuccess(201, $user);
    }
}
