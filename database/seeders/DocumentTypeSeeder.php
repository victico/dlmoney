<?php

namespace Database\Seeders;

use App\Models\DocumentType;
use Illuminate\Database\Seeder;

class DocumentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $documentTypes = [
            [
                'name' => 'DNI',
                'code' => 'dni'
            ],
            [
                'name' => 'PASAPORTE',
                'code' => 'pasaporte'
            ],
            [
                'name' => 'RUC 10',
                'code' => 'ruc_10'
            ],
            [
                'name' => 'RUC 20',
                'code' => 'ruc_20'
            ],
            [
                'name' => 'Carnet de Extranjería',
                'code' => 'carnet_extranjeria'
            ],
        ];

        foreach ($documentTypes as $documentType) {
            DocumentType::firstOrCreate(
                ['code' => $documentType['code']],
                ['name' => $documentType['name']],
            );
        }
    }
}
