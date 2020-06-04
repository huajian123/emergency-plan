import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SuzhouLoginPageNewComponent} from './suzhou-login-page-new/suzhou-login-page-new.component';
import {LoginLayoutComponent} from './login-layout/login-layout.component';


const routes: Routes = [
 /* { path: '', component: LoginLayoutComponent },*/
  { path: '', component: SuzhouLoginPageNewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
