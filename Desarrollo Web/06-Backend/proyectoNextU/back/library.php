<?php

function getData(){
    $url="../data-1.json";
    $file = fopen($url, "r");
    $contenido = fread($file, filesize($url));
    fclose($file);
    return json_decode($contenido, true);
}

?>