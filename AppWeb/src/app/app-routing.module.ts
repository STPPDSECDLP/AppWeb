import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PerfilComponent} from "./Public/perfil/perfil.component";
import {LoginHematologoComponent} from "./Security/login-hematologo/login-hematologo.component";
import {LoginPediatraComponent} from "./Security/login-pediatra/login-pediatra.component";

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'login'},
  {path:'login', component: PerfilComponent, pathMatch: 'full'},
  {path:'login/hematologo', component: LoginHematologoComponent},
  {path:'login/pediatra', component: LoginPediatraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
