<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;
use App\Models\User;

class ForgotPasswordController extends Controller
{
    public function forgot(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email'
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'message' => 'El campo "email" es requerido.'], 200);
        }

        $user = User::where('email', $request->email)->first();
        if(!$user){
            return response()->json(['status' => 'error', 'message' => 'No se ha encontrado un usuario con el email ingresado.'], 200);
        }

        Password::sendResetLink($request->only('email'));

        return response()->json(['status' => 'ok', 'message' => 'Hemos enviado un enlace por correo electrónico para restablecer la contraseña.'], 200);
    }

    public function reset(Request $request) {
        $input = $request->only('email', 'password', 'password_confirmation', 'token');
        $validator = Validator::make($input, [
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|string|confirmed|min:8'
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()], 200);
        }

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->save();

                $user->setRememberToken(Str::random(60));
    
                event(new PasswordReset($user));
            }
        );

        return $status == Password::PASSWORD_RESET
                ? response()->json(['status' => 'ok', 'message' => 'Contraseña restablecida correctamente.'], 200)
                : response()->json(['status' => 'error', 'message' => 'Error al restablecer la contraseña.'], 200);
    }
}
