<?php
include("conexion.php");

$data["email"] = $_POST["username"];
$data["password"] = $_POST["password"];

$conexion = new ConectorBD("localhost", "root", "root");
$response["conexion"] = $conexion->initConexion("agenda");

if($response["conexion"] == "OK"){
    $tabla=["usuarios"];
    $campos =  ["nombre", "password", "id"];
    $condicion = "WHERE email LIKE '".$data['email']."'";
    if($res = $conexion->consultar($tabla,$campos, $condicion)){
        $res = $res->fetch_assoc();
        if(password_verify($data["password"], $res["password"])){
            $response["msg"] = "OK";
            session_start();
            $_SESSION["usuario"] = $res["id"];
        }else{
            $response["msg"] = "Usuario o contraseña no coinciden";
        }
    }else{
        $response["msg"] = "Usuario o contraseña no coinciden";
    }
}else{
    $response["msg"] = "Error en conexion";
}

echo json_encode($response);


 ?>
