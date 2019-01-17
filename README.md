# Voila
后台管理模块，需要 laravel 5.x。

## installation

### vue
```
npm install -g @vue/cli @vue/cli-service
```

### extra settings for better coding

#### phpstorm laravel plugin

Install plugin 
 >Settings/Plugins
 
 and active it per Project under "Settings > Languages & Frameworks > PHP > Laravel"
Use "Laravel IDE Helper Generator" to generate ide classes


#### laravel-ide-helper
```
composer require barryvdh/laravel-ide-helper
composer require doctrine/dbal
php artisan vendor:publish --provider="Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider" --tag=config
```

in `config/ide-helper.php`
```
'include_fluent'=>true,
'model_locations' => array(
    'app/Models',
 ),

``` 

in `composer.json`
```
"scripts":{
    "post-update-cmd": [
        "Illuminate\\Foundation\\ComposerScripts::postUpdate",
        "php artisan clear-compiled",
        "php artisan ide-helper:generate",
        "php artisan ide-helper:meta",
        "php artisan optimize"
    ]
},
```

Refs

 [如何在PhpStorm活用PHPDoc?](https://oomusou.io/phpstorm/phpstorm-ide-helper/#Laravel_IDE_Helper)



