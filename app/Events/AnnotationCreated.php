<?php

namespace BookStack\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Duijker\LaravelMercureBroadcaster\Broadcasting\Channel;

class AnnotationCreated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(protected $revision, protected array $data)
    {
        //
    }

    public function broadcastOn()
    {
        return new Channel('http://event/annotation', true);
    }

    public function broadcastAs()
    {
        return 'event.annotation.created.'.$this->revision;
    }

    public function broadcastWith()
    {
        return $this->data;
    }
}
