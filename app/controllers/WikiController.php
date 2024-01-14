<?php
require_once __DIR__ . '/../models/Wiki.php';


class WikiController
{

    public function index() {
        if(isset($_POST['search'])){
            $title = $_POST['search'];   
            $wikis = Wiki::searchWikis($title);
            header('Content-Type: application/json'); 
            echo json_encode($wikis);
        }
    }
    
    public function showAllWikis()
    {
        
            $wikis = Wiki::getAllWikis();
        
        include __DIR__ . '/../views/wiki.php';

    }

    public function showWikiById($wikiId)
    {
        $wiki = Wiki::getWikiById($wikiId);
        include __DIR__ . '/../views/wiki.php';

    }

    public function addWiki($title, $content, $user_id)
    {
        $newWiki = new Wiki(null,$title, $content, $user_id,null);
        $newWiki->save();
        header('Location: index.php');
        exit();
    }

    public function updateWikiById($wikiId, $title, $content)
    {
        Wiki::updateWikiById($wikiId, $title, $content);
        header('Location: wiki.php?wikiId=' . $wikiId);
        exit();
    }

    public function deleteWiki($wikiId)
    {
        Wiki::deleteWikiById($wikiId);
        header('Location: index.php');
        exit();
    }
}

