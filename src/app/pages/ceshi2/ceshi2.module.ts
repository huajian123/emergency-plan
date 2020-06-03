import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ceshi2RoutingModule } from './ceshi2-routing.module';
import { Ceshi2ListComponent } from './ceshi2-list/ceshi2-list.component';
import { Ceshi2DetailComponent } from './ceshi2-detail/ceshi2-detail.component';


@NgModule({
  declarations: [Ceshi2ListComponent, Ceshi2DetailComponent],
  imports: [
    CommonModule,
    Ceshi2RoutingModule
  ]
})
export class Ceshi2Module { }
