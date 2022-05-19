<?php

namespace BookStack\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Duijker\LaravelMercureBroadcaster\Broadcasting\Channel;

class AnnotationUpdated extends AnnotationCreated
{
    public function broadcastAs()
    {
        return 'event.annotation.updated.'.$this->revision;
    }
}
