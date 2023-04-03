<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOperationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('operations', function (Blueprint $table) {
            $table->id();
            
            $table->unsignedBigInteger('bank_account_send_id');
            $table->unsignedBigInteger('bank_account_receive_id');
            $table->float('amount', 8, 3);
            $table->unsignedBigInteger('bank_account_transfer_id');
            $table->float('change_amount', 8, 3);
            $table->float('exchange_rate', 8, 3);
            $table->integer('status')->default(1);
            $table->integer('previous_status')->default(0);
            $table->string('operation_number')->nullable();
            $table->unsignedBigInteger('fund_origin_id');
            $table->string('other_fund_origin')->nullable();
            $table->text('additional_info')->nullable();
            $table->string('last_user_modified');
            $table->string('created_by');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('bank_account_send_id')
                ->references('id')
                ->on('bank_accounts')
                ->onDelete('restrict')
                ->onUpdate('restrict');

            $table->foreign('bank_account_receive_id')
                ->references('id')
                ->on('bank_accounts')
                ->onDelete('restrict')
                ->onUpdate('restrict');

            $table->foreign('bank_account_transfer_id')
                ->references('id')
                ->on('bank_accounts')
                ->onDelete('restrict')
                ->onUpdate('restrict');

            $table->foreign('fund_origin_id')
                ->references('id')
                ->on('fund_origins')
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
        Schema::dropIfExists('operations');
    }
}
