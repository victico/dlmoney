<?php

namespace Database\Seeders;

use App\Models\ExchangeRate;
use Illuminate\Database\Seeder;

class ExchangeRateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $exchangeRate = new ExchangeRate();
        $exchangeRate->purchase = 3.680;
        $exchangeRate->sale = 3.707;
        $exchangeRate->created_by = "admin";
        $exchangeRate->save();
    }
}
