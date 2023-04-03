<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            [
                'name'=> 'sysadmin',
                'description'=> 'Sysadmin'
            ],
            [
                'name'=> 'admin',
                'description'=> 'Administrador'
            ],
            [
                'name'=> 'user', 
                'description'=> 'Usuario'
            ],
        ];

        foreach ($roles as $role) {
            Role::firstOrCreate(
                ['name' => $role['name']],
                ['description' => $role['description']]
            );
        }
    }
}
