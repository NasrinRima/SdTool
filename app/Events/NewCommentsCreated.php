<?php

namespace App\Events;

use BookStack\Actions\Comment;
use Duijker\LaravelMercureBroadcaster\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class NewCommentsCreated implements ShouldBroadcast
{

    /**
     * @var Comment
     */
    public $comment;

    public function __construct(Comment $comment)
    {
        $this->comment = $comment;
    }

    public function broadcastOn()
    {
        return new Channel('http://bookstack.local/news-items');
    }
}