<?php
    $descripcion = $_POST["descripcion"];
    $categoria = $_POST["categoria"];

    if(!empty($descripcion)){
        echo "Se recibieron los datos exitosamente";
    }else{
        echo "No se recibio una descripcion";
    }
?>