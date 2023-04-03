<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ocupation;
use Illuminate\Support\Facades\Cache;

class OcupationController extends Controller
{
    public function getAll()
    {
        if (Cache::has('ocupations')) {
            $ocupations = Cache::get('ocupations');
        }
        else {
            $ocupations = Ocupation::all();
            Cache::put('ocupations', $ocupations, now()->addMonth());
        }
        return $this->returnSuccess(200, $ocupations);
    }
}
