<?php
    require "c_Usuario.php";

    $nombre= $_POST["nombre"];
    $apellido= $_POST["apellido"];
    $tipo_id= $_POST["tipo_id"];
    $identificacion= $_POST["identificacion"];
    $fecha_nacimiento= $_POST["fecha_nacimiento"];
    $genero= $_POST["genero"];
    $estado_civil= $_POST["estado_civil"];
    $tipo_telefono= $_POST["tipo_telefono"];
    $telefono= $_POST["telefono"];
    $pais= $_POST["pais"];
    $ciudad= $_POST["ciudad"];
    $profile_img= $_POST["profile_img"];

    $usuario = new Usuario($nombre, $apellido, $tipo_id, $identificacion, $fecha_nacimiento, $genero, $estado_civil, $tipo_telefono, $telefono, $ciudad, $pais, $profile_img);

    echo "Los datos del usuario ".$usuario->nombre." ".$usuario->apellido." han sido almacenados exitosamente";
?>