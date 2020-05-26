import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EndpointComponent } from './endpoint/endpoint.component';
import { MenuComponent } from './menu/menu.component';
import { PanelPrincipalComponent } from './panel-principal/panel-principal.component';
import { PanelEndpointsComponent } from './panel-endpoints/panel-endpoints.component';
import { GrupoEndpointsComponent } from './grupo-endpoints/grupo-endpoints.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    EndpointComponent,
    MenuComponent,
    PanelPrincipalComponent,
    PanelEndpointsComponent,
    GrupoEndpointsComponent,
    LoginComponent
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
