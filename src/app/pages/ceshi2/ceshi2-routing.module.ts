import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductCategoryComponent} from '../product/product-category/product-category.component';
import {Ceshi2ListComponent} from './ceshi2-list/ceshi2-list.component';
import {Ceshi2DetailComponent} from './ceshi2-detail/ceshi2-detail.component';


const routes: Routes = [
  {path: '', redirectTo: 'ceshi2-ceshi2list', pathMatch: 'full'},
  {path: 'ceshi2-ceshi2list', component: Ceshi2ListComponent, data: {title: '测试模块2', keep: true}},
  {path: 'ceshi2-ceshi2detail', component: Ceshi2DetailComponent, data: {title: '测试模块详情', keep: true}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ceshi2RoutingModule { }
