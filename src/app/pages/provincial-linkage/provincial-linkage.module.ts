import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProvincialLinkageRoutingModule} from './provincial-linkage-routing.module';
import {ShareModule} from '../../share/share.module';
import {FirstDroughtProComponent} from './nature/drought-and-flood/first-drought-pro/first-drought-pro.component';
import {SecondDroughtProComponent} from './nature/drought-and-flood/second-drought-pro/second-drought-pro.component';
import {ThirdDroughtProComponent} from './nature/drought-and-flood/third-drought-pro/third-drought-pro.component';
import {FourthDroughtProComponent} from './nature/drought-and-flood/fourth-drought-pro/fourth-drought-pro.component';
import {OrganizationListComponent} from './organization-list/organization-list.component';
import {EarthquakeProFirstComponent} from './nature/earthquake/earthquake-pro-first/earthquake-pro-first.component';
import {EarthquakeProSecondComponent} from './nature/earthquake/earthquake-pro-second/earthquake-pro-second.component';
import {EarthquakeProThirdComponent} from './nature/earthquake/earthquake-pro-third/earthquake-pro-third.component';
import {EarthquakeProFourthComponent} from './nature/earthquake/earthquake-pro-fourth/earthquake-pro-fourth.component';
import { FirstHazardProComponent } from './accident-disaster/hazardous-chemical/first-hazard-pro/first-hazard-pro.component';
import { SecondHazardProComponent } from './accident-disaster/hazardous-chemical/second-hazard-pro/second-hazard-pro.component';
import { ThirdHazardProComponent } from './accident-disaster/hazardous-chemical/third-hazard-pro/third-hazard-pro.component';
import { FourthHazardProComponent } from './accident-disaster/hazardous-chemical/fourth-hazard-pro/fourth-hazard-pro.component';


@NgModule({
    declarations: [
        FirstDroughtProComponent,
        SecondDroughtProComponent,
        ThirdDroughtProComponent,
        FourthDroughtProComponent,
        OrganizationListComponent,
        EarthquakeProFirstComponent,
        EarthquakeProSecondComponent,
        EarthquakeProThirdComponent,
        EarthquakeProFourthComponent,
        FirstHazardProComponent,
        SecondHazardProComponent,
        ThirdHazardProComponent,
        FourthHazardProComponent],
    imports: [
        CommonModule,
        ProvincialLinkageRoutingModule,
        ShareModule
    ]
})
export class ProvincialLinkageModule {
}
