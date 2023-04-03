<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\District;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class DistrictController extends Controller
{
    public function getAllByProvinceId($provinceId)
    {
        if (Cache::has('district_' . $provinceId)) {
            $districts = Cache::get('district_' . $provinceId);
        }
        else {
            $districts = District::where('province_id', $provinceId)->get();
            Cache::put('district_' . $provinceId, $districts, now()->addMonth());
        }
        return $this->returnSuccess(200, $districts);
    }
}
