<?php
include("conexion.php");

session_start();
if(isset($_SESSION["usuario"])){
    $conexion = new ConectorBD("localhost", "root", "root");
    $response["conexion"] = $conexion->initConexion("agenda");

    if($response["conexion"] == "OK"){
        $response["msg"] = "OK";
        $data["titulo"] = $_POST["titulo"];
        $data["fecha_inicio"] = $_POST["start_date"];
        $data["dia_completo"] = $_POST["allDay"] == "true" ? 1:0;
        if($data["dia_completo"]==0){
            $data["fecha_fin"] = $_POST["end_date"];
            $data["hora_fin"] = $_POST["end_hour"];
            $data["hora_inicio"] = $_POST["start_hour"];
        }
        $data["usuario_id"] = $_SESSION["usuario"];
        
        if($res = $conexion->insertData('eventos', $data)){
            
            $tabla=["eventos"];
            $campos =  ["*"];
            $condicion = "WHERE id = '".$conexion->getConexion()->insert_id."'";
            if($res = $conexion->consultar($tabla,$campos, $condicion)){
                $response['msg']="OK";
                
                $fila = $res->fetch_assoc();

                $event["id"] = $fila["id"];
                $event["title"] = $fila["titulo"];
                $event["start"] = $fila["fecha_inicio"];
                $event["allDay"] = $fila["dia_completo"]==1?true:false;
                if(!$event["allDay"]){
                    $event["start"] .=" ".$fila["hora_inicio"];
                    $event["end"] = $fila["fecha_fin"]." ".$fila["hora_fin"];
                }

                $response['data'] = $event;
            }
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
