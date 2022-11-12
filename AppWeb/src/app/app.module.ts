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

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    PerfilFigurasComponent,
    LoginHematologoComponent,
    LoginPediatraComponent,
    HomePediatraComponent,
    HomeHematologoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
