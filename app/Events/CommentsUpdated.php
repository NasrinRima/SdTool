<?php

namespace BookStack\Events;


class CommentsUpdated extends CommentsCreated
{
    public function broadcastAs()
    {
        return 'event.comments.updated';
    }
}
