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

    public function getMenus()
    {

        return success('成功', [
            [
                "path"      => "/groupOne",
                "icon"      => "ios-folder",
                "name"      => "system_index",
                "title"     => "groupOne",
                "component" => "EntityList",
                "children"  => [
                    [
                        "path"       => "pageOne",
                        "icon"       => "ios-paper-outline",
                        "name"       => "pageOne",
                        "title"      => "pageOne",
                        "component"  => "EntityList",
                        "permission" => ["del"]
                    ],
                    [
                        "path"       => "pageTwo",
                        "icon"       => "ios-paper-outline",
                        "name"       => "pageTwo",
                        "title"      => "pageTwo",
                        "component"  => "EntityList",
                        "permission" => ["add", "del"]
                    ],
                    [
                        "path"      => "pageThere",
                        "icon"      => "ios-paper-outline",
                        "name"      => "pageThere",
                        "title"     => "pageThere",
                        "component" => "EntityList"
                    ]
                ]
            ],
            [
                "path"      => "/groupTwo",
                "icon"      => "ios-paper",
                "title"     => "groupTwo",
                "name"      => "other",
                "component" => "EntityList",
                "children"  => [
                    [
                        "path"      => "pageFour",
                        "title"     => "PageFour",
                        "name"      => "pageFour",
                        "component" => "EntityList"
                    ]
                ]
            ]
        ]);
    }


}