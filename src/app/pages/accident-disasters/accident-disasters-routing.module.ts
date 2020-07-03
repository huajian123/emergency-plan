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
    /**/
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccidentDisastersRoutingModule {
}
