import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SocialSecurityRoutingModule} from './social-security-routing.module';
import {FirstSecurityDisasterComponent} from './first-security-disaster/first-security-disaster.component';
import {SecondSecurityDisasterComponent} from './second-security-disaster/second-security-disaster.component';
import {ThirdSecurityDisasterComponent} from './third-security-disaster/third-security-disaster.component';
import {FourthSecurityDisasterComponent} from './fourth-security-disaster/fourth-security-disaster.component';


@NgModule({
    declarations: [
        FirstSecurityDisasterComponent,
        SecondSecurityDisasterComponent,
        ThirdSecurityDisasterComponent,
        FourthSecurityDisasterComponent],
    imports: [
        CommonModule,
        SocialSecurityRoutingModule
    ]
})
export class SocialSecurityModule {
}
