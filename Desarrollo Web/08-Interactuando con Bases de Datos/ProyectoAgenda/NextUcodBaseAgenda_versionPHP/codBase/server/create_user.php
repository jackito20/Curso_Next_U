<?php
require('conexion.php');

$conexion = new ConectorBD("localhost", "root", "root");
echo $conexion->initConexion("agenda")=="OK" ? "Conexion Establecida": "Error en Conexion";

$atributosUsuarios = [
    "id" => "INT NOT NULL",
    "email" => "VARCHAR(100) NOT NULL",
    "nombre" => "VARCHAR(45) NOT NULL",
    "password" => "VARCHAR(256) NOT NULL",
    "fecha_nacimiento" => "DATE"
];
echo $conexion->newTable("usuarios", $atributosUsuarios)==1 ? "/nTabla de Usuarios creada" : "/nError al crear tabla Usuarios";
echo $conexion->nuevaRestriccion("usuarios", "CHANGE COLUMN id id INT(11) NOT NULL AUTO_INCREMENT , ADD PRIMARY KEY (id)");

$atributosEventos = [
    "id" => "INT NOT NULL",
    "usuario_id" => "INT NOT NULL",
    "titulo" => "VARCHAR(100) NOT NULL",
    "fecha_inicio" => "DATE NOT NULL",
    "hora_inicio" => "TIME",
    "fecha_fin" => "DATE",
    "hora_fin" => "TIME",
    "dia_completo" => "BOOLEAN"
];
echo $conexion->newTable("eventos", $atributosEventos)==1 ? "/nTabla de Eventos creada" : "/nError al crear tabla Eventos";
echo $conexion->nuevaRestriccion("eventos", "CHANGE COLUMN id id INT(11) NOT NULL AUTO_INCREMENT , ADD PRIMARY KEY (id)");
echo $conexion->nuevaRelacion("eventos", "usuarios", "usuario_id", "id");

$usuarios = [
   [
       "email" => "jac@mail.com",
       "nombre" => "Jackeline Hernandez",
        "password" => password_hash('123', PASSWORD_DEFAULT),
        "fecha_nacimiento" => '1988-06-22'
   ],
   [
        "email" => "kar@mail.com",
        "nombre" => "Karla Hernandez",
        "password" => password_hash('123', PASSWORD_DEFAULT),
        "fecha_nacimiento" => '1998-07-26'
    ],
    [
        "email" => "jose@mail.com",
        "nombre" => "Jose Gomez",
         "password" => password_hash('123', PASSWORD_DEFAULT),
         "fecha_nacimiento" => '1978-08-22'
    ] 
];

foreach($usuarios as $usuario){
    echo $conexion->insertData("usuarios", $usuario);
}


$conexion->cerrarConexion();
 ?>
