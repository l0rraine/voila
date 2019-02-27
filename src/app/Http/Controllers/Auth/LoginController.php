<?php
/**
 * Created by PhpStorm.
 * User: idn-lee
 * Date: 19-1-22
 * Time: 上午9:13
 */

namespace Voila\AdminPanel\app\Http\Controller\Auth;


use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller;


class LoginController extends Controller
{
    use ValidatesRequests;

    public function login()
    {
        $this->validate(request(), [
            "login"    => "required",
            "password" => "required",
        ], [
                            'password.required' => '必须输入用户名',
                            'login.required'    => '必须输入密码',
                        ]);
        $token = $this->guard()
                      ->attempt([
                                    $this->getLoginAttribute()    => request('login'),
                                    $this->getPasswordAttribute() => request('password')
                                ]);
        if (!$token) {
            return fail(401, '无效的用户名或密码');
        }

        return $this->respondWithToken($token);
    }

    protected function getLoginAttribute()
    {
        return config("voila.auth.login_attribute", "email");
    }

    protected function getPasswordAttribute()
    {
        return config("voila.auth.password_attribute", "password");
    }

    public function logout()
    {
        $this->guard()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    protected function guard()
    {
        return auth()->guard(config('voila.auth.guards.default'));
    }


    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
//        try {
//            $token = $this->guard()->getToken()->get();
//
//
//            return success('刷新令牌成功', $token, ['Authorization' => $token]);
//        } catch (\Exception $exception) {
//            return fail(403, '令牌刷新失败');
//        }
        return response([
                            'status' => 'success'
                        ]);

    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        $header['Authorization'] = $token;

        return response()->json([
                                    'access_token' => $token,
                                    'token_type'   => 'bearer',
                                    'expires_in'   => auth()->factory()->getTTL() * 60
                                ], 200, $header);
    }


    public function user()
    {
        return response([
                            'status' => 'success',
                            'data' => \Auth::user()->toArray()
                        ]);

    }

}