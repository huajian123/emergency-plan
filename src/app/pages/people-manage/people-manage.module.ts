import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleManageRoutingModule } from './people-manage-routing.module';
import { TableListComponent } from './table-list/table-list.component';
import { FormModelComponent } from './form-model/form-model.component';


@NgModule({
  declarations: [TableListComponent, FormModelComponent],
  imports: [
    CommonModule,
    PeopleManageRoutingModule
  ]
})
export class PeopleManageModule { }
