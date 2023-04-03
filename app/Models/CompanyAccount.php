<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CompanyAccount extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'ruc',
        'business_name',
        'business_turn',
        'country_id',
        'department_id',
        'province_id',
        'district_id',
        'fiscal_address',
        'email',
        'phone',
        'document_type_lr_id',
        'document_number_lr',
        'document_front_lr',
        'document_back_lr',
        'name_lr',
        'surname_lr',
        'ocupation_lr_id',
        'document_type_c_id',
        'document_number_c',
        'document_front_c',
        'document_back_c',
        'name_c',
        'surname_c',
        'birthdate_c',
        'phone_c',
        'preferential',
        'preferential_purchase',
        'preferential_sale',
    ];

    public function user()
    {
        return $this->belongsTo(User::class)->withTrashed();
    }

    public function document_type_lr()
    {
        return $this->belongsTo(DocumentType::class);
    }
    public function ocupation_lr()
    {
        return $this->belongsTo(Ocupation::class);
    }
    public function document_type_c()
    {
        return $this->belongsTo(DocumentType::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function province()
    {
        return $this->belongsTo(Province::class);
    }

    public function district()
    {
        return $this->belongsTo(District::class);
    }
}
