<?php
/**
 * Created by PhpStorm.
 * User: idn-lee
 * Date: 18-2-22
 * Time: 上午10:52
 */

namespace Voila\AdminPanel\app\Exceptions;


use App\Exceptions\Handler;
use Exception;

class CustomHandler extends Handler
{
    public function report(Exception $exception)
    {
        parent::report($exception); // TODO: Change the autogenerated stub
    }

    public function render($request, Exception $exception)
    {
        if ($exception instanceof VoilaAuthenticationException) {
            return fail(403,'权限验证错误，请重新登录');
        }

        return parent::render($request, $exception); // TODO: Change the autogenerated stub
    }


}