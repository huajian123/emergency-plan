import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FistNaturalDisasterComponent} from './fist-natural-disaster/fist-natural-disaster.component';
import {FourthNaturalDisasterComponent} from './fourth-natural-disaster/fourth-natural-disaster.component';
import {ThirdNaturalDisasterComponent} from './third-natural-disaster/third-natural-disaster.component';
import {SecondNaturalDisasterComponent} from './second-natural-disaster/second-natural-disaster.component';


const routes: Routes = [
    {path: '', redirectTo: 'fist-natural-disaster', pathMatch: 'full'},
    {path: 'fist-natural-disaster', component: FistNaturalDisasterComponent, data: {title: '一级灾害', keep: true}},
    {path: 'second-natural-disaster', component: SecondNaturalDisasterComponent, data: {title: '二级灾害', keep: true}},
    {path: 'third-natural-disaster', component: ThirdNaturalDisasterComponent, data: {title: '三级灾害', keep: true}},
    {path: 'fourth-natural-disaster', component: FourthNaturalDisasterComponent, data: {title: '四级灾害', keep: true}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaturalDisastersRoutingModule { }
