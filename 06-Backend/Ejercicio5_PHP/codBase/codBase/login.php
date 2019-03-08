<?php
    $usuario = $_POST["usuario"];

    if(!empty($usuario)){
        echo "Se recibieron los datos adecuadamente. El usuario ingresado ".$usuario;
    }else{
        echo "No se envio un nombre de usuario valido";
    }
    
?>