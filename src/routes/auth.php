<?php
/*****************登录相关路由*****************/
Route::group([
                 'middleware' => ['api'],
                 'prefix'     => config('voila.url_prefix') . 'auth'],
    function () {
        Route::post('/login', config('voila.auth.controller') . '@login');
        Route::group(['middleware' => 'jwt.auth'], function(){
            Route::get('/user', config('voila.auth.controller') . '@user');
        });
        Route::group(['middleware' => 'jwt.refresh'], function(){
            Route::get('/refresh', config('voila.auth.controller') . '@refresh');
        });

    });




