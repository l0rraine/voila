<?php

namespace Voila\AdminPanel\app\Http\Controllers;

use App\Http\Controllers\Controller;
use DDVue\AdminPanel\app\Models\DdvueMenu;


class AdminPanelController extends Controller
{
    /**
     * @var mixed
     */
    private $ddvueMenu;

    /**
     * AdminPanelController constructor.
     *
     */
    public function __construct()
    {

//        $this->setMenuModel();
    }

//    private function setMenuModel()
//    {
//        $model = config('ddvue.adminpanel.menu_model');
//        if ($model instanceof Model) {
//            $this->ddvueMenu     = $model;
//        } else {
//            if (!class_exists($model)) {
//                $model = "\\App\\Models\\" . $model;
//                if (!class_exists($model)) {
//                    throw new \Exception('This model does not exist.', 404);
//                }
//            }
//            $this->ddvueMenu     = new $model();
//        }
//
//
//    }

    public function getIndex()
    {
        return view('voila.adminpanel::index');
    }

    public function getBaseConfig()
    {
        return success('成功', get_base_config());
    }


}