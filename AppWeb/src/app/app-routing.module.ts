import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PerfilComponent} from "./Public/perfil/perfil.component";
import {LoginHematologoComponent} from "./Security/login-hematologo/login-hematologo.component";
import {LoginPediatraComponent} from "./Security/login-pediatra/login-pediatra.component";
import {HomePediatraComponent} from "./Pediatra/home-pediatra/home-pediatra.component";
import {HomeHematologoComponent} from "./Hematologo/home-hematologo/home-hematologo.component";
import {RegistrarPacienteComponent} from "./Paciente/registrar-paciente/registrar-paciente.component";

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'login'},
  {path:'login', component: PerfilComponent, pathMatch: 'full'},
  {path:'login/hematologo', component: LoginHematologoComponent},

  //PEDIATRA
  {path:'login/pediatra', component: LoginPediatraComponent},
  {path:'home/pediatra/:medicoId', component: HomePediatraComponent},
  {path:'home/pediatra/:medicoId/registrarPaciente', component: RegistrarPacienteComponent},

  //HEMATOLOGO
  {path:'home/hematologo/:medicoId', component: HomeHematologoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
