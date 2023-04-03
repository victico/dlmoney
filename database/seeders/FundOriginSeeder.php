<?php

namespace Database\Seeders;

use App\Models\FundOrigin;
use Illuminate\Database\Seeder;

class FundOriginSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fundOrigins = [
            [
                'name' => 'Ahorros',
                'code' => 'ahorros'
            ],
            [
                'name' => 'Alquiler de bienes muebles',
                'code' => 'alquiler_bienes_muebles'
            ],
            [
                'name' => 'Alquiler de bienes inmuebles',
                'code' => 'alquiler_bienes_inmuebles'
            ],
            [
                'name' => 'Donacion / sorteo',
                'code' => 'donacion_sorteo'
            ],
            [
                'name' => 'Ingreso por trabajo independiente',
                'code' => 'ingreso_por_trabajo_independiente'
            ],
            [
                'name' => 'Ingreso por trabajo dependiente',
                'code' => 'ingreso_por_trabajo_dependiente'
            ],
            [
                'name' => 'Ingreso por regalias',
                'code' => 'ingreso_por_regalias'
            ],
            [
                'name' => 'Prestamos',
                'code' => 'prestamos'
            ],
            [
                'name' => 'Venta de bien mueble',
                'code' => 'venta_bien_mueble'
            ],
            [
                'name' => 'Venta de bien inmueble',
                'code' => 'venta_bien_inmueble'
            ],
            [
                'name' => 'Otros',
                'code' => 'otros'
            ],
        ];

        foreach ($fundOrigins as $fundOrigin) {
            FundOrigin::firstOrCreate(
                ['code' => $fundOrigin['code']],
                ['name' => $fundOrigin['name']],
            );
        }
    }
}
