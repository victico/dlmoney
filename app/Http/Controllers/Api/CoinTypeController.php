<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CoinType;
use Illuminate\Support\Facades\Cache;

class CoinTypeController extends Controller
{
    public function getAll()
    {
        if (Cache::has('coin_types')) {
            $coinTypes = Cache::get('coin_types');
        }
        else {
            $coinTypes = CoinType::all();
            Cache::put('coin_types', $coinTypes, now()->addMonth());
        }
        return $this->returnSuccess(200, $coinTypes);
    }
}
