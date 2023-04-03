<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BankAccountType;
use Illuminate\Support\Facades\Cache;

class BankAccountTypeController extends Controller
{
    public function getAll()
    {
        if (Cache::has('bank_account_types')) {
            $bankAccountTypes = Cache::get('bank_account_types');
        }
        else {
            $bankAccountTypes = BankAccountType::all();
            Cache::put('bank_account_types', $bankAccountTypes, now()->addMonth());
        }
        return $this->returnSuccess(200, $bankAccountTypes);
    }
}
