<?php
require "clases.php";

$asignaturas = [new Asignatura("Matematicas", 5, 8, 10),
                new Asignatura("Ingles", 10, 8, 9),
                new Asignatura("Castellano", 7, 10, 8),
                new Asignatura("Ciencias", 6, 7, 9),
                new Asignatura("Fisica", 6, 7, 9)];

$estudiantes = [new Estudiante("Jackeline", "Ingenieria"),
                new Estudiante("Jose", "Derecho"),
                new Estudiante("Juan", "Medicina")];

                
for($i=0; $i<3; $i++){
    for($j=0; $j<5; $j++){
        $estudiantes[$i]->addAsignarura($asignaturas[$j]);
    }
}

$profesor = new Profesor("Jhon");

for($i=0; $i<count($estudiantes); $i++){
    $profesor->addEstudiante($estudiantes[$i]);
}

$padre = new Padre("Henrry");

for($i=0; $i<count($estudiantes); $i++){
    $padre->addHijo($estudiantes[$i]);
}


?>