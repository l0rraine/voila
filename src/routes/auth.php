<?php
/*****************登录相关路由*****************/
Route::post('/login', config('voila.auth.controller') . '@login')->name('voila.adminpanel.login');
Route::get('/logout', config('voila.auth.controller') . '@logout')->name('voila.adminpanel.logout');
