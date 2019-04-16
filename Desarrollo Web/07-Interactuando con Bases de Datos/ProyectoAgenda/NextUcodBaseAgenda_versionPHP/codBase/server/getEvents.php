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
            $i=0;
            while ($fila = $res->fetch_assoc()){
                $data[$i]["title"] = $fila["titulo"];
                $data[$i]["start"] = $fila["fecha_inicio"];
                $data[$i]["allDay"] = $fila["dia_completo"]==1?true:false;
                if(!$data[$i]["allDay"]){
                    $data[$i]["start"] .=" ".$fila["hora_inicio"];
                    $data[$i]["end"] = $fila["fecha_fin"]." ".$fila["hora_fin"];
                }
                $i++;
            }
            if($i>0):    
                $response["eventos"] = $data;
            endif;
        }else{
            $response["msg"] = "Error en consulta de eventos";
        }
    }else{
        $response["msg"] = "Error en conexion";
    }
}else{
    $response["msg"] = "No se ha iniciado sesion";
}


echo json_encode($response);


 ?>
