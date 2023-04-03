<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Peru\Jne\DniFactory;
use Peru\Sunat\RucFactory;

class PeruConsultController extends Controller
{
    public function queryByDNI($document_number)
    {
        $factory = new DniFactory();
        $cs = $factory->create();

        $personData = $cs->get($document_number);
        if (!$personData) {
            return $this->returnFail(404, 'Persona no encontrada');
        }

        return $this->returnSuccess(200, $personData);
    }

    public function queryByRUC($ruc)
    {
        $factory = new RucFactory();
        $cs = $factory->create();

        $companyData = $cs->get($ruc);
        if (!$companyData) {
            return $this->returnFail(404, 'Empresa no encontrada');
        }

        return $this->returnSuccess(200, $companyData);
    }
}
