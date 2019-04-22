<?php
  require('library.php');

  session_start();
    session_destroy();
    header("location: login.html");



 ?>