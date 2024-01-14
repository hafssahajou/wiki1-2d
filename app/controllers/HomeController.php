<?php

require_once __DIR__ . '/../models/HomeModel.php';
require_once __DIR__.'/../models/Wiki.php';

class HomeController
{
    public function index()
    {
        
        if(isset($_GET['search'])){
            $name = $_POST['search'];
            $latestWikis = Wiki::searchWikis($name);
        }else{
            $latestWikis = HomeModel::getLatestWikis();
           
       
        $latestCategories = HomeModel::getLatestCategories();
        include __DIR__ . '/../views/index.php';
    }
        // Afficher la vue
      

    }
}
?>
