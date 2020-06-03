import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ShareModule} from '../../share/share.module';
import { ProductDetialComponent } from './product-detial/product-detial.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {UfastTableComponent} from "../../share/ufast-table/ufast-table.component";
import {MapPipe} from "../../share/directives/pipe/map.pipe";






@NgModule({
  declarations: [ProductCategoryComponent, ProductListComponent, ProductDetialComponent, ProductEditComponent, UfastTableComponent, MapPipe],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ShareModule,
  ]
})
export class ProductModule { }
