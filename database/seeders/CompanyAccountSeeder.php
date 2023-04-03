<?php

namespace Database\Seeders;

use App\Models\CompanyAccount;
use App\Models\DocumentType;
use App\Models\User;
use Illuminate\Database\Seeder;

class CompanyAccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $clientUserId = User::where('username', 'client')->first()->id;
        $dniId = DocumentType::where('code', 'dni')->first()->id;

        $companyAccounts = [
            [
                'user_id' => $clientUserId,
                'ruc' => 'corralon_la_rural',
                'business_name' => 'Corralon La Rural',
                'business_turn' => 'Venta de materiales',
                'country_id' => 139,
                'department_id' => 15,
                'province_id' => 128,
                'district_id' => 1281,
                'fiscal_address' => 'Calle 19 N° 1950',
                'email' => 'corralon@corralonlarural.com',
                'phone' => '422822',
                'document_type_lr_id' => $dniId,
                'document_number_lr' => '16316796',
                'document_front_lr' => '',
                'document_back_lr' => '',
                'name_lr' => 'Diego',
                'surname_lr' => 'Ziliotto',
                'ocupation_lr_id' => 1,
                'document_type_c_id' => $dniId,
                'document_number_c' => '18053895',
                'document_front_c' => '',
                'document_back_c' => '',
                'name_c' => 'Susana',
                'surname_c' => 'Rodriguez',
                'birthdate_c' => '1964-01-20',
                'phone_c' => '2302449493',
            ],
        ];

        foreach ($companyAccounts as $companyAccount) {
            CompanyAccount::firstOrCreate(
                ['user_id' => $companyAccount['user_id'], 'ruc' => $companyAccount['ruc'], 'business_name' => $companyAccount['business_name']],
                [
                    'business_turn' => $companyAccount['business_turn'],
                    'country_id' => $companyAccount['country_id'],
                    'department_id' => $companyAccount['department_id'],
                    'province_id' => $companyAccount['province_id'],
                    'district_id' => $companyAccount['district_id'],
                    'fiscal_address' => $companyAccount['fiscal_address'],
                    'email' => $companyAccount['email'],
                    'phone' => $companyAccount['phone'],
                    'document_type_lr_id' => $companyAccount['document_type_lr_id'],
                    'document_number_lr' => $companyAccount['document_number_lr'],
                    'document_front_lr' => $companyAccount['document_front_lr'],
                    'document_back_lr' => $companyAccount['document_back_lr'],
                    'name_lr' => $companyAccount['name_lr'],
                    'surname_lr' => $companyAccount['surname_lr'],
                    'ocupation_lr_id' => $companyAccount['ocupation_lr_id'],
                    'document_type_c_id' => $companyAccount['document_type_c_id'],
                    'document_number_c' => $companyAccount['document_number_c'],
                    'document_front_c' => $companyAccount['document_front_c'],
                    'document_back_c' => $companyAccount['document_back_c'],
                    'name_c' => $companyAccount['name_c'],
                    'surname_c' => $companyAccount['surname_c'],
                    'birthdate_c' => $companyAccount['birthdate_c'],
                    'phone_c' => $companyAccount['phone_c'],
                ]
            );
        }
    }
}
