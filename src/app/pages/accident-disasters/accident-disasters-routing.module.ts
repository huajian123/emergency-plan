import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstRoadTrafficComponent} from './road-traffic/first/first-accident-disaster.component';
import {SecondRoadTrafficComponent} from './road-traffic/second/second-accident-disaster.component';
import {ThirdRoadTrafficComponent} from './road-traffic/third/third-accident-disaster.component';
import {FourthRoadTrafficComponent} from './road-traffic/fourth/fourth-accident-disaster.component';
import {FirstEnvironmentalComponent} from './environmental/first/first-accident-disaster.component';
import {SecondEnvironmentalComponent} from './environmental/second/second-accident-disaster.component';
import {ThirdEnvironmentalComponent} from './environmental/third/third-accident-disaster.component';
import {FourthEnvironmentalComponent} from './environmental/fourth/fourth-accident-disaster.component';
import {FirstRadiationAccidentComponent} from './radiation-accident/first/first-accident-disaster.component';
import {SecondRadiationAccidentComponent} from './radiation-accident/second/second-accident-disaster.component';
import {ThirdRadiationAccidentComponent} from './radiation-accident/third/third-accident-disaster.component';
import {FourthRadiationAccidentComponent} from './radiation-accident/fourth/fourth-accident-disaster.component';
import {FirstAlgaeOutbreakComponent} from './algae-outbreak/first/first-accident-disaster.component';
import {SecondAlgaeOutbreakComponent} from './algae-outbreak/second/second-accident-disaster.component';
import {ThirdAlgaeOutbreakComponent} from './algae-outbreak/third/third-accident-disaster.component';
import {FourthAlgaeOutbreakComponent} from './algae-outbreak/fourth/fourth-accident-disaster.component';
import {FirstCommunicationComponent} from './communication/first/first-accident-disaster.component';
import {SecondCommunicationComponent} from './communication/second/second-accident-disaster.component';
import {ThirdCommunicationComponent} from './communication/third/third-accident-disaster.component';
import {FourthCommunicationComponent} from './communication/fourth/fourth-accident-disaster.component';
import {FirstBlackoutComponent} from './blackout/first/first-accident-disaster.component';
import {SecondBlackoutComponent} from './blackout/second/second-accident-disaster.component';
import {ThirdBlackoutComponent} from './blackout/third/third-accident-disaster.component';
import {FourthBlackoutComponent} from './blackout/fourth/fourth-accident-disaster.component';
import {FirstFireAccidentComponent} from './fire-accident/first/first-accident-disaster.component';
import {SecondFireAccidentComponent} from './fire-accident/second/second-accident-disaster.component';
import {ThirdFireAccidentComponent} from './fire-accident/third/third-accident-disaster.component';
import {FourthFireAccidentComponent} from './fire-accident/fourth/fourth-accident-disaster.component';
import {FirstForestFireComponent} from './forest-fire/first/first-accident-disaster.component';
import {SecondForestFireComponent} from './forest-fire/second/second-accident-disaster.component';
import {FourthForestFireComponent} from './forest-fire/fourth/fourth-accident-disaster.component';
import {ThirdForestFireComponent} from './forest-fire/third/third-accident-disaster.component';
import {FirstHazardousChemicalsComponent} from './hazardous-chemicals/first/first-accident-disaster.component';
import {SecondHazardousChemicalsComponent} from './hazardous-chemicals/second/second-accident-disaster.component';
import {FourthHazardousChemicalsComponent} from './hazardous-chemicals/fourth/fourth-accident-disaster.component';
import {ThirdHazardousChemicalsComponent} from './hazardous-chemicals/third/third-accident-disaster.component';
import {FirstLakeFloodingComponent} from './lake-flooding/first/first-accident-disaster.component';
import {SecondLakeFloodingComponent} from './lake-flooding/second/second-accident-disaster.component';
import {ThirdLakeFloodingComponent} from './lake-flooding/third/third-accident-disaster.component';
import {FourthLakeFloodingComponent} from './lake-flooding/fourth/fourth-accident-disaster.component';
import {FirstNuclearEventComponent} from './nuclear-event/first/first-accident-disaster.component';
import {SecondNuclearEventComponent} from './nuclear-event/second/second-accident-disaster.component';
import {ThirdNuclearEventComponent} from './nuclear-event/third/third-accident-disaster.component';
import {FourthNuclearEventComponent} from './nuclear-event/fourth/fourth-accident-disaster.component';
import {FirstPollutionWeatherComponent} from './pollution-weather/first/first-accident-disaster.component';
import {SecondPollutionWeatherComponent} from './pollution-weather/second/second-accident-disaster.component';
import {ThirdPollutionWeatherComponent} from './pollution-weather/third/third-accident-disaster.component';
import {FourthPollutionWeatherComponent} from './pollution-weather/fourth/fourth-accident-disaster.component';
import {FirstPortHazardousChemicalsComponent} from './port-hazardous-chemicals/first/first-accident-disaster.component';
import {SecondPortHazardousChemicalsComponent} from './port-hazardous-chemicals/second/second-accident-disaster.component';
import {ThirdPortHazardousChemicalsComponent} from './port-hazardous-chemicals/third/third-accident-disaster.component';
import {FourthPortHazardousChemicalsComponent} from './port-hazardous-chemicals/fourth/fourth-accident-disaster.component';
import {FirstProductionSafetyComponent} from './production-safety/first/first-accident-disaster.component';
import {SecondProductionSafetyComponent} from './production-safety/second/second-accident-disaster.component';
import {ThirdProductionSafetyComponent} from './production-safety/third/third-accident-disaster.component';
import {FourthProductionSafetyComponent} from './production-safety/fourth/fourth-accident-disaster.component';
import {FirstRailTrafficComponent} from './rail-traffic/first/first-accident-disaster.component';
import {SecondRailTrafficComponent} from './rail-traffic/second/second-accident-disaster.component';
import {ThirdRailTrafficComponent} from './rail-traffic/third/third-accident-disaster.component';
import {FourthRailTrafficComponent} from './rail-traffic/fourth/fourth-accident-disaster.component';
import {SecondSpecialEquipmentComponent} from './special-equipment/second/second-accident-disaster.component';
import {FirstSpecialEquipmentComponent} from './special-equipment/first/first-accident-disaster.component';
import {ThirdSpecialEquipmentComponent} from './special-equipment/third/third-accident-disaster.component';
import {FourthSpecialEquipmentComponent} from './special-equipment/fourth/fourth-accident-disaster.component';
import {FirstRailwayAccidentComponent} from './railway-accident/first/first-accident-disaster.component';
import {SecondRailwayAccidentComponent} from './railway-accident/second/second-accident-disaster.component';
import {ThirdRailwayAccidentComponent} from './railway-accident/third/third-accident-disaster.component';
import {FourthRailwayAccidentComponent} from './railway-accident/fourth/fourth-accident-disaster.component';
import {FirstWaterSearchRescueComponent} from './water-search-rescue/first/first-accident-disaster.component';
import {SecondWaterSearchRescueComponent} from './water-search-rescue/second/second-accident-disaster.component';
import {ThirdWaterSearchRescueComponent} from './water-search-rescue/third/third-accident-disaster.component';
import {FourthWaterSearchRescueComponent} from './water-search-rescue/fourth/fourth-accident-disaster.component';


