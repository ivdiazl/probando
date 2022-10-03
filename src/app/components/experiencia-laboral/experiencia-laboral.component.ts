import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ExperienciaLaboral } from 'src/app/model/ExperienciaLaboral';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss'],
})
export class ExperienciaLaboralComponent implements OnInit {

  public listaExperienciasLaborales: ExperienciaLaboral[];

  constructor(public alertController: AlertController, private toastController: ToastController) {
    this.listaExperienciasLaborales = [];
  }

  ngOnInit() {}

  async solicitarExperienciaLaboral() {

    const alertController = await this.alertController.create({
      header: 'Crear experiencia laboral',
      inputs: [
        {
          name: 'empresa',
          type: 'text',
          placeholder: 'Empresa'
        },
        {
          name: 'anioInicio',
          type: 'number',
          placeholder: 'Año de inicio'
        },
        {
          name: 'trabajaAlli',
          type: 'text',
          placeholder: 'Es su trabajo actual (S o N)'
        },
        {
          name: 'anioTermino',
          type: 'number',
          placeholder: 'Año de termino'
        },
        {
          name: 'cargo',
          type: 'text',
          placeholder: 'Cargo'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Agregar',
          handler: data => {
            const ok = this.validarExperienciaLaboral(data.empresa, data.anioInicio
              , data.trabajaAlli, data.anioTermino, data.cargo);
            return ok;
          }
        }
      ]
    });

    await alertController.present();
  }

  public validarExperienciaLaboral(empresa: string, anioInicio: string, trabajaAlli: string
    , anioTermino: string, cargo: string): boolean {

    const experienciaLaboral = new ExperienciaLaboral();

    experienciaLaboral.empresa = empresa;
    experienciaLaboral.anioInicio = anioInicio === ''? -1: parseInt(anioInicio, 10);
    experienciaLaboral.trabajaAlli = trabajaAlli.toUpperCase() === 'S';
    experienciaLaboral.anioTermino = anioTermino === ''? -1: parseInt(anioTermino, 10);
    experienciaLaboral.cargo = cargo;

    const mensajeError = experienciaLaboral.validarExperienciaLaboral();

    if (mensajeError) {
      this.mostrarMensaje(mensajeError);
      return false;
    }

    this.listaExperienciasLaborales.push(experienciaLaboral);
    return true;

  }

  public quitarExperienciaLaboral(index: number) {
    alert(index);
  }

  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();
  }

}
