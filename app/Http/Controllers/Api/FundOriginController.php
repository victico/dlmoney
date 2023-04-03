<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FundOrigin;
use Illuminate\Support\Facades\Cache;

class FundOriginController extends Controller
{
    public function getAll()
    {
        if (Cache::has('fund_origins')) {
            $fundOrigins = Cache::get('fund_origins');
        }
        else {
            $fundOrigins = FundOrigin::all();
            Cache::put('fund_origins', $fundOrigins, now()->addMonth());
        }
        return $this->returnSuccess(200, $fundOrigins);
    }
}
