import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  public plantilla: any;

  agregarDetalle(detalle: any){
    this.plantilla = {...detalle};
  }

  guardarPlantilla(){

  }

}
