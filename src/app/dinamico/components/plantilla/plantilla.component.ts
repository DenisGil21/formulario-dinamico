import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent {

  public plantillaForm = this.fb.group({
    campos: this.fb.array([
      this.fb.group({
        pregunta: ['', Validators.required],
        tipoCampo: ['text'],
        longitud: [0, Validators.required],
        validacion: ['alfanumerico'],
        multiples: this.fb.array(['']),
      })
    ])
  })

  @Output() plantillaItemEvent = new EventEmitter<any>();

  get camposArr() {
    return this.plantillaForm.get('campos') as FormArray;
  }

  validaCampo(campo: string, index: number): boolean | undefined {
    return this.camposArr.at(index).get(campo)?.touched && this.camposArr.at(index).get(campo)?.invalid;
  }

  getTipoCampo(index: number): string {
    const tipoCampo = this.camposArr.at(index) as FormGroup;
    return tipoCampo.get('tipoCampo')?.value;
  }

  getMultiple(index: number): FormArray {
    const multiples = this.camposArr.at(index) as FormGroup;
    return multiples.get('multiples') as FormArray;
  }


  constructor(private fb: FormBuilder) {

  }

  agregarCampo() {
    this.camposArr.push(this.fb.group({
      pregunta: [''],
      tipoCampo: ['text'],
      longitud: [0, Validators.required],
      validacion: ['letras'],
      multiples: this.fb.array(['']),
    }));
  }

  agregarOtro(index: number) {
    this.getMultiple(index).push(this.fb.control(''));
  }

  eliminarOtro(index: number, id: number) {
    this.getMultiple(index).removeAt(id);
  }

  eliminarCampo(index: number) {
    this.camposArr.removeAt(index);
  }

  finalizaPlantilla() {
    this.plantillaItemEvent.emit(this.plantillaForm.value)
  }


}
