<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BankAccount extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'company_account_id',
        'personal_account_id',
        'bank_id',
        'bank_account_type_id',
        'coin_type_id',
        'to_transfer',
        'account_number',
        'account_number_cci',
        'alias',
        'own_account',
        'owner_name',
        'owner_document_type_id',
        'owner_document_number',
        'authorized_deposit',
    ];

    public function bank_account_type(){
        return $this->belongsTo(BankAccountType::class, 'bank_account_type_id');
    }

	public function bank(){
        return $this->belongsTo(Bank::class,'bank_id');
    }

	public function coin_type(){
        return $this->belongsTo(CoinType::class,'coin_type_id');
    }

    public function owner_document_type()
    {
        return $this->belongsTo(DocumentType::class,'owner_document_type_id');
    }

    public function personal_account()
    {
        return $this->belongsTo(PersonalAccount::class);
    }

    public function company_account()
    {
        return $this->belongsTo(CompanyAccount::class);
    }
}
