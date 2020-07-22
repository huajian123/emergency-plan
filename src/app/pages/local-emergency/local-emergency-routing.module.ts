import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstDroughtFloodComponent} from './natural-disasters/drought-and-flood/first-drought-flood/first-drought-flood.component';
import {SecondDroughtFloodComponent} from './natural-disasters/drought-and-flood/second-drought-flood/second-drought-flood.component';
import {ThirdDroughtFloodComponent} from './natural-disasters/drought-and-flood/third-drought-flood/third-drought-flood.component';
import {FourthDroughtFloodComponent} from './natural-disasters/drought-and-flood/fourth-drought-flood/fourth-drought-flood.component';
import {FirstHazardousChemicalsComponent} from './accident-disasters/hazardous-chemicals/first-hazardous-chemicals/first-hazardous-chemicals.component';
import {SecondHazardousChemicalsComponent} from './accident-disasters/hazardous-chemicals/second-hazardous-chemicals/second-hazardous-chemicals.component';
import {ThirdHazardousChemicalsComponent} from './accident-disasters/hazardous-chemicals/third-hazardous-chemicals/third-hazardous-chemicals.component';
import {FourthHazardousChemicalsComponent} from './accident-disasters/hazardous-chemicals/fourth-hazardous-chemicals/fourth-hazardous-chemicals.component';
import {FirstFoodSafetyComponent} from './public-health/food-safety/first-food-safety/first-food-safety.component';
import {SecondFoodSafetyComponent} from './public-health/food-safety/second-food-safety/second-food-safety.component';
import {ThirdFoodSafetyComponent} from './public-health/food-safety/third-food-safety/third-food-safety.component';
import {FourthFoodSafetyComponent} from './public-health/food-safety/fourth-food-safety/fourth-food-safety.component';
import {FirstEarthquakeDisasterComponent} from './natural-disasters/earthquake-disasters/first-earthquake-disaster/first-earthquake-disaster.component';
import {SecondEarthquakeDisasterComponent} from './natural-disasters/earthquake-disasters/second-earthquake-disaster/second-earthquake-disaster.component';
import {ThirdEarthquakeDisasterComponent} from './natural-disasters/earthquake-disasters/third-earthquake-disaster/third-earthquake-disaster.component';
import {FourthEarthquakeDisasterComponent} from './natural-disasters/earthquake-disasters/fourth-earthquake-disaster/fourth-earthquake-disaster.component';
import {TotalBudgetComponent} from '../total-plan/total-budget/total-budget.component';
import {FirstGeologicalDisasterComponent} from './natural-disasters/geological-disaster/first-geological-disaster/first-geological-disaster.component';
import {SecondGeologicalDisasterComponent} from './natural-disasters/geological-disaster/second-geological-disaster/second-geological-disaster.component';
import {ThirdGeologicalDisasterComponent} from './natural-disasters/geological-disaster/third-geological-disaster/third-geological-disaster.component';
import {FourthGeologicalDisasterComponent} from './natural-disasters/geological-disaster/fourth-geological-disaster/fourth-geological-disaster.component';
import {FirstMeteorologicalDisasterComponent} from './natural-disasters/meteorological-disaster/first-meteorological-disaster/first-meteorological-disaster.component';
import {ThirdMeteorologicalDisasterComponent} from './natural-disasters/meteorological-disaster/third-meteorological-disaster/third-meteorological-disaster.component';
import {SecondMeteorologicalDisasterComponent} from './natural-disasters/meteorological-disaster/second-meteorological-disaster/second-meteorological-disaster.component';
import {FourthMeteorologicalDisasterComponent} from './natural-disasters/meteorological-disaster/fourth-meteorological-disaster/fourth-meteorological-disaster.component';
import {FirstDisasterReliefComponent} from './natural-disasters/natural-disaster-relief/first-disaster-relief/first-disaster-relief.component';
import {SecondDisasterReliefComponent} from './natural-disasters/natural-disaster-relief/second-disaster-relief/second-disaster-relief.component';
import {ThirdDisasterReliefComponent} from './natural-disasters/natural-disaster-relief/third-disaster-relief/third-disaster-relief.component';
import {FourthDisasterReliefComponent} from './natural-disasters/natural-disaster-relief/fourth-disaster-relief/fourth-disaster-relief.component';
import {FirstTyphoonDisasterComponent} from './natural-disasters/typhoon-disaster/first-typhoon-disaster/first-typhoon-disaster.component';
import {SecondTyphoonDisasterComponent} from './natural-disasters/typhoon-disaster/second-typhoon-disaster/second-typhoon-disaster.component';
import {ThirdTyphoonDisasterComponent} from './natural-disasters/typhoon-disaster/third-typhoon-disaster/third-typhoon-disaster.component';
import {FourthTyphoonDisasterComponent} from './natural-disasters/typhoon-disaster/fourth-typhoon-disaster/fourth-typhoon-disaster.component';
import {FirstAlgaeOutbreakComponent} from './accident-disasters/algae-outbreak/first-algae-outbreak/first-algae-outbreak.component';
import {SecondAlgaeOutbreakComponent} from './accident-disasters/algae-outbreak/second-algae-outbreak/second-algae-outbreak.component';
import {ThirdAlgaeOutbreakComponent} from './accident-disasters/algae-outbreak/third-algae-outbreak/third-algae-outbreak.component';
import {FourthAlgaeOutbreakComponent} from './accident-disasters/algae-outbreak/fourth-algae-outbreak/fourth-algae-outbreak.component';
import {FirstBlackoutComponent} from './accident-disasters/blackout/first-blackout/first-blackout.component';
import {SecondBlackoutComponent} from './accident-disasters/blackout/second-blackout/second-blackout.component';
import {ThirdBlackoutComponent} from './accident-disasters/blackout/third-blackout/third-blackout.component';
import {FourthBlackoutComponent} from './accident-disasters/blackout/fourth-blackout/fourth-blackout.component';


