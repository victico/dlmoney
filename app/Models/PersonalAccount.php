<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PersonalAccount extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'document_type_id',
        'document_number',
        'document_front',
        'document_back',
        'name',
        'surname',
        'birthdate',
        'phone',
        'cellphone1',
        'cellphone2',
        'country_id',
        'department_id',
        'province_id',
        'district_id',
        'address',
        'ocupation_id',
        'exposed_person',
        'position',
        'workplace',
        'preferential',
        'preferential_purchase',
        'preferential_sale',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function document_type()
    {
        return $this->belongsTo(DocumentType::class);
    }

    public function ocupation()
    {
        return $this->belongsTo(Ocupation::class);
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
