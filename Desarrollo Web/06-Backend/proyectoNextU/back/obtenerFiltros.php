<?php
require("library.php");
$data = getData();
$ciudades=[];
$tipos=[];
foreach ($data as $key => $dato) {
    if (!in_array($dato["Ciudad"], $ciudades)) {
        array_push($ciudades, $dato["Ciudad"]);
    }
    
}
foreach ($data as $key => $dato) {
    if (!in_array($dato["Tipo"], $tipos)) {
        array_push($tipos, $dato["Tipo"]);
    }
    
}
$result["ciudades"] = $ciudades;
$result["tipos"] = $tipos;

echo json_encode($result);  
?>