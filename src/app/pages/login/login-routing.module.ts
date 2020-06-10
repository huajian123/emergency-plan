import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {LoginLayoutComponent} from './login-layout/login-layout.component';


const routes: Routes = [
    {path: '', component: LoginLayoutComponent},
    {path: 'login-page', component: LoginPageComponent, data: {cache: false}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {
}
