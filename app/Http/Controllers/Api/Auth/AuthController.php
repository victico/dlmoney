<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Passport\Http\Controllers\AccessTokenController;
use Laravel\Passport\TokenRepository;
use Lcobucci\JWT\Parser as JwtParser;
use League\OAuth2\Server\AuthorizationServer;
use Psr\Http\Message\ServerRequestInterface;
use App\Models\User;
use App\Models\PersonalAccount;
use App\Models\CompanyAccount;
use App\Models\Role;
use Exception;

class AuthController extends Controller
{
    protected $server;
    protected $tokens;
    protected $jwt;
    protected $redirectTo = '/home';
    public function __construct(AuthorizationServer $server, TokenRepository $tokens, JwtParser $jwt)
    {
        $this->jwt = $jwt;
        $this->server = $server;
        $this->tokens = $tokens;
    }

    public function login(ServerRequestInterface $request)
    {
        $request = $request->withParsedBody(
        [
            'username' => $request->getParsedBody()['email'],
            'password' => $request->getParsedBody()['password'],
            'grant_type' => 'password',
            'client_id' => config('services.passport.client_id'), //client id
            'client_secret' => config('services.passport.client_secret'), //client secret
        ]);

        $accessTokenController = new AccessTokenController($this->server, $this->tokens, $this->jwt);
        $token = $accessTokenController->issueToken($request);

        // If there was an error generating the token, $token is an array, else is a request
        if(is_array($token)){
            throw new Exception("", 401);
        }

        return $token;
    }
    
    public function logout()
    {
        auth()->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });
        
        return response()->json('Logged out successfully', 200);
    }

    public function register(Request $request)
    {
        $input = $request->only('username', 'email', 'password', 'password_confirmation');
        $validator = Validator::make($input, [
            'username' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|string|confirmed|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()], 200);
        }

        $userExists = User::where('username', $request->username)->orWhere('email', $request->email)->first();
        if($userExists){
            return response()->json(['status' => 'error', 'message' => 'Ya existe un usuario con el mismo nombre de usuario o email.'], 200);
        }

        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $userRole = Role::where('name', 'user')->first();
        $user->roles()->attach($userRole);

        return response()->json(['status' => 'ok', 'message' => 'Usuario creado correctamente.', 'user' => $user->load('roles')], 200);
    }

    public function verify(Request $request)
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
}