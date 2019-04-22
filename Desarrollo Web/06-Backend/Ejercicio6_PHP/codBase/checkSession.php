<?php
    require("library.php");
    session_start();
    if(isset($_SESSION["username"])){
        //header("location: index.html");
        $response["nombre"] = retornarCampo($_SESSION["username"], "nombre");
        $response["descripcion"] = retornarCampo($_SESSION["username"], "descripcion");
        $response["id"] = retornarCampo($_SESSION["username"], "id");
        $response["hoja_vida"] = retornarCampo($_SESSION["username"], "hoja_vida");
        $response["profile_img"] = retornarCampo($_SESSION["username"], "profile_img");
        
        echo json_encode($response);


    }else{
        //header("location: login.html");
        echo "false";
    }
?>