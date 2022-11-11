import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PerfilComponent} from "./Public/perfil/perfil.component";

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'perfil'},
  {path:'perfil', component: PerfilComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
