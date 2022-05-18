<?php

namespace BookStack\Exceptions;

use Exception;

class PermissionsException extends Exception
{
    /**
     * Permission constructor.
     */
    public function __construct($message = 'You do not have permission')
    {
        parent::__construct($message, 403);
    }
}
