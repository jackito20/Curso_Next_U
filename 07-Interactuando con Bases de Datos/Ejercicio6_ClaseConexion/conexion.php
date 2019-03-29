<?php
    class Conexion{
        private $host;
        private $usuario; 
        private $contrasena;
        private $conexión;

        function __construct($host, $usuario, $contrasena){
            $this->host = $host;
            $this->usuario = $usuario;
            $this->contrasena = $contrasena;
        }

        function initConexion($nombre_db){
            $this->conexion = new msqli($this->host, $this->usuario, $this->contrasena, $nombre_db);
            if($this->conexion->connect_error){
                return "Error ".$this->conexion->connect_error;
            }else {
                return "OK";
            }
        }

        function ejecutarQuery($sql){
            return $this->conexion->query($sql);
        }

        function cerrarConexion(){
            $this->conexion->close();
        }

        function query($tabla, $campos){
            $sql = "CREATE TABLE ".$tabla." (";
            $cant = count($campos);

            foreach ($campos as $key => $campo) {
                $sql
            }
        }
    }

?>