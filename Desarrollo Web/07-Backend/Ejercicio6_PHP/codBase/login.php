<?php
  require('library.php');

  $username = $_POST['username'];
  $password = $_POST['password'];
  $data = getData();

  if ($username=="") {
    echo "No se envió un nombre de usuario válido";
  }else {
    if(validarUsuario($username, $password, $data)){
      session_start();
      $_SESSION["username"] = $username;
      echo "true";
    }else{
      echo "Usuario o contraseña invalido";
    }
  }



 ?>
