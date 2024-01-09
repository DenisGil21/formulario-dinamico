import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { DetalleComponent } from './components/detalle/detalle.component';
import { LocalidadComponent } from './components/localidad/localidad.component';
import { StockComponent } from './components/stock/stock.component';
import { AlmacenamientoComponent } from './components/almacenamiento/almacenamiento.component';
import { FormularioComponent } from './formulario.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetalleComponent,
    LocalidadComponent,
    StockComponent,
    AlmacenamientoComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormularioModule { }
