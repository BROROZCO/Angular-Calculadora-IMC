import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

const routes: Routes = [
  // Los que estan en llaves son los componentes, el InicioCOmponent es la clase
  { path: '', component: InicioComponent},
  { path: 'resultado', component: ResultadoComponent },
  // condicionado el path para redirecciones inexistentes la linea 11 siempre tiene que ir al final
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
