<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Province;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class ProvinceController extends Controller
{
    public function getAllByDepartmentId($departmentId)
    {
        if (Cache::has('provinces_' . $departmentId)) {
            $provinces = Cache::get('provinces_' . $departmentId);
        }
        else {
            $provinces = Province::where('department_id', $departmentId)->get();
            Cache::put('provinces_' . $departmentId, $provinces, now()->addMonth());
        }
        return $this->returnSuccess(200, $provinces);
    }
}
