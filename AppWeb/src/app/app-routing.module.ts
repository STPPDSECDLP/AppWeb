import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PerfilComponent} from "./Public/perfil/perfil.component";
import {LoginHematologoComponent} from "./Security/login-hematologo/login-hematologo.component";
import {LoginPediatraComponent} from "./Security/login-pediatra/login-pediatra.component";
import {HomePediatraComponent} from "./Pediatra/home-pediatra/home-pediatra.component";
import {HomeHematologoComponent} from "./Hematologo/home-hematologo/home-hematologo.component";
import {RegistrarPacienteComponent} from "./Paciente/registrar-paciente/registrar-paciente.component";
import {SangrePerifericaComponent} from "./Pediatra/sangre-periferica/sangre-periferica.component";
import {
  SangrePerifericaVisualizarComponent
} from "./Hematologo/sangre-periferica-visualizar/sangre-periferica-visualizar.component";
import {SangrePerifericaEditComponent} from "./Pediatra/sangre-periferica-edit/sangre-periferica-edit.component";
import {MedulaOseaComponent} from "./Pediatra/medula-osea/medula-osea.component";
import {MedulaOseaEditComponent} from "./Pediatra/medula-osea-edit/medula-osea-edit.component";
import {MedulaOseaVisualizarComponent} from "./Hematologo/medula-osea-visualizar/medula-osea-visualizar.component";
import {ReporteComponent} from "./Pediatra/reporte/reporte.component";
import { EstadisticasComponent } from './Pediatra/estadisticas/estadisticas.component';
import { ReporteEditComponent } from './Pediatra/reporte-edit/reporte-edit.component';
import { ReporteVisualizarComponent } from './Hematologo/reporte-visualizar/reporte-visualizar.component';
import { EstadisticasHematologoComponent } from './Hematologo/estadisticas-hematologo/estadisticas-hematologo.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'login'},
  {path:'login', component: PerfilComponent, pathMatch: 'full'},
  {path:'login/hematologo', component: LoginHematologoComponent},

  //PEDIATRA
  {path:'login/pediatra', component: LoginPediatraComponent},
  {path:'home/pediatra/:medicoId', component: HomePediatraComponent},
  {path:'home/pediatra/:medicoId/registrarPaciente', component: RegistrarPacienteComponent},
  {path:'home/pediatra/:medicoId/paciente/:pacienteId/sangrePeriferica', component: SangrePerifericaComponent},
  {path:'home/pediatra/:medicoId/paciente/:pacienteId/sangrePeriferica/:sangrePerifericaId', component: SangrePerifericaEditComponent},
  {path:'home/pediatra/:medicoId/paciente/:pacienteId/medulaOsea', component: MedulaOseaComponent},
  {path:'home/pediatra/:medicoId/paciente/:pacienteId/medulaOsea/:medulaOseaId', component: MedulaOseaEditComponent},
  {path:'home/pediatra/:medicoId/paciente/:pacienteId/reporte', component: ReporteComponent},
  {path:'home/pediatra/:medicoId/paciente/:pacienteId/reporte/:reporteId', component: ReporteEditComponent},
  {path:'home/pediatra/:medicoId/estadisticas', component: EstadisticasComponent},


  //HEMATOLOGO
  {path:'home/hematologo/:medicoId', component: HomeHematologoComponent},
  {path:'home/hematologo/:medicoId/paciente/:pacienteId/sangrePeriferica', component: SangrePerifericaVisualizarComponent},
  {path:'home/hematologo/:medicoId/paciente/:pacienteId/medulaOsea', component: MedulaOseaVisualizarComponent},
  {path:'home/hematologo/:medicoId/paciente/:pacienteId/reporte', component: ReporteVisualizarComponent},
  {path:'home/hematologo/:medicoId/estadisticas', component: EstadisticasHematologoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
