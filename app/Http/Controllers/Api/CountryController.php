<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class CountryController extends Controller
{
    public function getAll()
    {
        if (Cache::has('countries')) {
            $countries = Cache::get('countries');
        }
        else {
            $countries = Country::all();
            Cache::put('countries', $countries, now()->addMonth());
        }
        return $this->returnSuccess(200, $countries);
    }
}
