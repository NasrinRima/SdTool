<?php

namespace BookStack\Http\Controllers;

use BookStack\Actions\View;
use BookStack\Exceptions\NotFoundException;
use BookStack\Exceptions\PermissionsException;
use Exception;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Throwable;

class AnnotatorController extends Controller
{
    public function search()
    {
        return response()->json([
            'message' => 'Search Annotator',
            'status' => true,
        ]);
    }

    public function save()
    {
        return response()->json([
            'message' => 'Save Annotator',
            'status' => true,
        ]);
    }

    public function update()
    {
        return response()->json([
            'message' => 'Update Annotator',
            'status' => true,
        ]);
    }

    public function delete()
    {
        return response()->json([
            'message' => 'Delete Annotator',
            'status' => true,
        ]);
    }

}
