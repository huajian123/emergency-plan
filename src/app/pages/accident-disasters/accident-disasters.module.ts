import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccidentDisastersRoutingModule} from './accident-disasters-routing.module';
import {FirstAccidentDisasterComponent} from './first-accident-disaster/first-accident-disaster.component';
import {SecondAccidentDisasterComponent} from './second-accident-disaster/second-accident-disaster.component';
import {ThirdAccidentDisasterComponent} from './third-accident-disaster/third-accident-disaster.component';
import {FourthAccidentDisasterComponent} from './fourth-accident-disaster/fourth-accident-disaster.component';


@NgModule({
    declarations: [
        FirstAccidentDisasterComponent,
        SecondAccidentDisasterComponent,
        ThirdAccidentDisasterComponent,
        FourthAccidentDisasterComponent],
    imports: [
        CommonModule,
        AccidentDisastersRoutingModule
    ]
})
export class AccidentDisastersModule {
}
