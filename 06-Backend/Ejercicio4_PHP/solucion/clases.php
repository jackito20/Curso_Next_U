<?php

class Asignatura{

    private $nombre, $nota1, $nota2, $nota3;

    public function _construct(){

    }

    public function promedio(){
        return ($this->nota1 + $this->nota2 + $this->nota3)/3;
    }

    public function getNombre(){
        return $this->nombre;
    }

    public function setNombre($nombre){
        $this->nombre = $nombre;
    }

    public function getNota1(){
        return $this->nota1;
    }

    public function setNota1($nota1){
        $this->nota1 = $nota1;
    }

    public function getNota2(){
        return $this->nota2;
    }

    public function setNota2($nota2){
        $this->nota2 = $nota2;
    }

    public function getNota3(){
        return $this->nota3;
    }

    public function setNota3($nota3){
        $this->nota3 = $nota3;
    }
}



class Estudiante{

    private $nombre, $curso;
    private $asignaturas[];

    public function _construct(){

    }

    public function getNombre(){
        return $this->nombre;
    }

    public function setNombre($nombre){
        $this->nombre = $nombre;
    }

    public function getCurso(){
        return $this->curso;
    }

    public function setCurso($curso){
        $this->curso = $curso;
    }

    public function getAsignaturas(){
        return $this->asignaturas;
    }

    public function setAsignaturas($asignaturas){
        $this->asignaturas = $asignaturas;
    }
}
?>