<?php
/*****************登录相关路由*****************/
Route::get('/login', config('voila.auth.controller') . '@showLoginForm')->name('Voila.AdminPanel.login');
Route::post('/login', config('voila.auth.controller') . '@login')->name('Voila.AdminPanel.login');


Route::post('/logout', config('voila.auth.controller') . '@logout')->name('Voila.AdminPanel.logout');
