<?php
include("conexion.php");

session_start();
if(isset($_SESSION["usuario"])){
    $conexion = new ConectorBD("localhost", "root", "root");
    $response["conexion"] = $conexion->initConexion("agenda");

    if($response["conexion"] == "OK"){
        $data["fecha_inicio"] = "'".$_POST["start_date"]."'";
        if(isset($_POST["end_date"])){
            $data["fecha_fin"] = "'".$_POST["end_date"]."'";
            $data["hora_fin"] = "'".$_POST["end_hour"]."'";
            $data["hora_inicio"] = "'".$_POST["start_hour"]."'";   
        }
        
        $condicion = "id = ".$_POST["id"];
        if($res = $conexion->actualizarRegistro('eventos', $data, $condicion)){
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