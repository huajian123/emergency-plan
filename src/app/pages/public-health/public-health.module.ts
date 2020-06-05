import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicHealthRoutingModule} from './public-health-routing.module';
import {FirstHealthDisasterComponent} from './first-health-disaster/first-health-disaster.component';
import {SecondHealthDisasterComponent} from './second-health-disaster/second-health-disaster.component';
import {ThirdHealthDisasterComponent} from './third-health-disaster/third-health-disaster.component';
import {FourthHealthDisasterComponent} from './fourth-health-disaster/fourth-health-disaster.component';


@NgModule({
    declarations: [
        FirstHealthDisasterComponent,
        SecondHealthDisasterComponent,
        ThirdHealthDisasterComponent,
        FourthHealthDisasterComponent],
    imports: [
        CommonModule,
        PublicHealthRoutingModule
    ]
})
export class PublicHealthModule {
}
