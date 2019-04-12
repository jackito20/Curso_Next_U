<?php
  require('./conector.php');

  session_start();

  if (isset($_SESSION['username'])) {
    $data['fk_ciudad_origen'] = "'".$_POST['ciudad_origen']."'";
    $data['fk_ciudad_destino'] = "'".$_POST['ciudad_destino']."'";
    $data['fk_vehiculo'] = "'".$_POST['vehiculo']."'";
    $data['fk_conductor'] = "'".$_POST['conductor']."'";
    $data['fecha_salida'] = "'".$_POST['fecha_salida']."'";
    $data['hora_salida'] = "'".$_POST['hora_salida']."'";

    $con = new ConectorBD('localhost','root','root');
    $response['conexion'] = $con->initConexion('transporte_db');

    if ($response['conexion']=='OK') {
      if($con->insertData('viajes', $data)){
        $response['msg']="OK";
      }else {
        $response['msg']= "Hubo un error y los datos no han sido cargados";
      }
    }else {
      $response['msg']= "No se pudo conectar a la base de datos";
    }


    
  }else {
    $response['msg']= 'No se ha iniciado una sesión';
  }

  echo json_encode($response);

 ?>
