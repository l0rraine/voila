<?php
/*****************登录相关路由*****************/
Route::get('/login', config('voila.auth.controller') . '@showLoginForm')->name('voila.adminpanel.login');
Route::post('/login', config('voila.auth.controller') . '@login')->name('voila.adminpanel.login');


Route::post('/logout', config('voila.auth.controller') . '@logout')->name('voila.adminpanel.logout');
