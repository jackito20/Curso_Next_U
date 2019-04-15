<?php
include("conexion.php");

session_start();
if(isset($_SESSION["usuario"])){
    $conexion = new ConectorBD("localhost", "root", "root");
    $response["conexion"] = $conexion->initConexion("agenda");

    if($response["conexion"] == "OK"){
        $tabla=["eventos"];
        $campos =  ["*"];
        $condicion = "WHERE usuario_id = '".$_SESSION["usuario"]."'";
        if($res = $conexion->consultar($tabla,$campos, $condicion)){
            $response["msg"] = "OK";
            $response["data"] = $res->fetch_assoc();
        }else{
            $response["msg"] = "No se encontraron eventos";
        }
    }else{
        $response["msg"] = "Error en conexion";
    }
}else{
    $response["msg"] = "No se ha iniciado sesion";
}


echo json_encode($response);


 ?>
