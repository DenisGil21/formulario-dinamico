import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  @Output() detalleItemEvent = new EventEmitter<any>();

  public detalleForm = this.fb.group({
    nivel: [''],
    pasillo: [''],
    lado: [''],
    tramo: [''],
    subnivel: ['']
  })

  constructor(private fb: FormBuilder) {

  }

  dataDetalle(){
    this.detalleItemEvent.emit(this.detalleForm.value)
  }

}
