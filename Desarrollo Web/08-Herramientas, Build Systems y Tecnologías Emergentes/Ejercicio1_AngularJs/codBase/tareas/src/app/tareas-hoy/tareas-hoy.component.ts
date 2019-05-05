import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tareas-hoy',
  templateUrl: './tareas-hoy.component.html',
  styleUrls: ['./tareas-hoy.component.css']
})
export class TareasHoyComponent implements OnInit {

  tareas: string[];

  constructor() { }

  ngOnInit() {
    this.tareas = [
      "Firmar Autorizacion",
      "Ir a la universidad",
      "Ir al gym"
    ]
  }

}
