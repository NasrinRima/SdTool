<?php

namespace BookStack\Traits;

use BookStack\Auth\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $owned_by
 */
trait IsContentOwner
{
    /**
     * Get the content owner.
     */
    public function ownedBy(): bool
    {
        return true;
    }
}
