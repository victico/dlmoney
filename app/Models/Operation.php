<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Operation extends Model
{
    use HasFactory, SoftDeletes;

    protected $appends = array('status_label');

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'bank_account_send_id',
        'bank_account_receive_id',
        'amount',
        'bank_account_transfer_id',
        'change_amount',
        'exchange_rate',
        'status',
        'previous_status',
        'operation_number',
        'fund_origin_id',
        'other_fund_origin',
        'additional_info',
        'last_user_modified',
        'created_by',
    ];
    
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    protected $statuses = array(
        -1  =>  'Cancelado',
        0   =>  'Iniciado',
        1   =>  'Pendiente',
        2   =>  'Procesando',
        3   =>  'Finalizado',
    );

    public function getStatusLabelAttribute()
    {
        return $this->statuses[$this->status];  
    }

    public function getStatusByKey($key)
    {
        return $this->statuses[$key];
    }

    public function bank_account_send(){
        return $this->hasOne(BankAccount::class, 'id', 'bank_account_send_id');
    }

    public function bank_account_receive(){
        return $this->hasOne(BankAccount::class, 'id', 'bank_account_receive_id');
    }

    public function bank_account_transfer(){
        return $this->belongsTo(BankAccount::class, 'bank_account_transfer_id');
    }

    public function fund_origin(){
        return $this->hasOne(FundOrigin::class, 'id', 'fund_origin_id');
    }

    public function get_personal_user($personalUsedId){
        return PersonalAccount::find($personalUsedId);
    }

    public function get_company_user($companyUsedId){
        return CompanyAccount::find($companyUsedId);
    }
}
