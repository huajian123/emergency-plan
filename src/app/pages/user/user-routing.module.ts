import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductCategoryComponent} from '../product/product-category/product-category.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserCategoryComponent} from './user-category/user-category.component';


const routes: Routes = [
  { path: '', redirectTo: 'user-list', pathMatch: 'full' },
  { path: 'user-list', component: UserListComponent ,data: {title:"用户列表",keep: true}},
  { path: 'user-category', component: UserCategoryComponent ,data: {title:"用户种类",keep: true}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
