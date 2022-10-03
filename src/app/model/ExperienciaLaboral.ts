export class ExperienciaLaboral {

  public empresa = '';
  public anioInicio = -1;
  public trabajaAlli = false;
  public anioTermino = -1;
  public cargo = '';

  public validarEmpresa(): string {
    if (this.empresa.trim() === '') {
      return 'Debe ingresar una empresa.';
    }
    return '';
  }

  public validarAnioInicio(): string {
    if (this.anioInicio < 1900) {
      return 'Debe ingresar un año de inicio (mayora o igual a 1900).';
    }
    return '';
  }

  public validarAnioTermino(): string {

    if (this.trabajaAlli) {
      if (this.anioTermino === -1) {
        return;
      }
      if (this.anioTermino !== -1) {
        return 'Si trabaja actualmente en esa empresa, no puede ingesar un año de término.';
      }
    } else {
      const anioActual: number = new Date().getFullYear();
      if (this.anioTermino > anioActual) {
        return 'El año de término no puede ser mayor que el año actual.';
      }
      if (this.anioTermino < 1900) {
        return 'Debe ingresar un año de término (mayora o igual a 1900).';
      }
      if (this.anioInicio > this.anioTermino) {
        return 'El año de inicio no puede ser mayor que el año de término.';
      }
    }

    return '';
  }

  public validarCargo(): string {
    if (this.cargo.trim() === '') {
      return 'Debe ingresar un cargo.';
    }
    return '';
  }

  public validarExperienciaLaboral(): string {
    return this.validarEmpresa()
      || this.validarAnioInicio()
      || this.validarAnioTermino()
      || this.validarCargo();
  }
}
