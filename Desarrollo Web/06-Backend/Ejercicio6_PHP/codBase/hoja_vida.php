<?php 
    require("library.php");

    $respuesta = validarImagen($_FILES["file"], "uploadedDocs/");

    echo json_encode($respuesta);
?>