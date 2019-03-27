<?php
  require('lib.php');



  $conector = new ConectorBD();

  if ($conector->initConexion('inventario_db')=='OK') {



    $conector->cerrarConexion();
  }else {
    echo $conector->initConexion();
  }


 ?>
