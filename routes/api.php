<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\Auth\ForgotPasswordController;
use App\Http\Controllers\Api\PersonalAccountController;
use App\Http\Controllers\Api\CompanyAccountController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ExchangeRateController;
use App\Http\Controllers\Api\BankController;
use App\Http\Controllers\Api\BankAccountController;
use App\Http\Controllers\Api\BankAccountTypeController;
use App\Http\Controllers\Api\CoinTypeController;
use App\Http\Controllers\Api\CountryController;
use App\Http\Controllers\Api\DepartmentController;
use App\Http\Controllers\Api\DistrictController;
use App\Http\Controllers\Api\DocumentTypeController;
use App\Http\Controllers\Api\OcupationController;
use App\Http\Controllers\Api\OperationController;
use App\Http\Controllers\Api\PeruConsultController;
use App\Http\Controllers\Api\ProvinceController;
use App\Http\Controllers\Api\FundOriginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:api')->post('/logout', [AuthController::class, 'logout']);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/password/reset', [ForgotPasswordController::class, 'reset']);
Route::post('/password/reset/email', [ForgotPasswordController::class, 'forgot']);

Route::middleware('auth:api')->prefix('user')->name('user.')->group(function () {
    Route::get('', [UserController::class, 'getUser'])->name('getUser');
    Route::get('/verify', [UserController::class, 'getUser'])->name('verifyUser');
    Route::get('/get-label-active-account', [UserController::class, 'getLabelActiveAccount']);
    Route::get('/get-all-accounts', [UserController::class, 'getAllAccounts']);
    Route::post('/active/change', [UserController::class, 'changeActiveAccount']);
    Route::post('', [UserController::class, 'create']);
});

Route::middleware('auth:api')->prefix('accounts')->name('accounts.')->group(function () {
    Route::prefix('personal')->name('personal.')->group(function () {
        Route::post('', [PersonalAccountController::class, 'store']);
        Route::get('', [PersonalAccountController::class, 'getAll']);
        Route::put('/{account_id}', [PersonalAccountController::class, 'update']);
        Route::delete('/{account_id}', [PersonalAccountController::class, 'delete']);
        Route::get('/{account_id}/restore', [PersonalAccountController::class, 'restore']);
        Route::put('/{account_id}/set/preferential', [PersonalAccountController::class, 'setPreferential']);
        Route::put('/{account_id}/delete/preferential', [PersonalAccountController::class, 'deletePreferential']);
    });

    Route::prefix('company')->name('company.')->group(function () {
        Route::post('', [CompanyAccountController::class, 'store']);
        Route::get('', [CompanyAccountController::class, 'getAll']);
        Route::put('/{account_id}', [CompanyAccountController::class, 'update']);
        Route::delete('/{account_id}', [CompanyAccountController::class, 'delete']);
        Route::get('/{account_id}/restore', [CompanyAccountController::class, 'restore']);
        Route::put('/{account_id}/set/preferential', [CompanyAccountController::class, 'setPreferential']);
        Route::put('/{account_id}/delete/preferential', [CompanyAccountController::class, 'deletePreferential']);
    });
});

Route::middleware('auth:api')->prefix('exchange-rates')->name('exchange-rates.')->group(function () {
    Route::get('', [ExchangeRateController::class, 'getAll']);
    Route::get('/last', [ExchangeRateController::class, 'getLast']);
    Route::post('', [ExchangeRateController::class, 'store']);
    Route::put('/{exchange_rate_id}', [ExchangeRateController::class, 'update']);
    Route::delete('/{exchange_rate_id}', [ExchangeRateController::class, 'delete']);
    Route::get('/{exchange_rate_id}/restore', [ExchangeRateController::class, 'restore']);
});

Route::middleware('auth:api')->prefix('banks')->name('banks.')->group(function () {
    Route::get('', [BankController::class, 'getAll']);
    Route::post('', [BankController::class, 'store']);
    Route::put('/{bank_id}', [BankController::class, 'update']);
    Route::delete('/{bank_id}', [BankController::class, 'delete']);
    Route::get('/{bank_id}/restore', [BankController::class, 'restore']);
});

Route::middleware('auth:api')->prefix('bank-accounts')->name('bank-accounts.')->group(function () {
    Route::get('', [BankAccountController::class, 'getAll']);
    Route::get('/to-transfer', [BankAccountController::class, 'getAllToTransfer']);
    Route::post('', [BankAccountController::class, 'store']);
    Route::put('/{bank_id}', [BankAccountController::class, 'update']);
    Route::delete('/{bank_id}', [BankAccountController::class, 'delete']);
    Route::get('/{bank_id}/restore', [BankAccountController::class, 'restore']);
});

Route::middleware('auth:api')->prefix('operations')->name('operations.')->group(function () {
    Route::get('', [OperationController::class, 'getPaginated']);
    Route::put('/{operation_id}/change-status', [OperationController::class, 'changeStatus']);
    Route::post('', [OperationController::class, 'store']);
});
Route::middleware('auth:api')->prefix('report-sbs')->name('report-sbs.')->group(function () {
    Route::get('', [OperationController::class, 'reportsbs']);
});

Route::middleware('auth:api')->prefix('bank-account-types')->name('bank-account-types.')->group(function () {
    Route::get('', [BankAccountTypeController::class, 'getAll']);
});

Route::middleware('auth:api')->prefix('coin-types')->name('coin-types.')->group(function () {
    Route::get('', [CoinTypeController::class, 'getAll']);
});

Route::middleware('auth:api')->prefix('document-types')->name('document-types.')->group(function () {
    Route::get('', [DocumentTypeController::class, 'getAll']);
});

Route::middleware('auth:api')->prefix('fund-origins')->name('fund-origins.')->group(function () {
    Route::get('', [FundOriginController::class, 'getAll']);
});

Route::middleware('auth:api')->prefix('ocupations')->name('ocupations.')->group(function () {
    Route::get('', [OcupationController::class, 'getAll']);
});

Route::middleware('auth:api')->prefix('countries')->name('countries.')->group(function () {
    Route::get('', [CountryController::class, 'getAll']);
});

Route::middleware('auth:api')->prefix('departments')->name('departments.')->group(function () {
    Route::get('', [DepartmentController::class, 'getAll']);
});

Route::middleware('auth:api')->prefix('provinces')->name('provinces.')->group(function () {
    Route::get('/{departmentId}', [ProvinceController::class, 'getAllByDepartmentId'])->name('getAllByDepartmentId');
});

Route::middleware('auth:api')->prefix('districts')->name('districts.')->group(function () {
    Route::get('/{provinceId}', [DistrictController::class, 'getAllByProvinceId'])->name('getAllByProvinceId');
});

Route::get('/peru-consult/dni/{document_number}', [PeruConsultController::class, 'queryByDNI']);
Route::get('/peru-consult/ruc/{ruc}', [PeruConsultController::class, 'queryByRUC']);