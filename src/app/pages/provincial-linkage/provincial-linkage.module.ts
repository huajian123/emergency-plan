import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProvincialLinkageRoutingModule} from './provincial-linkage-routing.module';
import {ShareModule} from '../../share/share.module';
import { FirstDroughtProComponent } from './drought-and-flood/first-drought-pro/first-drought-pro.component';
import { SecondDroughtProComponent } from './drought-and-flood/second-drought-pro/second-drought-pro.component';
import { ThirdDroughtProComponent } from './drought-and-flood/third-drought-pro/third-drought-pro.component';
import { FourthDroughtProComponent } from './drought-and-flood/fourth-drought-pro/fourth-drought-pro.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { EarthquakeProFirstComponent } from './earthquake/earthquake-pro-first/earthquake-pro-first.component';
import { EarthquakeProSecondComponent } from './earthquake/earthquake-pro-second/earthquake-pro-second.component';
import { EarthquakeProThirdComponent } from './earthquake/earthquake-pro-third/earthquake-pro-third.component';
import { EarthquakeProFourthComponent } from './earthquake/earthquake-pro-fourth/earthquake-pro-fourth.component';


@NgModule({
    declarations: [FirstDroughtProComponent, SecondDroughtProComponent, ThirdDroughtProComponent, FourthDroughtProComponent, OrganizationListComponent, EarthquakeProFirstComponent, EarthquakeProSecondComponent, EarthquakeProThirdComponent, EarthquakeProFourthComponent],
    imports: [
        CommonModule,
        ProvincialLinkageRoutingModule,
        ShareModule
    ]
})
export class ProvincialLinkageModule {
}
