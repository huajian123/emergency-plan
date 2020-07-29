import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DecisionSupportRoutingModule} from './decision-support-routing.module';
import {DecisionSupportListComponent} from './decision-support-list/decision-support-list.component';
import {ShareModule} from '../../share/share.module';
import {DroughtFloodComponent} from './decision-support-list/natural-disaster/drought-flood/drought-flood.component';
import {DecisionTreeComponent} from './decision-support-list/decision-tree/decision-tree.component';
import {EarthquakeComponent} from './decision-support-list/natural-disaster/earthquake/earthquake.component';
import {GeologicalComponent} from './decision-support-list/natural-disaster/geological/geological.component';
import {MeteorologicalComponent} from './decision-support-list/natural-disaster/meteorological/meteorological.component';
import {DisasterReliefComponent} from './decision-support-list/natural-disaster/disaster-relief/disaster-relief.component';
import {TyphoonComponent} from './decision-support-list/natural-disaster/typhoon/typhoon.component';


@NgModule({
    declarations: [DecisionSupportListComponent, DroughtFloodComponent, DecisionTreeComponent, EarthquakeComponent, GeologicalComponent, MeteorologicalComponent, DisasterReliefComponent, TyphoonComponent],
    imports: [
        ShareModule,
        CommonModule,
        DecisionSupportRoutingModule
    ]
})
export class DecisionSupportModule {
}
