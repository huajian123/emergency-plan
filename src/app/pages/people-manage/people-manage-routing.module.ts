import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableListComponent} from "./table-list/table-list.component";
import {FormModelComponent} from "./form-model/form-model.component";


const routes: Routes = [
  {path: '', redirectTo: 'table-model', pathMatch: 'full'},
  {path: 'table-model', component: TableListComponent, data: {title: '列表示例', keep: true}},
  {path: 'form-model', component: FormModelComponent, data: {title: '表单示例', keep: true}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleManageRoutingModule { }
