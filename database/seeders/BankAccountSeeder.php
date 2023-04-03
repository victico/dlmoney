<?php

namespace Database\Seeders;

use App\Models\Bank;
use App\Models\BankAccount;
use App\Models\BankAccountType;
use App\Models\CoinType;
use App\Models\CompanyAccount;
use App\Models\PersonalAccount;
use Illuminate\Database\Seeder;

class BankAccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $personalAccountAdminId = PersonalAccount::where('document_number', '40610993')->first()->id;
        $personalAccountUserId = PersonalAccount::where('document_number', '41185848')->first()->id;
        $companyAccountUserId = CompanyAccount::where('ruc', 'corralon_la_rural')->first()->id;

        $santanderBankId = Bank::where('code', 'banco_santander')->first()->id;
        $bbvaBankId = Bank::where('code', 'banco_bbva')->first()->id; 
        $ripleyBankId = Bank::where('code', 'banco_ripley')->first()->id;

        $savingBankAccountTypeId = BankAccountType::where('code', 'ahorro')->first()->id;
        $currentBankAccountTypeId = BankAccountType::where('code', 'corriente')->first()->id;

        $solBankAccountTypeId = CoinType::where('code', 'sol')->first()->id;
        $dollarBankAccountTypeId = CoinType::where('code', 'dolar')->first()->id;

        $bankAccounts = [
            //Admin account
            [
                'personal_account_id' => $personalAccountAdminId,
                'bank_id' => $santanderBankId,
                'bank_account_type_id' => $currentBankAccountTypeId,
                'coin_type_id' => $solBankAccountTypeId,
                'to_transfer' => 1,
                'account_number' => '11111111',
                'account_number_cci' => '11111111|cci',
                'alias' => 'matias.sol.sr',
                'own_account' => 1,
            ],
            //Admin account
            [
                'personal_account_id' => $personalAccountAdminId,
                'bank_id' => $santanderBankId,
                'bank_account_type_id' => $currentBankAccountTypeId,
                'coin_type_id' => $dollarBankAccountTypeId,
                'to_transfer' => 1,
                'account_number' => '22222222',
                'account_number_cci' => '22222222|cci',
                'alias' => 'matias.dolar.sr',
                'own_account' => 1,
            ],
            //User account
            [
                'personal_account_id' => $personalAccountUserId,
                'bank_id' => $bbvaBankId,
                'bank_account_type_id' => $savingBankAccountTypeId,
                'coin_type_id' => $solBankAccountTypeId,
                'to_transfer' => 0,
                'account_number' => '33333333',
                'account_number_cci' => '33333333|cci',
                'alias' => 'delfina.sol.sr',
                'own_account' => 1,
            ],
            //User account
            [
                'personal_account_id' => $personalAccountUserId,
                'bank_id' => $bbvaBankId,
                'bank_account_type_id' => $currentBankAccountTypeId,
                'coin_type_id' => $dollarBankAccountTypeId,
                'to_transfer' => 0,
                'account_number' => '44444444',
                'account_number_cci' => '44444444|cci',
                'alias' => 'delfina.dolar.sr',
                'own_account' => 1,
            ],
            //User account
            [
                'company_account_id' => $companyAccountUserId,
                'bank_id' => $ripleyBankId,
                'bank_account_type_id' => $savingBankAccountTypeId,
                'coin_type_id' => $solBankAccountTypeId,
                'to_transfer' => 0,
                'account_number' => '55555555',
                'account_number_cci' => '55555555|cci',
                'alias' => 'corralon.sol.sr',
                'own_account' => 1,
            ],
            //User account
            [
                'company_account_id' => $companyAccountUserId,
                'bank_id' => $ripleyBankId,
                'bank_account_type_id' => $currentBankAccountTypeId,
                'coin_type_id' => $dollarBankAccountTypeId,
                'to_transfer' => 0,
                'account_number' => '66666666',
                'account_number_cci' => '66666666|cci',
                'alias' => 'corralon.dolar.sr',
                'own_account' => 1,
            ],
        ];

        foreach ($bankAccounts as $bankAccount) {
            if (isset($bankAccount['personal_account_id'])) {
                BankAccount::firstOrCreate(
                    ['account_number' => $bankAccount['account_number'], 'account_number_cci' => $bankAccount['account_number_cci']],
                    [
                        'personal_account_id' => $bankAccount['personal_account_id'],
                        'bank_id' => $bankAccount['bank_id'],
                        'bank_account_type_id' => $bankAccount['bank_account_type_id'],
                        'coin_type_id' => $bankAccount['coin_type_id'],
                        'to_transfer' => $bankAccount['to_transfer'],
                        'alias' => $bankAccount['alias'],
                        'own_account' => $bankAccount['own_account'],
                    ]
                );
            }
            else if (isset($bankAccount['company_account_id'])) {
                BankAccount::firstOrCreate(
                    ['account_number' => $bankAccount['account_number'], 'account_number_cci' => $bankAccount['account_number_cci']],
                    [
                        'company_account_id' => $bankAccount['company_account_id'],
                        'bank_id' => $bankAccount['bank_id'],
                        'bank_account_type_id' => $bankAccount['bank_account_type_id'],
                        'coin_type_id' => $bankAccount['coin_type_id'],
                        'alias' => $bankAccount['alias'],
                        'own_account' => $bankAccount['own_account'],
                    ]
                );
            }
        }
    }
}