const routes: Routes = [
    {path: '', redirectTo: 'road-traffic-first', pathMatch: 'full'},
    /*道路交通*/
    {path: 'road-traffic-first', component: FirstRoadTrafficComponent, data: {title: '一级灾害', keep: false}},
    {path: 'road-traffic-second', component: SecondRoadTrafficComponent, data: {title: '二级灾害', keep: false}},
    {path: 'road-traffic-third', component: ThirdRoadTrafficComponent, data: {title: '三级灾害', keep: false}},
    {path: 'road-traffic-fourth', component: FourthRoadTrafficComponent, data: {title: '四级灾害', keep: false}},
    /*突发环境*/
    {path: 'environmental-first', component: FirstEnvironmentalComponent, data: {title: '一级灾害', keep: false}},
    {path: 'environmental-second', component: SecondEnvironmentalComponent, data: {title: '二级灾害', keep: false}},
    {path: 'environmental-third', component: ThirdEnvironmentalComponent, data: {title: '三级灾害', keep: false}},
    {path: 'environmental-fourth', component: FourthEnvironmentalComponent, data: {title: '四级灾害', keep: false}},
    /*辐射*/
    {path: 'radiation-accident-first', component: FirstRadiationAccidentComponent, data: {title: '一级灾害', keep: false}},
    {path: 'radiation-accident-second', component: SecondRadiationAccidentComponent, data: {title: '二级灾害', keep: false}},
    {path: 'radiation-accident-third', component: ThirdRadiationAccidentComponent, data: {title: '三级灾害', keep: false}},
    {path: 'radiation-accident-fourth', component: FourthRadiationAccidentComponent, data: {title: '四级灾害', keep: false}},
    /*太湖蓝藻*/
    {path: 'algae-outbreak-first', component: FirstAlgaeOutbreakComponent, data: {title: '一级灾害', keep: false}},
    {path: 'algae-outbreak-second', component: SecondAlgaeOutbreakComponent, data: {title: '二级灾害', keep: false}},
    {path: 'algae-outbreak-third', component: ThirdAlgaeOutbreakComponent, data: {title: '三级灾害', keep: false}},
    {path: 'algae-outbreak-fourth', component: FourthAlgaeOutbreakComponent, data: {title: '四级灾害', keep: false}},
    /*太湖湖泛*/
    {path: 'lake-flooding-first', component: FirstLakeFloodingComponent, data: {title: '一级灾害', keep: false}},
    {path: 'lake-flooding-second', component: SecondLakeFloodingComponent, data: {title: '二级灾害', keep: false}},
    {path: 'lake-flooding-third', component: ThirdLakeFloodingComponent, data: {title: '三级灾害', keep: false}},
    {path: 'lake-flooding-fourth', component: FourthLakeFloodingComponent, data: {title: '四级灾害', keep: false}},
    /*重污染天气*/
    {path: 'pollution-weather-first', component: FirstPollutionWeatherComponent, data: {title: '一级灾害', keep: false}},
    {path: 'pollution-weather-second', component: SecondPollutionWeatherComponent, data: {title: '二级灾害', keep: false}},
    {path: 'pollution-weather-third', component: ThirdPollutionWeatherComponent, data: {title: '三级灾害', keep: false}},
    {path: 'pollution-weather-fourth', component: FourthPollutionWeatherComponent, data: {title: '四级灾害', keep: false}},
    /*核应急*/
    {path: 'nuclear-event-first', component: FirstNuclearEventComponent, data: {title: '一级灾害', keep: false}},
    {path: 'nuclear-event-second', component: SecondNuclearEventComponent, data: {title: '二级灾害', keep: false}},
    {path: 'nuclear-event-third', component: ThirdNuclearEventComponent, data: {title: '三级灾害', keep: false}},
    {path: 'nuclear-event-fourth', component: FourthNuclearEventComponent, data: {title: '四级灾害', keep: false}},
    /*特种设备*/
    {path: 'special-equipment-first', component: FirstSpecialEquipmentComponent, data: {title: '一级灾害', keep: false}},
    {path: 'special-equipment-second', component: SecondSpecialEquipmentComponent, data: {title: '二级灾害', keep: false}},
    {path: 'special-equipment-third', component: ThirdSpecialEquipmentComponent, data: {title: '三级灾害', keep: false}},
    {path: 'special-equipment-fourth', component: FourthSpecialEquipmentComponent, data: {title: '四级灾害', keep: false}},
    /*铁路事故*/
    {path: 'railway-accident-first', component: FirstRailwayAccidentComponent, data: {title: '一级灾害', keep: false}},
    {path: 'railway-accident-second', component: SecondRailwayAccidentComponent, data: {title: '二级灾害', keep: false}},
    {path: 'railway-accident-third', component: ThirdRailwayAccidentComponent, data: {title: '三级灾害', keep: false}},
    {path: 'railway-accident-fourth', component: FourthRailwayAccidentComponent, data: {title: '四级灾害', keep: false}},
    /*港口危险化学品*/
    {path: 'port-hazardous-chemicals-first', component: FirstPortHazardousChemicalsComponent, data: {title: '一级灾害', keep: false}},
    {path: 'port-hazardous-chemicals-second', component: SecondPortHazardousChemicalsComponent, data: {title: '二级灾害', keep: false}},
    {path: 'port-hazardous-chemicals-third', component: ThirdPortHazardousChemicalsComponent, data: {title: '三级灾害', keep: false}},
    {path: 'port-hazardous-chemicals-fourth', component: FourthPortHazardousChemicalsComponent, data: {title: '四级灾害', keep: false}},
    /*大面积停电*/
    {path: 'blackout-first', component: FirstBlackoutComponent, data: {title: '一级灾害', keep: false}},
    {path: 'blackout-second', component: SecondBlackoutComponent, data: {title: '二级灾害', keep: false}},
    {path: 'blackout-third', component: ThirdBlackoutComponent, data: {title: '三级灾害', keep: false}},
    {path: 'blackout-fourth', component: FourthBlackoutComponent, data: {title: '四级灾害', keep: false}},
    /*重特大火灾*/
    {path: 'fire-accident-first', component: FirstFireAccidentComponent, data: {title: '一级灾害', keep: false}},
    {path: 'fire-accident-second', component: SecondFireAccidentComponent, data: {title: '二级灾害', keep: false}},
    {path: 'fire-accident-third', component: ThirdFireAccidentComponent, data: {title: '三级灾害', keep: false}},
    {path: 'fire-accident-fourth', component: FourthFireAccidentComponent, data: {title: '四级灾害', keep: false}},
    /*通信保障*/
    {path: 'communication-first', component: FirstCommunicationComponent, data: {title: '一级灾害', keep: false}},
    {path: 'communication-second', component: SecondCommunicationComponent, data: {title: '二级灾害', keep: false}},
    {path: 'communication-third', component: ThirdCommunicationComponent, data: {title: '三级灾害', keep: false}},
    {path: 'communication-fourth', component: FourthCommunicationComponent, data: {title: '四级灾害', keep: false}},
    /*危险化学品*/
    {path: 'hazardous-chemicals-first', component: FirstHazardousChemicalsComponent, data: {title: '一级灾害', keep: false}},
    {path: 'hazardous-chemicals-second', component: SecondHazardousChemicalsComponent, data: {title: '二级灾害', keep: false}},
    {path: 'hazardous-chemicals-third', component: ThirdHazardousChemicalsComponent, data: {title: '三级灾害', keep: false}},
    {path: 'hazardous-chemicals-fourth', component: FourthHazardousChemicalsComponent, data: {title: '四级灾害', keep: false}},
    /*生产安全*/
    {path: 'production-safety-first', component: FirstProductionSafetyComponent, data: {title: '一级灾害', keep: false}},
    {path: 'production-safety-second', component: SecondProductionSafetyComponent, data: {title: '二级灾害', keep: false}},
    {path: 'production-safety-third', component: ThirdProductionSafetyComponent, data: {title: '三级灾害', keep: false}},
    {path: 'production-safety-fourth', component: FourthProductionSafetyComponent, data: {title: '四级灾害', keep: false}},
    /*森林火灾*/
    {path: 'forest-fire-first', component: FirstForestFireComponent, data: {title: '一级灾害', keep: false}},
    {path: 'forest-fire-second', component: SecondForestFireComponent, data: {title: '二级灾害', keep: false}},
    {path: 'forest-fire-third', component: ThirdForestFireComponent, data: {title: '三级灾害', keep: false}},
    {path: 'forest-fire-fourth', component: FourthForestFireComponent, data: {title: '四级灾害', keep: false}},
    /*水上搜救*/
    {path: 'water-search-rescue-first', component: FirstWaterSearchRescueComponent, data: {title: '一级灾害', keep: false}},
    {path: 'water-search-rescue-second', component: SecondWaterSearchRescueComponent, data: {title: '二级灾害', keep: false}},
    {path: 'water-search-rescue-third', component: ThirdWaterSearchRescueComponent, data: {title: '三级灾害', keep: false}},
    {path: 'water-search-rescue-fourth', component: FourthWaterSearchRescueComponent, data: {title: '四级灾害', keep: false}},
    /*轨道交通运营*/
    {path: 'rail-traffic-first', component: FirstRailTrafficComponent, data: {title: '一级灾害', keep: false}},
    {path: 'rail-traffic-second', component: SecondRailTrafficComponent, data: {title: '二级灾害', keep: false}},
    {path: 'rail-traffic-third', component: ThirdRailTrafficComponent, data: {title: '三级灾害', keep: false}},
    {path: 'rail-traffic-fourth', component: FourthRailTrafficComponent, data: {title: '四级灾害', keep: false}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccidentDisastersRoutingModule {
}
