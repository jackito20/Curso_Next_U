<?php

function getData(){
    $file = fopen("./data/users.json", "r");
    $contenido = fread($file, filesize("./data/users.json"));
    fclose($file);
    return json_decode($contenido, true);
}

function updateData($username, $campo, $value){
    $file = fopen("./data/users.json", "r");
    $contenido = fread($file, filesize("./data/users.json"));
    echo $contenido;
    //fwrite($newfile)
    fclose($file);
}

function validarUsuario($username, $password, $usersData){
    foreach($usersData as $index=>$usuario){
        if($usuario["username"]==$username && $usuario["password"] == $password){
            return true;   
        }
    }
    return false;
}

function retornarCampo($username, $campo){
    $usersData = getData();

    foreach($usersData as $index=> $usuario){
        if($usuario["username"] == $username && isset($usuario[$campo])){
            return $usuario[$campo];
        }
    }

    return false;
}

?>