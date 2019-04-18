<?php
include("conexion.php");

session_start();
if(isset($_SESSION["usuario"])){
    $conexion = new ConectorBD("localhost", "root", "root");
    $response["conexion"] = $conexion->initConexion("agenda");

    if($response["conexion"] == "OK"){
        $response["msg"] = "OK";
        $id = $_POST["id"];
        $condition = "id = ".$id;
        if($res = $conexion->eliminarRegistro('eventos', $condition)){
            $response['msg']="OK";
        }else {
            $response['msg']= "Hubo un error y los datos no han sido cargados";
        }
        
    }else{
        $response["msg"] = "Error en conexion";
    }
}else{
    $response["msg"] = "No se ha iniciado sesion";
}

echo json_encode($response);


 ?>

