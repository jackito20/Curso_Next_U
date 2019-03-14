<?php
    require("library.php");
    require("c_Usuario.php");
    session_start();
    $respuesta = validarImagen($_FILES["profile_img"], "data/");
    $usuario = new Usuario($_POST["nombre"], 
                            $_POST["apellido"], 
                            $_POST["tipo_id"], 
                            $_POST["identificacion"], 
                            $_POST["fecha_nacimiento"], 
                            $_POST["genero"], 
                            $_POST["estado_civil"], 
                            $_POST["tipo_telefono"], 
                            $_POST["telefono"], 
                            $_POST["pais"], 
                            $_POST["ciudad"], 
                            isset($respuesta["archivo"])?$respuesta["archivo"]:"");
    
    $datos = $usuario->getData();
    foreach($datos as $index => $valor){
        updateData($_SESSION['username'], $index, $valor);
    }
    //var_dump($datos);
    //echo $respuesta;
    echo json_encode($usuario);
?>