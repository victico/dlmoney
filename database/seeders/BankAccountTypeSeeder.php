<?php

namespace Database\Seeders;

use App\Models\BankAccountType;
use Illuminate\Database\Seeder;

class BankAccountTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $bankAccountTypes = [
            ['name'=> 'Ahorro', 'code' => 'ahorro'],
            ['name'=> 'Corriente', 'code' => 'corriente'],
            ['name'=> 'Cuentas nómina', 'code' => 'cuentas_nomina'],
            ['name'=> 'Cuenta bancaria para empresas o negocio', 'code' => 'cuenta_bancaria_empresa_negocio'],
        ];

        foreach ($bankAccountTypes as $bankAccountType) {
            BankAccountType::firstOrCreate(
                ['code' => $bankAccountType['code']],
                ['name' => $bankAccountType['name']],
            );
        }
    }
}
