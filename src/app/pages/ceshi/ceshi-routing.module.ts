import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from '../user/user-list/user-list.component';
import {CeshiListComponent} from './ceshi-list/ceshi-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'ceshi-list', pathMatch: 'full' },
  { path: 'ceshi-list', component: CeshiListComponent , data: {title: '测试模块', keep: true}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CeshiRoutingModule { }
