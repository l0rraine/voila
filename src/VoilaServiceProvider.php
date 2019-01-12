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
        

        $loader = \Illuminate\Foundation\AliasLoader::getInstance();
        $loader->alias('LaVoila', \LarVoila\VoilaServiceProvider::class);


        $this->app->register(\Spatie\Permission\PermissionServiceProvider::class);
    }


    private function setupRoutes()
    {

        


    }


}
