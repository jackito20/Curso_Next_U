<?php
    
    require("library.php");

    $precioMin = $_POST["precioMin"];
    $precioMax = $_POST["precioMax"];
    $ciudad = $_POST["ciudad"];
    $tipo = $_POST["tipo"];
    
    $data = getData();

    $result = [];
    foreach ($data as $key => $dato) {
        $precio=str_replace("$", "", $dato["Precio"]);
        $precio=str_replace(",", "", $precio);
        if($precio >= $precioMin && $precio<= $precioMax){
            array_push($result, $dato);
        }
    }

    if($ciudad){
        $data = $result;
        $result = [];
        foreach ($data as $key => $dato) {
            if($dato["Ciudad"] == $ciudad){
                array_push($result, $dato);
            }
        }    
    }

    if($tipo){
        $data = $result;
        $result = [];
        foreach ($data as $key => $dato) {
            if($dato["Tipo"] == $tipo){
                array_push($result, $dato);
            }
        }    
    }

    echo json_encode($result);  
?>