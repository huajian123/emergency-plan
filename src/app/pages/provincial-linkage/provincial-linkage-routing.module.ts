import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstDroughtProComponent} from './nature/drought-and-flood/first-drought-pro/first-drought-pro.component';
import {SecondDroughtProComponent} from './nature/drought-and-flood/second-drought-pro/second-drought-pro.component';
import {ThirdDroughtProComponent} from './nature/drought-and-flood/third-drought-pro/third-drought-pro.component';
import {FourthDroughtProComponent} from './nature/drought-and-flood/fourth-drought-pro/fourth-drought-pro.component';
import {EarthquakeProFirstComponent} from './nature/earthquake/earthquake-pro-first/earthquake-pro-first.component';
import {EarthquakeProSecondComponent} from './nature/earthquake/earthquake-pro-second/earthquake-pro-second.component';
import {EarthquakeProThirdComponent} from './nature/earthquake/earthquake-pro-third/earthquake-pro-third.component';
import {EarthquakeProFourthComponent} from './nature/earthquake/earthquake-pro-fourth/earthquake-pro-fourth.component';
import {FirstHazardProComponent} from './accident-disaster/hazardous-chemical/first-hazard-pro/first-hazard-pro.component';
import {SecondHazardProComponent} from './accident-disaster/hazardous-chemical/second-hazard-pro/second-hazard-pro.component';
import {ThirdHazardProComponent} from './accident-disaster/hazardous-chemical/third-hazard-pro/third-hazard-pro.component';
import {FourthHazardProComponent} from './accident-disaster/hazardous-chemical/fourth-hazard-pro/fourth-hazard-pro.component';
import {FoodProFirstComponent} from './public-health/food-safety/food-pro-first/food-pro-first.component';
import {FoodProSecondComponent} from './public-health/food-safety/food-pro-second/food-pro-second.component';
import {FoodProThirdComponent} from './public-health/food-safety/food-pro-third/food-pro-third.component';
import {FoodProFourthComponent} from './public-health/food-safety/food-pro-fourth/food-pro-fourth.component';
import {TotalPlanComponent} from './total-plan/total-plan.component';


const routes: Routes = [
  {path: '', redirectTo: 'total-plan-pro', pathMatch: 'full'},
  {path: 'total-plan-pro', component: TotalPlanComponent, data: {title: '总预案', keep: false}},
  /*防汛防旱*/
  {path: 'first-drought-pro', component: FirstDroughtProComponent, data: {title: '汛旱一级', keep: false}},
  {path: 'second-drought-pro', component: SecondDroughtProComponent, data: {title: '汛旱二级', keep: false}},
  {path: 'third-drought-pro', component: ThirdDroughtProComponent, data: {title: '汛旱三级', keep: false}},
  {path: 'fourth-drought-pro', component: FourthDroughtProComponent, data: {title: '汛旱四级', keep: false}},

  /*地震应急*/
  {path: 'earthquake-pro-first', component: EarthquakeProFirstComponent, data: {title: '地震一级', keep: false}},
  {path: 'earthquake-pro-second', component: EarthquakeProSecondComponent, data: {title: '地震二级', keep: false}},
  {path: 'earthquake-pro-third', component: EarthquakeProThirdComponent, data: {title: '地震三级', keep: false}},
  {path: 'earthquake-pro-fourth', component: EarthquakeProFourthComponent, data: {title: '地震四级', keep: false}},

  /*危险化学品*/
  {path: 'hazardous-chemicals-pro-first', component: FirstHazardProComponent, data: {title: '危化一级', keep: false}},
  {path: 'hazardous-chemicals-pro-second', component: SecondHazardProComponent, data: {title: '危化二级', keep: false}},
  {path: 'hazardous-chemicals-pro-third', component: ThirdHazardProComponent, data: {title: '危化三级', keep: false}},
  {path: 'hazardous-chemicals-pro-fourth', component: FourthHazardProComponent, data: {title: '危化四级', keep: false}},

  /*食品安全*/
  {path: 'hazardous-food-pro-first', component: FoodProFirstComponent, data: {title: '食品安全一级', keep: false}},
  {path: 'hazardous-food-pro-second', component: FoodProSecondComponent, data: {title: '食品安全二级', keep: false}},
  {path: 'hazardous-food-pro-third', component: FoodProThirdComponent, data: {title: '食品安全三级', keep: false}},
  {path: 'hazardous-food-pro-fourth', component: FoodProFourthComponent, data: {title: '食品安全四级', keep: false}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvincialLinkageRoutingModule { }
