<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonalAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personal_accounts', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('user_id');

            $table->unsignedBigInteger('document_type_id');
            $table->string('document_number');
            $table->string('document_front');
            $table->string('document_back');
            $table->string('name');
            $table->string('surname');
            $table->date('birthdate');
            $table->string('phone')->nullable();
            $table->string('cellphone1')->nullable();
            $table->string('cellphone2')->nullable();

            $table->unsignedBigInteger('country_id');
            $table->unsignedBigInteger('department_id');
            $table->unsignedBigInteger('province_id');
            $table->unsignedBigInteger('district_id');
            $table->string('address');

            $table->unsignedBigInteger('ocupation_id');
            $table->boolean('exposed_person');
            $table->string('position')->nullable();
            $table->string('workplace')->nullable();

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

            $table->foreign('document_type_id')
                ->references('id')
                ->on('document_types')
                ->onDelete('restrict')
                ->onUpdate('restrict');

            $table->foreign('ocupation_id')
                ->references('id')
                ->on('ocupations')
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
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('personal_accounts');
    }
}
