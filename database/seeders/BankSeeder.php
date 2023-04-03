<?php

namespace Database\Seeders;

use App\Models\Bank;
use Illuminate\Database\Seeder;

class BankSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $banks = [
            [
                'name' => 'Banco Azteca',
                'logo' => 'media/images/banks/banco-azteca.png',
                'code' => 'banco_azteca'
            ],
            [
                'name' => 'Banco de Comercio',
                'logo' => 'media/images/banks/banco-de-comercio.png',
                'code' => 'banco_comercio'
            ],
            [
                'name' => 'Banco de Crédito del Perú | BCP',
                'logo' => 'media/images/banks/bcp.png',
                'code' => 'banco_credito_pero_bcp'
            ],
            [
                'name' => 'Banco de Crédito del Perú | CCI',
                'logo' => 'media/images/banks/bcp.png',
                'code' => 'banco_credito_pero_cci'
            ],
            [
                'name' => 'Banco Falabella',
                'logo' => 'media/images/banks/banco-falabella.png',
                'code' => 'banco_falabella'
            ],
            [
                'name' => 'Banco GNB Perú',
                'logo' => 'media/images/banks/gnb.png',
                'code' => 'banco_gnb_peru'
            ],
            [
                'name' => 'Banco Interamericano de Finanzas (BanBif)',
                'logo' => 'media/images/banks/banbif.png',
                'code' => 'banco_interamericano_finanzas_banbif'
            ],
            [
                'name' => 'Banco Pichincha',
                'logo' => 'media/images/banks/banco-pichancha.png',
                'code' => 'banco_pichincha'
            ],
            [
                'name' => 'Banco Pichincha | CCI',
                'logo' => 'media/images/banks/banco-pichancha.png',
                'code' => 'banco_pichincha_cci'
            ],
            [
                'name' => 'Banco Ripley',
                'logo' => 'media/images/banks/banco-ripley.png',
                'code' => 'banco_ripley'
            ],
            [
                'name' => 'Banco Santander Perú',
                'logo' => 'media/images/banks/banco-santander.png',
                'code' => 'banco_santander'
            ],
            [
                'name' => 'BBVA',
                'logo' => 'media/images/banks/bbva.png',
                'code' => 'banco_bbva'
            ],
            [
                'name' => 'BBVA | CCI',
                'logo' => 'media/images/banks/bbva.png',
                'code' => 'banco_bbva_cci'
            ],
            [
                'name' => 'Caja Arequipa',
                'logo' => 'media/images/banks/caja-arequipa.png',
                'code' => 'banco_arequipa'
            ],
            [
                'name' => 'Caja Huancayo',
                'logo' => 'media/images/banks/default-logo.png',
                'code' => 'banco_huancayo'
            ],
            [
                'name' => 'Caja Ica',
                'logo' => 'media/images/banks/default-logo.png',
                'code' => 'banco_ica'
            ],
            [
                'name' => 'Caja Maynas',
                'logo' => 'media/images/banks/default-logo.png',
                'code' => 'banco_maynas'
            ],
            [
                'name' => 'Caja Paita',
                'logo' => 'media/images/banks/default-logo.png',
                'code' => 'banco_paita'
            ],
            [
                'name' => 'Caja Sullana',
                'logo' => 'media/images/banks/default-logo.png',
                'code' => 'banco_sullana'
            ],
            [
                'name' => 'Caja Tacna',
                'logo' => 'media/images/banks/default-logo.png',
                'code' => 'banco_tacna'
            ],
            [
                'name' => 'Caja Trujillo',
                'logo' => 'media/images/banks/default-logo.png',
                'code' => 'banco_trujillo'
            ],
            [
                'name' => 'Citibank Perú',
                'logo' => 'media/images/banks/citibank.png',
                'code' => 'banco_citibank'
            ],
            [
                'name' => 'Cusco',
                'logo' => 'media/images/banks/default-logo.png',
                'code' => 'cusco'
            ],
            [
                'name' => 'Interbank',
                'logo' => 'media/images/banks/interbank.png',
                'code' => 'banco_interbank'
            ],
            [
                'name' => 'Interbank | CCI',
                'logo' => 'media/images/banks/interbank.png',
                'code' => 'banco_interbank_cci'
            ],
            [
                'name' => 'MiBanco',
                'logo' => 'media/images/banks/default-logo.png',
                'code' => 'banco_mi_banco'
            ],
            [
                'name' => 'Scotiabank Perú',
                'logo' => 'media/images/banks/scotiabank.png',
                'code' => 'banco_scotiabank'
            ],
        ];

        foreach ($banks as $bank) {
            Bank::firstOrCreate(
                ['code' => $bank['code']],
                ['logo' => $bank['logo'], 'name' => $bank['name']]
            );
        }
    }
}
