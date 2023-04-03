<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanyAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_accounts', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('user_id');

            $table->string('ruc');
            $table->string('business_name');
            $table->string('business_turn');
            
            $table->unsignedBigInteger('country_id');
            $table->unsignedBigInteger('department_id');
            $table->unsignedBigInteger('province_id');
            $table->unsignedBigInteger('district_id');

            $table->string('fiscal_address');
            $table->string('email');
            $table->string('phone');

            $table->unsignedBigInteger('document_type_lr_id');
            $table->string('document_number_lr');
            $table->string('document_front_lr');
            $table->string('document_back_lr');
            $table->string('name_lr');
            $table->string('surname_lr');
            $table->unsignedBigInteger('ocupation_lr_id');

            $table->unsignedBigInteger('document_type_c_id');
            $table->string('document_number_c');
            $table->string('document_front_c');
            $table->string('document_back_c');
            $table->string('name_c');
            $table->string('surname_c');
            $table->string('birthdate_c')->nullable();
            $table->string('phone_c')->nullable();

            $table->boolean('preferential')->default(false);
            $table->float('preferential_purchase')->nullable();
            $table->float('preferential_sale')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('restrict')
                ->onUpdate('restrict');

            $table->foreign('document_type_lr_id')
                ->references('id')
                ->on('document_types')
                ->onDelete('restrict')
                ->onUpdate('restrict');

            $table->foreign('document_type_c_id')
                ->references('id')
                ->on('document_types')
                ->onDelete('restrict')
                ->onUpdate('restrict');

            $table->foreign('country_id')
                ->references('id')
                ->on('countries')
                ->onDelete('restrict')
                ->onUpdate('restrict');

            $table->foreign('department_id')
                ->references('id')
                ->on('departments')
                ->onDelete('restrict')
                ->onUpdate('restrict');

            $table->foreign('province_id')
                ->references('id')
                ->on('provinces')
                ->onDelete('restrict')
                ->onUpdate('restrict');

            $table->foreign('district_id')
                ->references('id')
                ->on('districts')
                ->onDelete('restrict')
                ->onUpdate('restrict');

            $table->foreign('ocupation_lr_id')
                ->references('id')
                ->on('ocupations')
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
        Schema::dropIfExists('company_accounts');
    }
}
