import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { PerfilComponent } from './Public/perfil/perfil.component';
import { PerfilFigurasComponent } from './Figuras/perfil-figuras/perfil-figuras.component';
import { LoginHematologoComponent } from './Security/login-hematologo/login-hematologo.component';
import { LoginPediatraComponent } from './Security/login-pediatra/login-pediatra.component';
import { HomePediatraComponent } from './Pediatra/home-pediatra/home-pediatra.component';
import {HomeHematologoComponent} from "./Hematologo/home-hematologo/home-hematologo.component";
import { HematologoNavBarComponent } from './Public/hematologo-nav-bar/hematologo-nav-bar.component';
import { PediatraNavBarComponent } from './Public/pediatra-nav-bar/pediatra-nav-bar.component';
import { PediatraHomeFiguraComponent } from './Figuras/pediatra-home-figura/pediatra-home-figura.component';
import { RegistrarPacienteComponent } from './Paciente/registrar-paciente/registrar-paciente.component';
import {FormsModule} from "@angular/forms";
import { HematologoHomeFiguraComponent } from './Figuras/hematologo-home-figura/hematologo-home-figura.component';
import { SangrePerifericaComponent } from './Hematologo/sangre-periferica/sangre-periferica.component';
import { HematologoSangrePerifericaFiguraComponent } from './Figuras/hematologo-sangre-periferica-figura/hematologo-sangre-periferica-figura.component';
import { SangrePerifericaVisualizarComponent } from './Pediatra/sangre-periferica-visualizar/sangre-periferica-visualizar.component';
import { SangrePerifericaEditComponent } from './Hematologo/sangre-periferica-edit/sangre-periferica-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    PerfilFigurasComponent,
    LoginHematologoComponent,
    LoginPediatraComponent,
    HomePediatraComponent,
    HomeHematologoComponent,
    HematologoNavBarComponent,
    PediatraNavBarComponent,
    PediatraHomeFiguraComponent,
    RegistrarPacienteComponent,
    HematologoHomeFiguraComponent,
    SangrePerifericaComponent,
    HematologoSangrePerifericaFiguraComponent,
    SangrePerifericaVisualizarComponent,
    SangrePerifericaEditComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
