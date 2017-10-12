<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 12.10.17
 * Time: 17:02
 */


$socket = new WebSocket('tcp://', '127.0.0.1', '7777');

$socket->setOutput('ws-log.txt');

$socket->handler = function($connection, $data)
{
    fwrite($connection, WebSocket::encode($data));
};


$socket->hearthbeat = function($connects) {

};

$socket->runServer();
