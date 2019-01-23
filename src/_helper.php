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
    $header['Voila-Message'] = $msg;

    return response()->json($data, $header, $options);
}

function fail($code = null, $msg, $data = null, $header = [], $options = 0)
{
    $header['Voila-Message'] = $msg;

    return response()->json($data, $code, $header, $options);
}

function get_base_config()
{
    return [
        'api_base_url' => route('voila.adminpanel.home')
    ];
}