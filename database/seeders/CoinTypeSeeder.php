<?php

namespace Database\Seeders;

use App\Models\CoinType;
use Illuminate\Database\Seeder;

class CoinTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $coinTypes = [
            ['name'=> 'S/ Soles', 'abbreviation' => 'S/','code' => 'sol'],
            ['name'=> '$ Dólares', 'abbreviation' => '$','code' => 'dolar'],
        ];

        foreach ($coinTypes as $coinType) {
            CoinType::firstOrCreate(
                ['code' => $coinType['code']],
                ['name' => $coinType['name'], 'abbreviation' => $coinType['abbreviation']],
            );
        }
    }
}
