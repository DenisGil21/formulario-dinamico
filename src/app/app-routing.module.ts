import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'main',
    loadChildren: () => import('./dinamico/dinamico.module').then(m => m.DinamicoModule)
  },
  {
    path:'formulario',
    loadChildren: () => import('./formulario/formulario.module').then(m => m.FormularioModule)
  },
  {
    path: '**',
    redirectTo:'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
