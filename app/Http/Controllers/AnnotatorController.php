<?php

namespace BookStack\Http\Controllers;

use BookStack\Entities\Models\Annotation;
use BookStack\Entities\Repos\AnnotationsRepo;
use BookStack\Events\AnnotationCreated;
use BookStack\Events\AnnotationDeleted;
use BookStack\Events\AnnotationUpdated;
use BookStack\Exceptions\PermissionsException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\JsonResponse;
use Throwable;

class AnnotatorController extends Controller
{
    protected $annotationsRepo;

    /**
     * PageController constructor.
     */
    public function __construct(AnnotationsRepo $annotationsRepo)
    {
        $this->annotationsRepo = $annotationsRepo;
    }

    public function search($revision, Request $request)
    {
        $annotations = Annotation::query()->where(
            'page_revision_id',
            $revision
        )->get();
        $data['total'] = count($annotations);
        $data['rows'] = [];

        foreach ($annotations as $annotation) {
            $data['rows'][] = $this->annotationsRepo->toArray($annotation);
        }

        return new JsonResponse($data);
    }

    public function save($revision, Request $request)
    {
        $this->checkPermission('annotation-create-all');
        $data = json_decode($request->getContent(), true);
        $annotation = new Annotation();
        $annotation->page_revision_id = $revision;
        $annotation->text = $data['text'];
        $annotation->quote = $data['quote'];
        $annotation->ranges = json_encode($data['ranges']);
        $annotation->image = json_encode($data['image'] ?? []);
        $annotation->created_by = Auth::user()->id;
        $annotation->updated_by = Auth::user()->id;
        $annotation->save();
        $dataArray = $this->annotationsRepo->toArray($annotation);
        AnnotationCreated::dispatch($revision, $dataArray);

        return new JsonResponse($dataArray);
    }

    public function update($revision, $annotation, Request $request)
    {
        $annotationObj = Annotation::findOrFail($annotation);
        $this->checkPermission('annotation-update-all');
        if (Auth::user()->id != $annotationObj->created_by) {
            throw new PermissionsException();
        }
        $annotationObj->text = $request->input('text');
        $annotationObj->update();

        $data = $this->annotationsRepo->toArray($annotationObj);
        AnnotationUpdated::dispatch($revision, $data);

        return new JsonResponse($data);
    }

    public function delete($revision, $annotation)
    {
        $annotationObj = Annotation::findOrFail($annotation);
        $this->checkPermission('annotation-delete-all');
        if (Auth::user()->id != $annotationObj->created_by) {
            throw new PermissionsException();
        }

        $data = $this->annotationsRepo->toArray($annotationObj);
        $annotationObj->delete();
        AnnotationDeleted::dispatch($revision, $data);

        return new JsonResponse($data);
    }

}
