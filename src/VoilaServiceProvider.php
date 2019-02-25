<?php

namespace Voila\AdminPanel;

use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Voila\AdminPanel\app\Exceptions\CustomHandler;
use Voila\AdminPanel\app\Http\Middleware\Authenticate;
use Voila\AdminPanel\app\Http\Middleware\SetAdminReferer;

class VoilaServiceProvider extends ServiceProvider
{

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {

        app('router')->aliasMiddleware('admin.referer', SetAdminReferer::class);
        app('router')->aliasMiddleware('admin.auth', Authenticate::class);

        $this->publishes([
                             __DIR__ . '/config'   => config_path('/'),
                             __DIR__ . '/database' => base_path('/database'),

                         ], 'voila-adminpanel');

        $this->mergeConfigFrom(__DIR__ . '/config/voila.php', 'voila');


        $this->loadViewsFrom(resource_path('views/vendor/voila/'), 'voila.adminpanel');


        $this->app->bind(
            ExceptionHandler::class,
            CustomHandler::class
        );

    }

    function mergeConfigKey($source, $target)
    {
        $config = \Config::get($source, []);

        \Config::set($target, array_merge($config, \Config::get($target, [])));

    }


    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->setupRoutes();

//        app('router')->aliasMiddleware('voila.referer', SetAdminReferer::class);
        app('router')->aliasMiddleware('voila.auth', Authenticate::class);


        $loader = \Illuminate\Foundation\AliasLoader::getInstance();
        $loader->alias('Voila', "Voila\\AdminPanel\\VoilaServiceProvider");


//        $this->app->register(\Spatie\Permission\PermissionServiceProvider::class);
    }


    private function setupRoutes()
    {
        require __DIR__ . '/routes/auth.php';


        $middleware = ['api'];

        Route::group([
                         'middleware' => $middleware,
                         'prefix'     => config('voila.url_prefix')],
            function () {
                Route::group(['namespace' => '\Voila\AdminPanel\app\Http\Controllers'], function () {
                    Route::get('/', 'AdminPanelController@getIndex')->name('voila.home');
                    Route::get('/baseconfig', 'AdminPanelController@getBaseConfig')->name('voila.config.base');
                    Route::get('/get_menus', 'AdminPanelController@getMenus')->name('voila.config.menu');


                });
                //路由
//                require __DIR__ . '/routes/routes.php';

            });

    }


}
