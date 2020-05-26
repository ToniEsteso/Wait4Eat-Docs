import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelPrincipalComponent } from './panel-principal/panel-principal.component';
import { PanelEndpointsComponent } from './panel-endpoints/panel-endpoints.component';


const routes: Routes = [
  { path: '', component: PanelPrincipalComponent },
  { path: 'endpoints', component: PanelEndpointsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
