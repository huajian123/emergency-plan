import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NaturalDisastersRoutingModule} from './natural-disasters-routing.module';
import {ShareModule} from '../../share/share.module';
import {SecondNaturalDisasterComponent} from './drought-and-flood/second/second-natural-disaster.component';
import {SecondEarthquakeDisasterComponent} from './earthquake-disaster/second/second-natural-disaster.component';
import {SecondMeteorologicalDisasterComponent} from './meteorological-disaster/second/second-natural-disaster.component';
import {SecondNaturalDisasterReliefComponent} from './natural-disaster-relief/second/second-natural-disaster.component';
import {SecondGeologicalDisasterComponent} from './geological-disaster/second/second-natural-disaster.component';
import {SecondTyphoonDisasterComponent} from './typhoon-disaster/second/second-natural-disaster.component';
import {FirstEarthquakeDisasterComponent} from './earthquake-disaster/first/first-natural-disaster.component';
import {ThirdEarthquakeDisasterComponent} from './earthquake-disaster/third/third-natural-disaster.component';
import {FourthEarthquakeDisasterComponent} from './earthquake-disaster/fourth/fourth-natural-disaster.component';


@NgModule({
    declarations: [
        FirstEarthquakeDisasterComponent,
        SecondNaturalDisasterComponent,
        SecondEarthquakeDisasterComponent,
        SecondMeteorologicalDisasterComponent,
        SecondNaturalDisasterReliefComponent,
        SecondGeologicalDisasterComponent,
        SecondTyphoonDisasterComponent,
        ThirdEarthquakeDisasterComponent,
        FourthEarthquakeDisasterComponent
    ],
    imports: [
        CommonModule,
        NaturalDisastersRoutingModule,
        ShareModule,
    ]
})
export class NaturalDisastersModule {
}
