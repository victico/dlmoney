<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class DepartmentController extends Controller
{
    public function getAll()
    {
        if (Cache::has('departments')) {
            $departments = Cache::get('departments');
        }
        else {
            $departments = Department::all();
            Cache::put('departments', $departments, now()->addMonth());
        }
        return $this->returnSuccess(200, $departments);
    }
}
