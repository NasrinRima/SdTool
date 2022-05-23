<?php

namespace BookStack\Events;


class CommentsDeleted extends CommentsCreated
{
    public function broadcastAs()
    {
        return 'event.comments.deleted';
    }
}
