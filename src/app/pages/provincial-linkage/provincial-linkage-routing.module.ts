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


const routes: Routes = [
  {path: '', redirectTo: 'first-drought-pro', pathMatch: 'full'},
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
  {path: 'hazardous-chemicals-pro-first', component: EarthquakeProFourthComponent, data: {title: '地震四级', keep: false}},
  {path: 'hazardous-chemicals-pro-second', component: EarthquakeProFourthComponent, data: {title: '地震四级', keep: false}},
  {path: 'hazardous-chemicals-pro-third', component: EarthquakeProFourthComponent, data: {title: '地震四级', keep: false}},
  {path: 'hazardous-chemicals-pro-fourth', component: EarthquakeProFourthComponent, data: {title: '地震四级', keep: false}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvincialLinkageRoutingModule { }
