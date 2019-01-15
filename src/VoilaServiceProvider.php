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

        app('router')->aliasMiddleware('admin.referer', 'Voila\AdminPanel\app\Http\Middleware\SetAdminReferer');
        app('router')->aliasMiddleware('admin.auth', 'Voila\AdminPanel\app\Http\Middleware\Authenticate');

        $this->publishes([
                             __DIR__ . '/config'          => config_path('/'),
                             __DIR__ . '/resources/views' => resource_path('views/vendor/voila/adminpanel'),
                             __DIR__ . '/public'          => public_path('/'),
                             __DIR__ . '/database'        => base_path('/database'),

                         ], 'voila-adminpanel');

        $this->publishes([
                             __DIR__ . '/resources/assets/src'               => base_path('/voila'),
                             __DIR__ . '/resources/assets/babel.config.js'   => base_path('/voila'),
                             __DIR__ . '/resources/assets/package.json'      => base_path('/voila'),
                             __DIR__ . '/resources/assets/vue.config.js.dev' => base_path('/voila/vue.config.js'),


                         ], 'voila-adminpanel-dev');


        $this->loadViewsFrom(resource_path('views/vendor/voila/adminpanel'), 'voila.adminpanel');
        $this->loadViewsFrom(realpath(__DIR__ . '/resources/views'), 'voila.adminpanel');


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
                         'namespace'  => '\Voila\AdminPanel\app\Http\Controllers',
                         'middleware' => ['web'],
                         'prefix'     => config('voila.adminpanel.url_prefix')],
            function () {
                require __DIR__ . '/routes/auth.php';
            });


        $middleware = ['web', config('voila.auth.admin_auth_middleware')];

        Route::group([
                         'middleware' => $middleware,
                         'prefix'     => config('voila.adminpanel.url_prefix')],
            function () {
                Route::group(['namespace' => '\Voila\AdminPanel\app\Http\Controllers'], function () {
                    Route::get('/', 'AdminPanelController@getIndex')->name('voila.adminpanel.home');
                    Route::get('/welcome', function () {
                        return view('voila.adminpanel::welcome');
                    })->name('voila.adminpanel.welcome');

                    Route::get('/settingsJson', 'AdminPanelController@getSettingsJson')->name('voila.adminpanel.settings.json');
                    Route::get('/changepassword', 'AdminPanelController@changePassword')->name('voila.adminpanel.changepassword');
                });
                //路由
//                require __DIR__ . '/routes/routes.php';

            });

    }


}
