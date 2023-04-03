<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'username'=> 'sysadmin',
                'email'=> 'sysadmin@presstocambio.com',
                'password' => \Illuminate\Support\Facades\Hash::make('12345678'),
                'role' => 'sysadmin'
            ],
            [
                'username'=> 'developer',
                'email'=> 'devops@presstocambio.com',
                'password' => \Illuminate\Support\Facades\Hash::make('12345678'),
                'role' => 'admin'
            ],
            [
                'username'=> 'client',
                'email'=> 'client@presstocambio.com',
                'password' => \Illuminate\Support\Facades\Hash::make('12345678'),
                'role' => 'user'
            ]
        ];

        foreach ($users as $user) {
            $userAux = User::firstOrCreate(
                ['username' => $user['username']],
                ['email' => $user['email'], 'password' => $user['password']]
            );

            $userAux->roles()->attach(Role::where('name', $user['role'])->first());
        }
    }
}