const routes: Routes = [
    {path: '', redirectTo: 'total-plan', pathMatch: 'full'},
    /*总预案*/
    {path: 'total-plan', component: TotalBudgetComponent, data: {title: '总预案', keep: true}},
    /*旱涝*/
    {path: 'drought-and-flood-first', component: FirstDroughtFloodComponent, data: {title: '汛旱一级', keep: true}},
    {path: 'drought-and-flood-second', component: SecondDroughtFloodComponent, data: {title: '汛旱二级', keep: true}},
    {path: 'drought-and-flood-third', component: ThirdDroughtFloodComponent, data: {title: '汛旱三级', keep: true}},
    {path: 'drought-and-flood-fourth', component: FourthDroughtFloodComponent, data: {title: '汛旱四级', keep: true}},
    /*地质*/
    {path: 'geological-disaster-first', component: FirstGeologicalDisasterComponent, data: {title: '地质一级', keep: true}},
    {path: 'geological-disaster-second', component: SecondGeologicalDisasterComponent, data: {title: '地质二级', keep: true}},
    {path: 'geological-disaster-third', component: ThirdGeologicalDisasterComponent, data: {title: '地质三级', keep: true}},
    {path: 'geological-disaster-fourth', component: FourthGeologicalDisasterComponent, data: {title: '地质四级', keep: true}},
    /*地震*/
    {path: 'earthquake-disaster-first', component: FirstEarthquakeDisasterComponent, data: {title: '地震一级', keep: false}},
    {path: 'earthquake-disaster-second', component: SecondEarthquakeDisasterComponent, data: {title: '地震二级', keep: false}},
    {path: 'earthquake-disaster-third', component: ThirdEarthquakeDisasterComponent, data: {title: '地震三级', keep: false}},
    {path: 'earthquake-disaster-fourth', component: FourthEarthquakeDisasterComponent, data: {title: '地震四级', keep: false}},
    /*气象*/
    {path: 'meteorological-disaster-first', component: FirstMeteorologicalDisasterComponent, data: {title: '气象灾害一级', keep: false}},
    {path: 'meteorological-disaster-second', component: SecondMeteorologicalDisasterComponent, data: {title: '气象灾害二级', keep: false}},
    {path: 'meteorological-disaster-third', component: ThirdMeteorologicalDisasterComponent, data: {title: '气象灾害三级', keep: false}},
    {path: 'meteorological-disaster-fourth', component: FourthMeteorologicalDisasterComponent, data: {title: '气象灾害四级', keep: false}},
    /*救助*/
    {path: 'natural-disaster-relief-first', component: FirstDisasterReliefComponent, data: {title: '灾害救助一级', keep: false}},
    {path: 'natural-disaster-relief-second', component: SecondDisasterReliefComponent, data: {title: '灾害救助二级', keep: false}},
    {path: 'natural-disaster-relief-third', component: ThirdDisasterReliefComponent, data: {title: '灾害救助三级', keep: false}},
    {path: 'natural-disaster-relief-fourth', component: FourthDisasterReliefComponent, data: {title: '灾害救助四级', keep: false}},
    /*台风*/
    {path: 'typhoon-disaster-first', component: FirstTyphoonDisasterComponent, data: {title: '台风一级', keep: false}},
    {path: 'typhoon-disaster-second', component: SecondTyphoonDisasterComponent, data: {title: '台风二级', keep: false}},
    {path: 'typhoon-disaster-third', component: ThirdTyphoonDisasterComponent, data: {title: '台风三级', keep: false}},
    {path: 'typhoon-disaster-fourth', component: FourthTyphoonDisasterComponent, data: {title: '台风四级', keep: false}},
    /*食品安全*/
    {path: 'food-safety-first', component: FirstFoodSafetyComponent, data: {title: '食品安全一级', keep: false}},
    {path: 'food-safety-second', component: SecondFoodSafetyComponent, data: {title: '食品安全二级', keep: false}},
    {path: 'food-safety-third', component: ThirdFoodSafetyComponent, data: {title: '食品安全三级', keep: false}},
    {path: 'food-safety-fourth', component: FourthFoodSafetyComponent, data: {title: '食品安全四级', keep: false}},
    /*危化品*/
    {path: 'hazardous-chemicals-first', component: FirstHazardousChemicalsComponent, data: {title: '危化品一级', keep: false}},
    {path: 'hazardous-chemicals-second', component: SecondHazardousChemicalsComponent, data: {title: '危化品二级', keep: false}},
    {path: 'hazardous-chemicals-third', component: ThirdHazardousChemicalsComponent, data: {title: '危化品三级', keep: false}},
    {path: 'hazardous-chemicals-fourth', component: FourthHazardousChemicalsComponent, data: {title: '危化品四级', keep: false}},
    /*蓝藻爆发*/
    {path: 'algae-outbreak-first', component: FirstAlgaeOutbreakComponent, data: {title: '蓝藻一级', keep: false}},
    {path: 'algae-outbreak-second', component: SecondAlgaeOutbreakComponent, data: {title: '蓝藻二级', keep: false}},
    {path: 'algae-outbreak-third', component: ThirdAlgaeOutbreakComponent, data: {title: '蓝藻三级', keep: false}},
    {path: 'algae-outbreak-fourth', component: FourthAlgaeOutbreakComponent, data: {title: '蓝藻四级', keep: false}},
    /*停电*/
    {path: 'blackout--first', component: FirstBlackoutComponent, data: {title: '停电一级', keep: false}},
    {path: 'blackout--second', component: SecondBlackoutComponent, data: {title: '停电二级', keep: false}},
    {path: 'blackout--third', component: ThirdBlackoutComponent, data: {title: '停电三级', keep: false}},
    {path: 'blackout--fourth', component: FourthBlackoutComponent, data: {title: '停电四级', keep: false}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LocalEmergencyRoutingModule {
}
