<?php
/**
 * Created by PhpStorm.
 * User: idn-lee
 * Date: 19-1-22
 * Time: 上午9:13
 */

namespace Voila\AdminPanel\app\Http\Controller\Auth;


use Illuminate\Routing\Controller;
use Illuminate\Foundation\Validation\ValidatesRequests;


class LoginController extends Controller
{
    use ValidatesRequests;
    public function login()
    {
        $this->validate(request(), [
            "login"    => "required",
            "password" => "required",
        ]);

        if ($this->guard()->attempt([
                                        $this->getLoginAttribute()    => request('login'),
                                        $this->getPasswordAttribute() => request('password')
                                    ])) {

            return success('登陆成功');
        }

        return fail(403, '无效的用户名或密码');
    }

    protected function getLoginAttribute()
    {
        return config("voila.auth.login_attribute", "email");
    }

    protected function getPasswordAttribute()
    {
        return config("voila.auth.password_attribute", "password");
    }

    protected function guard()
    {
        return auth()->guard(config('voila.auth.guards.default'));
    }
}