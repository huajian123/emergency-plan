import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FirstSecurityDisasterComponent} from './first-security-disaster/first-security-disaster.component';
import {SecondSecurityDisasterComponent} from './second-security-disaster/second-security-disaster.component';
import {ThirdSecurityDisasterComponent} from './third-security-disaster/third-security-disaster.component';
import {FourthSecurityDisasterComponent} from './fourth-security-disaster/fourth-security-disaster.component';


const routes: Routes = [
    {path: '', redirectTo: 'first-security-disaster', pathMatch: 'full'},
    {path: 'first-security-disaster', component: FirstSecurityDisasterComponent, data: {title: '一级灾害', keep: true}},
    {path: 'second-security-disaster', component: SecondSecurityDisasterComponent, data: {title: '二级灾害', keep: true}},
    {path: 'third-security-disaster', component: ThirdSecurityDisasterComponent, data: {title: '三级灾害', keep: true}},
    {path: 'fourth-security-disaster', component: FourthSecurityDisasterComponent, data: {title: '四级灾害', keep: true}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SocialSecurityRoutingModule {
}
