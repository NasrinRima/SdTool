<?php

namespace BookStack\Entities\Repos;

use Illuminate\Support\Facades\DB;

class AnnotationsRepo
{
    public function toArray($annotation)
    {

        $data = [
            'id' => $annotation->id,
            'text' => $annotation->text,
            'created' => $annotation->created_at->format(\DateTime::ISO8601),
            'updated' => $annotation->updated_at->format(\DateTime::ISO8601),
            'user' => $annotation->created_by === null ? null : $this->getUserId($annotation->created_by),
            'userName' => $annotation->created_by === null ? 'Anonymous' : $this->getUserName($annotation->created_by),
            'quote' => $annotation->quote,
            'ranges' => json_decode($annotation->ranges),
            'image' => json_decode($annotation->image),
        ];

        $data['permissions'] = [
            "read" => ["group:__world__"],
           "update" => [$data['user']],
            "delete" => [$data['user']],
        ];

        return $data;
    }

    public static function getUserId($id)
    {
        return DB::table('users')->where('id', $id)->pluck('id')->first();

    }
    public static function getUserName($id)
    {
        return DB::table('users')->where('id', $id)->pluck('name')->first();

    }

}