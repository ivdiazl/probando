import { CertificacionesComponent } from './../../components/certificaciones/certificaciones.component';
import { ExperienciaLaboralComponent } from '../../components/experiencia-laboral/experiencia-laboral.component';
import { MisDatosComponent } from '../../components/mis-datos/mis-datos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [ // localhost:8100/home/certificaciones
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'mis-datos',
        component: MisDatosComponent
      },
      {
        path: 'experiencia-laboral',
        component: ExperienciaLaboralComponent
      },
      {
        path: 'certificaciones',
        component: CertificacionesComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
