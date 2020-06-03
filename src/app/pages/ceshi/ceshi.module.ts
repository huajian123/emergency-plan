import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CeshiRoutingModule } from './ceshi-routing.module';
import { CeshiListComponent } from './ceshi-list/ceshi-list.component';


@NgModule({
  declarations: [CeshiListComponent],
  imports: [
    CommonModule,
    CeshiRoutingModule
  ]
})
export class CeshiModule { }
