import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PerfilComponent} from "./Public/perfil/perfil.component";
import {LoginHematologoComponent} from "./Security/login-hematologo/login-hematologo.component";
import {LoginPediatraComponent} from "./Security/login-pediatra/login-pediatra.component";
import {HomePediatraComponent} from "./Pediatra/home-pediatra/home-pediatra.component";
import {HomeHematologoComponent} from "./Hematologo/home-hematologo/home-hematologo.component";
import {RegistrarPacienteComponent} from "./Paciente/registrar-paciente/registrar-paciente.component";
import {SangrePerifericaComponent} from "./Hematologo/sangre-periferica/sangre-periferica.component";
import {
  SangrePerifericaVisualizarComponent
} from "./Pediatra/sangre-periferica-visualizar/sangre-periferica-visualizar.component";
import {SangrePerifericaEditComponent} from "./Hematologo/sangre-periferica-edit/sangre-periferica-edit.component";
import {MedulaOseaComponent} from "./Hematologo/medula-osea/medula-osea.component";
import {MedulaOseaEditComponent} from "./Hematologo/medula-osea-edit/medula-osea-edit.component";
import {MedulaOseaVisualizarComponent} from "./Pediatra/medula-osea-visualizar/medula-osea-visualizar.component";

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'login'},
  {path:'login', component: PerfilComponent, pathMatch: 'full'},
  {path:'login/hematologo', component: LoginHematologoComponent},

  //PEDIATRA
  {path:'login/pediatra', component: LoginPediatraComponent},
  {path:'home/pediatra/:medicoId', component: HomePediatraComponent},
  {path:'home/pediatra/:medicoId/registrarPaciente', component: RegistrarPacienteComponent},
  {path:'home/pediatra/:medicoId/paciente/:pacienteId/sangrePeriferica', component: SangrePerifericaVisualizarComponent},
  {path:'home/pediatra/:medicoId/paciente/:pacienteId/medulaOsea', component: MedulaOseaVisualizarComponent},


  //HEMATOLOGO
  {path:'home/hematologo/:medicoId', component: HomeHematologoComponent},
  {path:'home/hematologo/:medicoId/paciente/:pacienteId/sangrePeriferica', component: SangrePerifericaComponent},
  {path:'home/hematologo/:medicoId/paciente/:pacienteId/sangrePeriferica/:sangrePerifericaId', component: SangrePerifericaEditComponent},
  {path:'home/hematologo/:medicoId/paciente/:pacienteId/medulaOsea', component: MedulaOseaComponent},
  {path:'home/hematologo/:medicoId/paciente/:pacienteId/medulaOsea/:medulaOseaId', component: MedulaOseaEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
