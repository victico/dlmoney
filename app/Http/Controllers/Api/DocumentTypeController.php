<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DocumentType;
use Illuminate\Support\Facades\Cache;

class DocumentTypeController extends Controller
{
    public function getAll()
    {
        if (Cache::has('document_types')) {
            $documentTypes = Cache::get('document_types');
        }
        else {
            $documentTypes = DocumentType::all();
            Cache::put('document_types', $documentTypes, now()->addMonth());
        }
        return $this->returnSuccess(200, $documentTypes);
    }
}
