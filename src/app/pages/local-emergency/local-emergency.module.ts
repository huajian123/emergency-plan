import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LocalEmergencyRoutingModule} from './local-emergency-routing.module';
import {FirstDroughtFloodComponent} from './natural-disasters/drought-and-flood/first-drought-flood/first-drought-flood.component';
import {SecondDroughtFloodComponent} from './natural-disasters/drought-and-flood/second-drought-flood/second-drought-flood.component';
import {ThirdDroughtFloodComponent} from './natural-disasters/drought-and-flood/third-drought-flood/third-drought-flood.component';
import {FourthDroughtFloodComponent} from './natural-disasters/drought-and-flood/fourth-drought-flood/fourth-drought-flood.component';


@NgModule({
    declarations: [FirstDroughtFloodComponent, SecondDroughtFloodComponent, ThirdDroughtFloodComponent, FourthDroughtFloodComponent],
    imports: [
        CommonModule,
        LocalEmergencyRoutingModule
    ]
})
export class LocalEmergencyModule {
}
