import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccidentDisastersRoutingModule} from './accident-disasters-routing.module';
import {ShareModule} from '../../share/share.module';
import {SecondRoadTrafficComponent} from './road-traffic/second/second-accident-disaster.component';
import {SecondEnvironmentalComponent} from './environmental/second/second-accident-disaster.component';
import {SecondRadiationAccidentComponent} from './radiation-accident/second/second-accident-disaster.component';


@NgModule({
    declarations: [
        SecondRoadTrafficComponent,
        SecondEnvironmentalComponent,
        SecondRadiationAccidentComponent,
    ],
    imports: [
        ShareModule,
        CommonModule,
        AccidentDisastersRoutingModule
    ]
})
export class AccidentDisastersModule {
}
