<?php 

include_once("constant.php");


//  echo HELLO_WORLD;
echo "<h1> Now we testing </h1> ";

// error_reporting(0);
include_once('layout/header.php');
// echo $action;
switch ($action){
    case 'dynamic_select_dropdown':
        include_once("action/dynamic_select_dropdown.php");
    break;

    case 'dynamic_searching':
        include_once("action/dynamic_searching.php");
    break;

}






include_once('layout/footer.php');