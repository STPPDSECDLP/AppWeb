import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './Public/perfil/perfil.component';
import { PerfilFigurasComponent } from './Figuras/perfil-figuras/perfil-figuras.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    PerfilFigurasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
