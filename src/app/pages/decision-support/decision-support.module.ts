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
import {AlgaeOutbreakComponent} from './decision-support-list/accident-disaster/algae-outbreak/algae-outbreak.component';
import {BlackoutComponent} from './decision-support-list/accident-disaster/blackout/blackout.component';
import {HazardousChemicalsComponent} from './decision-support-list/accident-disaster/hazardous-chemicals/hazardous-chemicals.component';
import {LevelOneComponent} from './decision-support-list/accident-disaster/hazardous-chemicals/level-one/level-one.component';
import {LevelTwoComponent} from './decision-support-list/accident-disaster/hazardous-chemicals/level-two/level-two.component';
import {LevelThreeComponent} from './decision-support-list/accident-disaster/hazardous-chemicals/level-three/level-three.component';
import {TreeTplComponent} from './decision-support-list/accident-disaster/hazardous-chemicals/tree-tpl/tree-tpl.component';
import {EarthLevelOneComponent} from './decision-support-list/natural-disaster/earthquake/earth-level-one/earth-level-one.component';
import {EarthLevelTwoComponent} from './decision-support-list/natural-disaster/earthquake/earth-level-two/earth-level-two.component';
import {EarthLevelThreeComponent} from './decision-support-list/natural-disaster/earthquake/earth-level-three/earth-level-three.component';
import {EarthTreeTplComponent} from './decision-support-list/natural-disaster/earthquake/earth-tree-tpl/earth-tree-tpl.component';


@NgModule({
    declarations: [
        DecisionSupportListComponent,
        DroughtFloodComponent,
        DecisionTreeComponent,
        EarthquakeComponent,
        GeologicalComponent,
        MeteorologicalComponent,
        DisasterReliefComponent,
        TyphoonComponent,
        AlgaeOutbreakComponent,
        BlackoutComponent,
        HazardousChemicalsComponent,
        LevelOneComponent,
        LevelTwoComponent,
        LevelThreeComponent,
        TreeTplComponent,
        EarthLevelOneComponent,
        EarthLevelTwoComponent,
        EarthLevelThreeComponent,
        EarthTreeTplComponent],
    imports: [
        ShareModule,
        CommonModule,
        DecisionSupportRoutingModule
    ]
})
export class DecisionSupportModule {
}
