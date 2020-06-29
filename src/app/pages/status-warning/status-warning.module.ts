import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusWarningRoutingModule } from './status-warning-routing.module';
import { EarthquakeWarningComponent } from './earthquake-warning/earthquake-warning.component';


@NgModule({
  declarations: [EarthquakeWarningComponent],
  imports: [
    CommonModule,
    StatusWarningRoutingModule
  ]
})
export class StatusWarningModule { }
