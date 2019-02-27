<?php
/**
 * Created by PhpStorm.
 * User: idn-lee
 * Date: 19-1-22
 * Time: 上午9:53
 */


function voila_version() { return 1; }

function success($msg, $data = null, $header = [], $options = 0)
{
    $r = [];
    if ($msg)
        $r['message'] = $msg;
    if ($data)
        $r['data'] = $data;

    return response()->json($r, 200, $header, $options);
}

function successWithToken($msg, $data = null, $header = [], $options = 0)
{
    $token                   = auth()->guard(config('voila.auth.guards.default'))->getToken()->get();
    $header['Authorization'] = $header['Authorization'] ?? $token;
    if ($msg)
        $r['message'] = $msg;
    if ($data)
        $r['data'] = $data;

    return response()->json($r, 200, $header, $options);
}

function fail($code = null, $msg, $data = null, $header = [], $options = 0)
{
    if ($msg)
        $r['message'] = $msg;
    if ($data)
        $r['data'] = $data;

    return response()->json($r, $code, $header, $options);
}


function get_base_config()
{
    return [
        'api_base_url' => route('voila.home'),
    ];
}