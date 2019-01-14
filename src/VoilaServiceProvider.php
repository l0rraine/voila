<?php

namespace Voila;

use Illuminate\Auth\SessionGuard;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Illuminate\Contracts\Debug\ExceptionHandler;

class VoilaServiceProvider extends ServiceProvider
{

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {

      

    }


    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->setupRoutes();

        $loader = \Illuminate\Foundation\AliasLoader::getInstance();
        $loader->alias('Voila', \Voila\VoilaServiceProvider::class);


        $this->app->register(\Spatie\Permission\PermissionServiceProvider::class);
    }


    private function setupRoutes()
    {
        Route::group([
                         'namespace'  => '\DDVue\AdminPanel\app\Http\Controllers',
                         'middleware' => ['web'],
                         'prefix'     => config('ddvue.adminpanel.url_prefix')],
            function () {
                require __DIR__ . '/routes/auth.php';
            });

        
        $middleware = ['web', config('voila.auth.admin_auth_middleware')];
    }


}
