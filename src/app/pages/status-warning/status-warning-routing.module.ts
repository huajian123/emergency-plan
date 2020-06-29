import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EarthquakeWarningComponent} from "./earthquake-warning/earthquake-warning.component";


const routes: Routes = [
  {path: '', redirectTo: 'earthquake-level', pathMatch: 'full'},
  {path: 'earthquake-level', component: EarthquakeWarningComponent, data: {title: '地震灾害判别', keep: true}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusWarningRoutingModule { }
