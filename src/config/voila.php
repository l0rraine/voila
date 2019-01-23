<?php

return [
    'dashboard_name' => '后台标题',
    'url_prefix'     => '/admin/',
    'menu_model'     => '',

    'auth' => [
        'check_handler'      => '',
        'middleware'         => 'voila.auth:manager',
        'controller'         => \Voila\AdminPanel\app\Http\Controller\Auth\LoginController::class,
        'login_attribute'    => 'email',
        'password_attribute' => 'password',
        'display_attribute'  => ['display_name', 'name', 'email']
    ],

];
