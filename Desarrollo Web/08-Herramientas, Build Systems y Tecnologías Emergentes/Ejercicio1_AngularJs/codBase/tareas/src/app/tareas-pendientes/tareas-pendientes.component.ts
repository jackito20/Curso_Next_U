import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tareas-pendientes',
  templateUrl: './tareas-pendientes.component.html',
  styleUrls: ['./tareas-pendientes.component.css']
})
export class TareasPendientesComponent implements OnInit {

  tareas: string[];

  constructor() { }

  ngOnInit() {
    this.tareas = [
      "Recoger Libros",
      "Firmar Autorizacion",
      "Cita con Maria"
    ];
  }

}
