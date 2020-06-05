import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FirstAccidentDisasterComponent} from './first-accident-disaster/first-accident-disaster.component';
import {FourthAccidentDisasterComponent} from './fourth-accident-disaster/fourth-accident-disaster.component';
import {ThirdAccidentDisasterComponent} from './third-accident-disaster/third-accident-disaster.component';
import {SecondAccidentDisasterComponent} from './second-accident-disaster/second-accident-disaster.component';


const routes: Routes = [
    {path: '', redirectTo: 'first', pathMatch: 'full'},
    {path: 'first', component: FirstAccidentDisasterComponent, data: {title: '一级灾害', keep: true}},
    {path: 'second', component: SecondAccidentDisasterComponent, data: {title: '二级灾害', keep: true}},
    {path: 'third', component: ThirdAccidentDisasterComponent, data: {title: '三级灾害', keep: true}},
    {path: 'fouth', component: FourthAccidentDisasterComponent, data: {title: '四级灾害', keep: true}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccidentDisastersRoutingModule {
}
