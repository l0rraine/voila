<?php
/**
 * Created by PhpStorm.
 * User: idn-lee
 * Date: 17-11-1
 * Time: 上午9:22
 */

namespace Voila\AdminPanel\app\Http\Middleware;


use Closure;

/**
 * 访问admin节点下连接时，session失效重登录后一律重定向至admin_home
 * @package App\Http\Middleware
 */
class SetAdminReferer
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure                 $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if ($this->checkUserAuthenticated()){
            if (str_contains(session('url.intended'), '/' . config('voila.url_prefix', 'admin') . '/')) {
                $request->headers->set('referer', \URL::route('voila.adminpanel.home'));
                session(['url.intended' => \URL::route('voila.adminpanel.home')]);
            }
        }
           

        return $next($request);

    }

    protected function checkUserAuthenticated($guard)
    {
        if (auth()->guard($guard)->check()) {
            if ($checkHandler = config('voila.auth.check_handler')) {
                return app($checkHandler)->check(auth()->guard($guard)->user());
            }

            return true;
        }

        return false;
    }
}