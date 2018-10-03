<?php

namespace App\Ports;

use SuperV\Platform\Domains\Port\Port;

class ApiPort extends Port
{
    protected $slug = 'api';

    protected $guard = 'superv-api';

    protected $navigationSlug = 'acp';

    protected $middlewares = [
        'Barryvdh\Cors\HandleCors',
    ];

    public function hostname()
    {
        return 'api.'.config('superv.hostname');
    }
}