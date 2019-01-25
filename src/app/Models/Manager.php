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
use Tymon\JWTAuth\Contracts\JWTSubject;


class Manager extends Authenticatable implements JWTSubject
{
    use Notifiable, HasRoles;

    protected $table = 'managers';

    protected $with = ['roles'];
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'display_name', 'password', 'api_token'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token',];


    // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }


    public static function rules($merge = [])
    {
        return array_merge([
                               'password'              => 'require',
                               'name'                  => 'require',
                               'password_confirmation' => 'same:password',
                           ], $merge);
    }

    public static function messages($merge = [])
    {
        return array_merge([
                               'password.require'           => '必须输入用户名',
                               'name.require'               => '必须输入密码',
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