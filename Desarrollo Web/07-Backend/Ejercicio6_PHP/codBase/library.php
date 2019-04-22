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
    $contenido = json_decode($contenido, true);
    //echo "Data sin act ".print_r($contenido, true);
    
    for($i=0; $i<count($contenido); $i++){
        if($contenido[$i]["username"]==$username){
            $contenido[$i][$campo]=$value;

        }
    }
    $file = fopen("./data/users.json", "w");
    fwrite($file, json_encode($contenido));
    fclose($file);

    //return (json_encode($contenido));
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

function validarImagen($llave, $ruta){
    $directorio = $ruta;
    $nombreImagen=$llave["name"];
    $subir=$directorio.basename($nombreImagen);
    $tipo = pathinfo($subir, PATHINFO_EXTENSION);
    $error = false;

    if(file_exists($subir)){
        $respuesta["error"] = "Archivo duplicado";
        $error = true;
    }

    if($llave["size"]>10000000){
        $respuesta["error"] = "Tamaño exedido ".$llave["size"];
        $error = true;
    }

    if(($tipo!="jpg" && $tipo!="JPG") && ($tipo!="jpeg" && $tipo!="JEPG") && ($tipo!="png" && $tipo!="PNG")&& $tipo!="doc" && $tipo!="txt" && $tipo!="docx" && $tipo!="pdf"){
        $respuesta["error"] = "Tipo desconocido ".$tipo;
        $error = true;
    }

    if(!$error){
        if(move_uploaded_file($llave["tmp_name"], $subir)){
            $respuesta["mensaje"] = "Exitoso";
            $respuesta["archivo"] = $subir;
        }else{
            $respuesta["mensaje"] = "No pudo ser subido";
        }
    }else{
        $respuesta["mensaje"] = "Error al subir archivo";
    }

    return $respuesta;
}
?>