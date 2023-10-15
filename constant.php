<?php


$actual_link = ((empty($_SERVER['HTTPS'])) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

define("HELLO_WORLD","Contant Added");
//

$url = isset($_GET['action']) ? $_GET['action'] : '' ;
$action = basename($url, '.php');

// echo "<pre>";
// print_r($_SERVER);
// $file = 'filename.txt';
// $x = substr($file, 0, strrpos($file, '.'));

// $x = pathinfo($file, PATHINFO_FILENAME);
// ----------------------------
// $myFile = pathinfo('/usr/admin/config/test.php');
  
// Show the file name
// echo $myFile['basename']

// ==========================================================--------------------------------
// $hash = parse_url("http://mediafire.com/?lmle92c5l50uuy5", PHP_URL_QUERY);
// ----------------------------------
// $url = "http://mediafire.com/?lmle92c5l50uuy5";

// list(, $hash) = explode('?', $url);

// echo $hash;


// -----------
// echo $_SERVER['QUERY_STRING'];
// If you really need to parse not your URL, you might also use strstr() + ltrim():

// $url = "http://mediafire.com/?lmle92c5l50uuy5";

// echo ltrim(strstr($url, '?'), '?');

