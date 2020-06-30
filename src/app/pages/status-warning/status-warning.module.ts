import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusWarningRoutingModule} from './status-warning-routing.module';
import {EarthquakeWarningComponent} from './earthquake-warning/earthquake-warning.component';
import {ShareModule} from '../../share/share.module';


@NgModule({
    declarations: [EarthquakeWarningComponent],
    imports: [
        CommonModule,
        StatusWarningRoutingModule,
        ShareModule
    ]
})
export class StatusWarningModule {
}
