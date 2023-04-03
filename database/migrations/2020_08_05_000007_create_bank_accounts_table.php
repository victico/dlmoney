<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBankAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bank_accounts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('company_account_id')->nullable();
            $table->unsignedBigInteger('personal_account_id')->nullable();
            $table->unsignedBigInteger('bank_id');
            $table->unsignedBigInteger('bank_account_type_id');
            $table->unsignedBigInteger('coin_type_id');

            $table->boolean('to_transfer')->default(0);
            $table->string('account_number');
            $table->string('account_number_cci');
            $table->string('alias');
            $table->boolean('own_account');
            $table->string('owner_name')->nullable();
            $table->unsignedBigInteger('owner_document_type_id')->nullable();
            $table->string('owner_document_number')->nullable();
            $table->boolean('authorized_deposit')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('company_account_id')
                ->references('id')
                ->on('company_accounts')
                ->onDelete('restrict')
                ->onUpdate('restrict');

            $table->foreign('personal_account_id')
                ->references('id')
                ->on('personal_accounts')
                ->onDelete('restrict')
                ->onUpdate('restrict');
            
            $table->foreign('bank_id')
                ->references('id')
                ->on('banks')
                ->onDelete('restrict')
                ->onUpdate('restrict');

            $table->foreign('bank_account_type_id')
                ->references('id')
                ->on('bank_account_types')
                ->onDelete('restrict')
                ->onUpdate('restrict');

            $table->foreign('coin_type_id')
                ->references('id')
                ->on('coin_types')
                ->onDelete('restrict')
                ->onUpdate('restrict');
            
            $table->foreign('owner_document_type_id')
                ->references('id')
                ->on('document_types')
                ->onDelete('restrict')
                ->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bank_accounts');
    }
}
