import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginModule} from './login/login.module';
import {ProductRoutingModule} from './product/product-routing.module';
import {AccidentDisastersModule} from './accident-disasters/accident-disasters.module';
import {NaturalDisastersModule} from './natural-disasters/natural-disasters.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    ProductRoutingModule,
    AccidentDisastersModule,
    NaturalDisastersModule
  ],
  exports: [LoginModule, ProductRoutingModule, AccidentDisastersModule, NaturalDisastersModule]
})
export class PagesModule {
}
