<?php

namespace Database\Seeders;

use App\Models\DocumentType;
use App\Models\Ocupation;
use App\Models\PersonalAccount;
use App\Models\User;
use Illuminate\Database\Seeder;

class PersonalAccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $devopsUserId = User::where('username', 'developer')->first()->id;
        $clientUserId = User::where('username', 'client')->first()->id;
        $dniId = DocumentType::where('code', 'dni')->first()->id;
        $studentId = Ocupation::where('code', 'estudiante')->first()->id;

        $personalAccounts = [
            [
                'user_id' => $devopsUserId,
                'document_type_id' => $dniId,
                'document_number' => '40610993',
                'document_front' => '',
                'document_back' => '',
                'name' => 'Matias',
                'surname' => 'Ziliotto',
                'birthdate' => '1997-11-21',
                'phone' => '332380',
                'cellphone1' => '2302209165',
                'country_id' => 139,
                'department_id' => 15,
                'province_id' => 128,
                'district_id' => 1281,
                'address' => 'Calle 30 N° 964',
                'ocupation_id' => $studentId,
                'exposed_person' => 0,
            ],
            [
                'user_id' => $clientUserId,
                'document_type_id' => $dniId,
                'document_number' => '41185848',
                'document_front' => '',
                'document_back' => '',
                'name' => 'Delfina',
                'surname' => 'Rodriguez',
                'birthdate' => '1998-07-30',
                'phone' => '342385',
                'cellphone1' => '230222556',
                'country_id' => 139,
                'department_id' => 15,
                'province_id' => 128,
                'district_id' => 1281,
                'address' => 'Calle 24 N° 1125',
                'ocupation_id' => $studentId,
                'exposed_person' => 0,
            ],
        ];

        foreach ($personalAccounts as $personalAccount) {
            $personalAccount = PersonalAccount::firstOrCreate(
                ['user_id' => $personalAccount['user_id'], 'name' => $personalAccount['name'], 'surname' => $personalAccount['surname']],
                [
                    'document_type_id' => $personalAccount['document_type_id'],
                    'document_number' => $personalAccount['document_number'],
                    'document_front' => $personalAccount['document_front'],
                    'document_back' => $personalAccount['document_back'],
                    'birthdate' => $personalAccount['birthdate'],
                    'phone' => $personalAccount['phone'],
                    'cellphone1' => $personalAccount['cellphone1'],
                    'country_id' => $personalAccount['country_id'],
                    'department_id' => $personalAccount['department_id'],
                    'province_id' => $personalAccount['province_id'],
                    'district_id' => $personalAccount['district_id'],
                    'address' => $personalAccount['address'],
                    'ocupation_id' => $personalAccount['ocupation_id'],
                    'exposed_person' => $personalAccount['exposed_person'],
                ]
            );

            if ($personalAccount['user_id'] == $devopsUserId) {
                $user = User::find($devopsUserId);
                $user->active_account_type = 0;
                $user->active_account = $personalAccount->id;
                $user->save();
            } else{
                $user = User::find($clientUserId);
                $user->active_account_type = 0;
                $user->active_account = $personalAccount->id;
                $user->save();
            }
        }
    }
}
