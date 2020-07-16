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


const routes: Routes = [
    {path: '', redirectTo: 'total-plan', pathMatch: 'full'},
    /*总预案*/
    {path: 'total-plan', component: TotalBudgetComponent, data: {title: '总预案', keep: true}},
    /*旱涝*/
    {path: 'drought-and-flood-first', component: FirstDroughtFloodComponent, data: {title: '汛旱一级', keep: true}},
    {path: 'drought-and-flood-second', component: SecondDroughtFloodComponent, data: {title: '汛旱二级', keep: true}},
    {path: 'drought-and-flood-third', component: ThirdDroughtFloodComponent, data: {title: '汛旱三级', keep: true}},
    {path: 'drought-and-flood-fourth', component: FourthDroughtFloodComponent, data: {title: '汛旱四级', keep: true}},
    /*地震*/
    {path: 'earthquake-disaster-first', component: FirstEarthquakeDisasterComponent, data: {title: '地震一级', keep: false}},
    {path: 'earthquake-disaster-second', component: SecondEarthquakeDisasterComponent, data: {title: '地震二级', keep: false}},
    {path: 'earthquake-disaster-third', component: ThirdEarthquakeDisasterComponent, data: {title: '地震三级', keep: false}},
    {path: 'earthquake-disaster-fourth', component: FourthEarthquakeDisasterComponent, data: {title: '地震四级', keep: false}},
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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LocalEmergencyRoutingModule {
}
