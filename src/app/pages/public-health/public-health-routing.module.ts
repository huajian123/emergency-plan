import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstHealthDisasterComponent} from './first-health-disaster/first-health-disaster.component';
import {SecondHealthDisasterComponent} from './second-health-disaster/second-health-disaster.component';
import {ThirdHealthDisasterComponent} from './third-health-disaster/third-health-disaster.component';
import {FourthHealthDisasterComponent} from './fourth-health-disaster/fourth-health-disaster.component';


const routes: Routes = [
    {path: '', redirectTo: 'first-health-disaster', pathMatch: 'full'},
    {path: 'first-health-disaster', component: FirstHealthDisasterComponent, data: {title: '一级灾害', keep: false}},
    {path: 'second-health-disaster', component: SecondHealthDisasterComponent, data: {title: '二级灾害', keep: false}},
    {path: 'third-health-disaster', component: ThirdHealthDisasterComponent, data: {title: '三级灾害', keep: false}},
    {path: 'fourth-health-disaster', component: FourthHealthDisasterComponent, data: {title: '四级灾害', keep: false}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicHealthRoutingModule {
}
