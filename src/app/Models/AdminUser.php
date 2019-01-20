<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/1/20
 * Time: 18:02
 */

namespace Voila\AdminPanel\app\Models;

use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Spatie\Permission\Traits\HasRoles;


class AdminUser extends Authenticatable
{
    use Notifiable, HasRoles;

    protected $table = 'admin_users';

    protected $with = ['roles', 'department'];
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'display_name', 'password',];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token',];


    public static function rules($merge = [])
    {
        return array_merge([
                               'password_confirmation' => 'same:password',
                           ], $merge);
    }

    public static function messages($merge = [])
    {
        return array_merge([
                               'password_confirmation.same' => ' 两次输入密码不一致!'
                           ], $merge);
    }

    function resetPassword($password)
    {
        $this->password = Hash::make($password);
        $this->setRememberToken(Str::random(60));
        $this->save();
        event(new PasswordReset($this));
    }

}