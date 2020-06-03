import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductCategoryComponent} from './product-category/product-category.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetialComponent} from './product-detial/product-detial.component';


const routes: Routes = [
  {path: '', redirectTo: 'product-category', pathMatch: 'full'},
  {path: 'product-category', component: ProductCategoryComponent, data: {title: '商品种类',keep: true}},
  {path: 'product-list', component: ProductListComponent, data: {title: '商品列表',keep: true}},
  {path: 'product-detail', component: ProductDetialComponent, data: {title: '商品详情',keep: true}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
