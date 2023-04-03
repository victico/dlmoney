<?php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $peruCountryId = 139;
        $departments = [ 
            ['name' => 'AMAZONAS', 'country_id' => $peruCountryId],
            ['name' => 'ANCASH', 'country_id' => $peruCountryId],
            ['name' => 'APURIMAC', 'country_id' => $peruCountryId],
            ['name' => 'AREQUIPA', 'country_id' => $peruCountryId],
            ['name' => 'AYACUCHO', 'country_id' => $peruCountryId],
            ['name' => 'CAJAMARCA', 'country_id' => $peruCountryId],
            ['name' => 'CALLAO', 'country_id' => $peruCountryId],
            ['name' => 'CUSCO', 'country_id' => $peruCountryId],
            ['name' => 'HUANCAVELICA', 'country_id' => $peruCountryId],
            ['name' => 'HUANUCO', 'country_id' => $peruCountryId],
            ['name' => 'ICA', 'country_id' => $peruCountryId],
            ['name' => 'JUNIN', 'country_id' => $peruCountryId],
            ['name' => 'LA LIBERTAD', 'country_id' => $peruCountryId],
            ['name' => 'LAMBAYEQUE', 'country_id' => $peruCountryId],
            ['name' => 'LIMA', 'country_id' => $peruCountryId],
            ['name' => 'LORETO', 'country_id' => $peruCountryId],
            ['name' => 'MADRE DE DIOS', 'country_id' => $peruCountryId],
            ['name' => 'MOQUEGUA', 'country_id' => $peruCountryId],
            ['name' => 'PASCO', 'country_id' => $peruCountryId],
            ['name' => 'PIURA', 'country_id' => $peruCountryId],
            ['name' => 'PUNO', 'country_id' => $peruCountryId],
            ['name' => 'SAN MARTIN', 'country_id' => $peruCountryId],
            ['name' => 'TACNA', 'country_id' => $peruCountryId],
            ['name' => 'TUMBES', 'country_id' => $peruCountryId],
            ['name' => 'UCAYALI', 'country_id' => $peruCountryId],
        ];

        foreach ($departments as $department) {
            Department::firstOrCreate(
                [
                    'name' => $department['name'],
                    'country_id' => $department['country_id']
                ],
            );
        }
    }
}
