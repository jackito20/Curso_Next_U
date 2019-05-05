import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tareas-grupos',
  templateUrl: './tareas-grupos.component.html',
  styleUrls: ['./tareas-grupos.component.css']
})
export class TareasGruposComponent implements OnInit {

  grupos: Object[];

  constructor() { }

  ngOnInit() {
    this.grupos = [
      {
        nombre: "Trabajo",
        icono: "work",
        resaltado: false
      },
      {
        nombre: "Familia",
        icono: "favorite",
        resaltado: false
      },
      {
        nombre: "Amigos",
        icono: "group",
        resaltado: false
      },
      {
        nombre: "Universidad",
        icono: "school",
        resaltado: false
      }
    ]
  }

  onHoverGroupIn(grupo){
    grupo.resaltado = true;
  }

  onHoverGroupOut(grupo){
    grupo.resaltado = false;
  }

}
