<?php
    require('./conector.php');

    session_start();

    if (isset($_SESSION['username'])) {
        $con = new ConectorBD('localhost','root','root');
        $response['conexion'] = $con->initConexion('transporte_db');
        if ($response['conexion']=='OK') {
            
            //CIUDADES
            $resultado_consulta = $con->consultar(['ciudades'],
            ['id', 'nombre']);
        
            if ($resultado_consulta->num_rows != 0) {
                $i=0;
                while ($fila = $resultado_consulta->fetch_assoc()) {
                    $response['ciudades']['data'][$i]['id']=$fila['id'];
                    $response['ciudades']['data'][$i]['nombre']=$fila['nombre'];
                    $i++;
                }
                $response['ciudades']['msg'] = "OK";
            }else{
                $response['ciudades']['msg'] = 'No hay ciudades';
            }

            //VEHICULOS
            $resultado_consulta = $con->consultar(['vehiculos'],
            ['placa', 'fabricante', 'referencia']);
        
            if ($resultado_consulta->num_rows != 0) {
                $i=0;
                while ($fila = $resultado_consulta->fetch_assoc()) {
                    $response['vehiculos']['data'][$i]['placa']=$fila['placa'];
                    $response['vehiculos']['data'][$i]['fabricante']=$fila['fabricante'];
                    $response['vehiculos']['data'][$i]['referencia']=$fila['referencia'];
                    $i++;
                }
                $response['vehiculos']['msg'] = "OK";
            }else{
                $response['vehiculos']['msg'] = 'No hay vehiculos';
            }

            //USUARIOS
            $resultado_consulta = $con->consultar(['usuarios'],
            ['nombre', 'id']);
        
            if ($resultado_consulta->num_rows != 0) {
                $i=0;
                while ($fila = $resultado_consulta->fetch_assoc()) {
                    $response['usuarios']['data'][$i]['id']=$fila['id'];
                    $response['usuarios']['data'][$i]['nombre']=$fila['nombre'];
                    $i++;
                }
                $response['usuarios']['msg'] = "OK";
            }else{
                $response['usuarios']['msg'] = 'No hay vehiculos';
            }

        }else{
            $response['msg'] = "No se pudo conectar a la Base de Datos";
        }
    }else{
        $response['msg'] = "No se ha iniciado una sesión";
    }

    echo json_encode($response);

  $con->cerrarConexion();
?>