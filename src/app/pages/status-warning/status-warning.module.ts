import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusWarningRoutingModule} from './status-warning-routing.module';
import {EarthquakeWarningComponent} from './natural-disaster-warning/earthquake-warning/earthquake-warning.component';
import {ShareModule} from '../../share/share.module';
import {DroughtAndFloodWarningComponent} from './natural-disaster-warning/drought-and-flood-warning/drought-and-flood-warning.component';
import {GeologicalWarningComponent} from './natural-disaster-warning/geological-warning/geological-warning.component';
import {MeteorologicalWarningComponent} from './natural-disaster-warning/meteorological-warning/meteorological-warning.component';
import {NaturalReliefWarningComponent} from './natural-disaster-warning/natural-relief-warning/natural-relief-warning.component';
import {TyphoonWarningComponent} from './natural-disaster-warning/typhoon-warning/typhoon-warning.component';


@NgModule({
    declarations: [
        DroughtAndFloodWarningComponent,
        EarthquakeWarningComponent,
        GeologicalWarningComponent,
        MeteorologicalWarningComponent,
        NaturalReliefWarningComponent,
        TyphoonWarningComponent],
    imports: [
        CommonModule,
        StatusWarningRoutingModule,
        ShareModule
    ]
})
export class StatusWarningModule {
}
