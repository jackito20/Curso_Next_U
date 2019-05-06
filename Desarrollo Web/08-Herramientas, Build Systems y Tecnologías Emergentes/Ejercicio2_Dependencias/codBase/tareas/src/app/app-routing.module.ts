import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { VerGrupoComponent } from './ver-grupo/ver-grupo.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'nuevaTarea', component: NuevaTareaComponent},
  { path: 'verGrupo', component: VerGrupoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class TareasRoutingModule { }
