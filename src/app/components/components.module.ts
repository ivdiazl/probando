import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule }  from '@ionic/angular';

import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';

@NgModule({
  declarations: [
    //aqui declaramos todos los componentes
    MisDatosComponent,
    ExperienciaLaboralComponent,
    CertificacionesComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    //aqui exportamos todos los componentes
    MisDatosComponent,
    ExperienciaLaboralComponent,
    CertificacionesComponent,
    FormsModule
  ]
})
export class ComponentsModule { }
