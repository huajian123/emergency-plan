import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstEarthquakeDisasterComponent} from './earthquake-disaster/first/first-natural-disaster.component';
import {SecondEarthquakeDisasterComponent} from './earthquake-disaster/second/second-natural-disaster.component';
import {ThirdEarthquakeDisasterComponent} from './earthquake-disaster/third/third-natural-disaster.component';
import {FourthEarthquakeDisasterComponent} from './earthquake-disaster/fourth/fourth-natural-disaster.component';

import {SecondNaturalDisasterComponent} from './drought-and-flood/second/second-natural-disaster.component';
import {FirstNaturalDisasterComponent} from './drought-and-flood/first/first-natural-disaster.component';
import {ThirdNaturalDisasterComponent} from './drought-and-flood/third/third-natural-disaster.component';
import {FourthNaturalDisasterComponent} from './drought-and-flood/fourth/fourth-natural-disaster.component';

import {FirstMeteorologicalDisasterComponent} from './meteorological-disaster/first/first-natural-disaster.component';
import {SecondMeteorologicalDisasterComponent} from './meteorological-disaster/second/second-natural-disaster.component';
import {ThirdMeteorologicalDisasterComponent} from './meteorological-disaster/third/third-natural-disaster.component';
import {FourthMeteorologicalDisasterComponent} from './meteorological-disaster/fourth/fourth-natural-disaster.component';

import {FirstNaturalDisasterReliefComponent} from './natural-disaster-relief/first/first-natural-disaster.component';
import {SecondNaturalDisasterReliefComponent} from './natural-disaster-relief/second/second-natural-disaster.component';
import {ThirdNaturalDisasterReliefComponent} from './natural-disaster-relief/third/third-natural-disaster.component';
import {FourthNaturalDisasterReliefComponent} from './natural-disaster-relief/fourth/fourth-natural-disaster.component';


import {FirstGeologicalDisasterComponent} from './geological-disaster/first/first-natural-disaster.component';
import {SecondGeologicalDisasterComponent} from './geological-disaster/second/second-natural-disaster.component';
import {ThirdGeologicalDisasterComponent} from './geological-disaster/third/third-natural-disaster.component';
import {FourthGeologicalDisasterComponent} from './geological-disaster/fourth/fourth-natural-disaster.component';

import {FirstTyphoonDisasterComponent} from './typhoon-disaster/first/first-natural-disaster.component';
import {SecondTyphoonDisasterComponent} from './typhoon-disaster/second/second-natural-disaster.component';
import {ThirdTyphoonDisasterComponent} from './typhoon-disaster/third/third-natural-disaster.component';
import {FourthTyphoonDisasterComponent} from './typhoon-disaster/fourth/fourth-natural-disaster.component';


const routes: Routes = [
    {path: '', redirectTo: 'drought-and-flood-frist', pathMatch: 'full'},
    /*旱涝*/
    {path: 'drought-and-flood-first', component: FirstNaturalDisasterComponent, data: {title: '一级灾害', keep: false}},
    {path: 'drought-and-flood-second', component: SecondNaturalDisasterComponent, data: {title: '二级灾害', keep: false}},
    {path: 'drought-and-flood-third', component: ThirdNaturalDisasterComponent, data: {title: '三级灾害', keep: false}},
    {path: 'drought-and-flood-fourth', component: FourthNaturalDisasterComponent, data: {title: '四级灾害', keep: false}},
    /*地震*/
    {path: 'earthquake-disaster-first', component: FirstEarthquakeDisasterComponent, data: {title: '一级灾害', keep: false}},
    {path: 'earthquake-disaster-second', component: SecondEarthquakeDisasterComponent, data: {title: '二级灾害', keep: false}},
    {path: 'earthquake-disaster-third', component: ThirdEarthquakeDisasterComponent, data: {title: '三级灾害', keep: false}},
    {path: 'earthquake-disaster-fourth', component: FourthEarthquakeDisasterComponent, data: {title: '四级灾害', keep: false}},
    /*气象*/
    {path: 'meteorological-disaster-first', component: FirstMeteorologicalDisasterComponent, data: {title: '一级灾害', keep: false}},
    {path: 'meteorological-disaster-second', component: SecondMeteorologicalDisasterComponent, data: {title: '二级灾害', keep: false}},
    {path: 'meteorological-disaster-third', component: ThirdMeteorologicalDisasterComponent, data: {title: '三级灾害', keep: false}},
    {path: 'meteorological-disaster-fourth', component: FourthMeteorologicalDisasterComponent, data: {title: '四级灾害', keep: false}},
    /*自然*/
    {path: 'natural-disaster-relief-first', component: FirstNaturalDisasterReliefComponent, data: {title: '一级灾害', keep: false}},
    {path: 'natural-disaster-relief-second', component: SecondNaturalDisasterReliefComponent, data: {title: '二级灾害', keep: false}},
    {path: 'natural-disaster-relief-third', component: ThirdNaturalDisasterReliefComponent, data: {title: '三级灾害', keep: false}},
    {path: 'natural-disaster-relief-fourth', component: FourthNaturalDisasterReliefComponent, data: {title: '四级灾害', keep: false}},
    /*地质*/
    {path: 'geological-disaster-first', component: FirstGeologicalDisasterComponent, data: {title: '一级灾害', keep: false}},
    {path: 'geological-disaster-second', component: SecondGeologicalDisasterComponent, data: {title: '二级灾害', keep: false}},
    {path: 'geological-disaster-third', component: ThirdGeologicalDisasterComponent, data: {title: '三级灾害', keep: false}},
    {path: 'geological-disaster-fourth', component: FourthGeologicalDisasterComponent, data: {title: '四级灾害', keep: false}},
    /*台风*/
    {path: 'typhoon-disaster-first', component: FirstTyphoonDisasterComponent, data: {title: '一级灾害', keep: false}},
    {path: 'typhoon-disaster-second', component: SecondTyphoonDisasterComponent, data: {title: '二级灾害', keep: false}},
    {path: 'typhoon-disaster-third', component: ThirdTyphoonDisasterComponent, data: {title: '三级灾害', keep: false}},
    {path: 'typhoon-disaster-fourth', component: FourthTyphoonDisasterComponent, data: {title: '四级灾害', keep: false}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NaturalDisastersRoutingModule {
}
