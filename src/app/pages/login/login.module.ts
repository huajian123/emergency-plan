import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import {ShareModule} from '../../share/share.module';
import {SuzhouLoginPageNewComponent} from './suzhou-login-page-new/suzhou-login-page-new.component';
import {LoginLayoutComponent} from './login-layout/login-layout.component';


@NgModule({
  declarations: [ LoginLayoutComponent, SuzhouLoginPageNewComponent],
  imports: [
    CommonModule,
    ShareModule,
    LoginRoutingModule,
  ]
})
export class LoginModule {
}
