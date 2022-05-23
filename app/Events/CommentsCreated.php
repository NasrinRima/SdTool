<?php

namespace BookStack\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Duijker\LaravelMercureBroadcaster\Broadcasting\Channel;

class CommentsCreated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    protected $comment;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($comment)
    {
        $this->comment = $comment;
    }

    public function broadcastOn()
    {
        return new Channel('http://event/comment', true);
    }

    public function broadcastAs()
    {
        return 'event.comments.created';
    }

    public function broadcastWith()
    {
        return $this->comment;
    }
}
