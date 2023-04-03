<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            CountrySeeder::class,
            DepartmentSeeder::class,
            ProvinceSeeder::class,
            DistrictSeeder::class,
            RoleSeeder::class,
            UserSeeder::class,
            DocumentTypeSeeder::class,
            OcupationSeeder::class,
            BankSeeder::class,
            BankAccountTypeSeeder::class,
            CoinTypeSeeder::class,
            ExchangeRateSeeder::class,
            FundOriginSeeder::class,

            // Mock data
            PersonalAccountSeeder::class,
            CompanyAccountSeeder::class,
            BankAccountSeeder::class,
        ]);
    }
}
