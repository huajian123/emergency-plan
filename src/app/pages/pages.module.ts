import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginModule} from './login/login.module';
import {ProductRoutingModule} from './product/product-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    ProductRoutingModule,
  ],
  exports: [LoginModule, ProductRoutingModule]
})
export class PagesModule {
}
