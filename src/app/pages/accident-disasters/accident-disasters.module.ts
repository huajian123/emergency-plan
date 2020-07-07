import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccidentDisastersRoutingModule} from './accident-disasters-routing.module';
import {ShareModule} from '../../share/share.module';
import {SecondRoadTrafficComponent} from './road-traffic/second/second-accident-disaster.component';
import {SecondEnvironmentalComponent} from './environmental/second/second-accident-disaster.component';
import {SecondRadiationAccidentComponent} from './radiation-accident/second/second-accident-disaster.component';
import {SecondAlgaeOutbreakComponent} from './algae-outbreak/second/second-accident-disaster.component';
import {SecondBlackoutComponent} from './blackout/second/second-accident-disaster.component';
import {SecondCommunicationComponent} from './communication/second/second-accident-disaster.component';
import {SecondFireAccidentComponent} from './fire-accident/second/second-accident-disaster.component';
import {SecondForestFireComponent} from './forest-fire/second/second-accident-disaster.component';
import {SecondHazardousChemicalsComponent} from './hazardous-chemicals/second/second-accident-disaster.component';
import {SecondLakeFloodingComponent} from './lake-flooding/second/second-accident-disaster.component';
import {SecondNuclearEventComponent} from './nuclear-event/second/second-accident-disaster.component';
import {SecondPollutionWeatherComponent} from './pollution-weather/second/second-accident-disaster.component';
import {SecondProductionSafetyComponent} from './production-safety/second/second-accident-disaster.component';
import {SecondPortHazardousChemicalsComponent} from './port-hazardous-chemicals/second/second-accident-disaster.component';
import {SecondRailTrafficComponent} from './rail-traffic/second/second-accident-disaster.component';
import {SecondRailwayAccidentComponent} from './railway-accident/second/second-accident-disaster.component';
import {SecondSpecialEquipmentComponent} from './special-equipment/second/second-accident-disaster.component';
import {SecondWaterSearchRescueComponent} from './water-search-rescue/second/second-accident-disaster.component';


@NgModule({
    declarations: [
        SecondRoadTrafficComponent,
        SecondEnvironmentalComponent,
        SecondRadiationAccidentComponent,
        SecondAlgaeOutbreakComponent,
        SecondBlackoutComponent,
        SecondFireAccidentComponent,
        SecondCommunicationComponent,
        SecondHazardousChemicalsComponent,
        SecondForestFireComponent,
        SecondLakeFloodingComponent,
        SecondPollutionWeatherComponent,
        SecondNuclearEventComponent,
        SecondProductionSafetyComponent,
        SecondPortHazardousChemicalsComponent,
        SecondRailTrafficComponent,
        SecondRailwayAccidentComponent,
        SecondSpecialEquipmentComponent,
        SecondWaterSearchRescueComponent
    ],
    imports: [
        ShareModule,
        CommonModule,
        AccidentDisastersRoutingModule
    ]
})
export class AccidentDisastersModule {
}
