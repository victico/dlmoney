<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LogMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);
        Log::channel('request_x_response')->info(json_encode(
            [
                'ENDPOINT' => $request->getUri(),
                'METHOD' => $request->getMethod(),
                'USER_ID' => $request->user()->id ?? '',
                'REQUEST_BODY' => $request->all(),
                'RESPONSE' => $response,
            ])
        );
        return $response;
    }
}
