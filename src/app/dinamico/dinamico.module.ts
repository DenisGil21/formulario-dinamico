import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinamicoRoutingModule } from './dinamico-routing.module';
import { MainComponent } from './main/main.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    FormularioComponent,
    PlantillaComponent
  ],
  imports: [
    CommonModule,
    DinamicoRoutingModule,
    ReactiveFormsModule
  ]
})
export class DinamicoModule { }
