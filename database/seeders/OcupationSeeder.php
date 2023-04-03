<?php

namespace Database\Seeders;

use App\Models\Ocupation;
use Illuminate\Database\Seeder;

class OcupationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ocupations = [
            [
                'name' => 'Trabajador/a independiente',
                'code' => 'trabajador_independiente'
            ],
            [
                'name' => 'Estudiante',
                'code' => 'estudiante'
            ],
            [
                'name' => 'Jubilado/a',
                'code' => 'jubilado'
            ],
            [
                'name' => 'Obrero/a',
                'code' => 'obrero'
            ],
            [
                'name' => 'Miembro de las fuerzas armadas / miembro del clero',
                'code' => 'miembro_fuerzas_armadas_o_clero'
            ],
            [
                'name' => 'Dependiente',
                'code' => 'dependiente'
            ],
            [
                'name' => 'Ama de casa',
                'code' => 'ama_casa'
            ],
            [
                'name' => 'Empleador/a',
                'code' => 'empleador'
            ],
            [
                'name' => 'Desempleado',
                'code' => 'desempleado'
            ],
            [
                'name' => 'Trabajador/a del hogar',
                'code' => 'trabajador_hogar'
            ],
            [
                'name' => 'No declara',
                'code' => 'no_declara'
            ],
        ];

        foreach ($ocupations as $ocupation) {
            Ocupation::firstOrCreate(
                ['code' => $ocupation['code']],
                ['name' => $ocupation['name']],
            );
        }
    }
}
