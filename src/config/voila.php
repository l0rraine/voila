<?php

return [
    'dashboard_name' => '后台标题',
    'url_prefix'     => '/admin',
    'menu_model'     => '',

    'auth' => [
        'middleware' => 'admin.auth:ddvue_ldap',//ddvue_ldap,ddvue_db//['admin.auth:admin'],
        'model' => \DDVue\AdminPanel\app\Models\DdvLdapUser::class,
        'controller' => ''
    ],

];
