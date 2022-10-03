import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Persona } from 'src/app/model/Persona';
import { NivelEducacional } from 'src/app/model/NivelEducacional';

@Component({
  selector: 'app-mis-datos',
  templateUrl: 'mis-datos.component.html',
  styleUrls: ['mis-datos.component.scss'],
})

export class MisDatosComponent implements OnInit {

  public nivelesEducacionales: NivelEducacional[] = new NivelEducacional().getNivelesEducacionales();

  public persona: Persona = new Persona();

   constructor(private alertController: AlertController) {

}

public ngOnInit(): void {
  this.persona.nombre = 'Cristián';
  this.persona.apellido = 'Gómez';
  this.persona.nivelEducacional.id = 6;
  this.persona.fechaNacimiento = '1972-12-26';
}

public limpiarFormulario(): void {
  /*
    El método limpiar recorre cada uno de los campos de la propiedad persona,
    de modo que la variable "key" va tomando el nombre de dichos campos (nombre,
    apellido, etc.) y "value" adopta el valor que tiene en ese momento el
    campo asociado a key.
  */
  for (const [key, value] of Object.entries(this.persona)) {
    /*
      Con la siguiente instrucción se cambia el valor de cada campo
      de la propiedad persona, y como los controles gráficos están
      asociados a dichos nombres de campos a través de ngModel, entonces
      al limpiar el valor del campo, también se limpia el control gráfico.
    */
      Object.defineProperty(this.persona, key, {value: ''});
    }
  }

  public mostrarDatosPersona(): void {

    // Si el usuario no ingresa al menos el nombre o el apellido, se mostrará un error
    if (this.persona.nombre.trim() === '' && this.persona.apellido === '') {
      this.presentAlert('Datos personales', 'Para mostrar los datos de la persona, '
        + 'al menos debe tener un valor para el nombre o el apellido.');
      return;
    }

    // Mostrar un mensaje emergente con los datos de la persona
    let mensaje = '<br>Nombre: ' + this.persona.nombre;
    mensaje += '<br>Apellido: ' + this.persona.apellido;
    mensaje += '<br>Educación: ' + this.persona.getTextoNivelEducacional();
    mensaje += '<br>Nacimiento: ' + this.persona.getTextoFechaNacimiento();

    this.presentAlert('Datos personales', mensaje);
  }

  // Este método sirve para mostrar el mensaje emergente
  public async presentAlert(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
}
