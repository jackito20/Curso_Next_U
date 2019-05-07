import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'nuevaTarea', component: NuevaTareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class TareasRoutingModule { }
