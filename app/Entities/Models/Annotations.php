<?php

namespace BookStack\Entities\Models;

use BookStack\Auth\User;
use BookStack\Model;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class PageRevision.
 *
 * @property mixed  $id
 * @property int    $page_revision_id
 * @property string $text
 * @property string $hash
 * @property string    $quote
 * @property array    $image
 * @property array    $ranges
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property mixed  $created_by
 * @property mixed  $updated_by
 */
class Annotations extends Model
{
    protected $fillable = ['page_revision_id', 'hash', 'text', 'quote', 'image','ranges'];

}
