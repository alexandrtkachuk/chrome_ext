<?php
/**
 * Created by PhpStorm.
 * User: alexandr
 * Date: 12.10.17
 * Time: 22:52
 */



include(__DIR__ . '/vendor/autoload.php');

header('Content-Type: application/json');

use Symfony\Component\DomCrawler\Crawler;

$data = ['mee' => 'good', 'post' => $_POST];

if (!empty($_POST['body'])) {
    $crw = new Crawler($_POST['body']);

    $bookmark = [];

    $crw->filterXPath('//a[@rel="bookmark"]')->each(function(Crawler $item)use(&$bookmark){
        $bookmark[] = trim($item->text());
    });

    $data['bookmark'] = $bookmark;
}
echo json_encode($data);