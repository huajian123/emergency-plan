import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import {ShareModule} from '../../share/share.module';
import {LoginPageComponent} from './login-page/login-page.component';
import {LoginLayoutComponent} from './login-layout/login-layout.component';


@NgModule({
  declarations: [ LoginLayoutComponent, LoginPageComponent],
  imports: [
    CommonModule,
    ShareModule,
    LoginRoutingModule,
  ]
})
export class LoginModule {
}
