import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstDroughtFloodComponent} from './natural-disasters/drought-and-flood/first-drought-flood/first-drought-flood.component';
import {SecondDroughtFloodComponent} from './natural-disasters/drought-and-flood/second-drought-flood/second-drought-flood.component';
import {ThirdDroughtFloodComponent} from './natural-disasters/drought-and-flood/third-drought-flood/third-drought-flood.component';
import {FourthDroughtFloodComponent} from './natural-disasters/drought-and-flood/fourth-drought-flood/fourth-drought-flood.component';


const routes: Routes = [
    {path: '', redirectTo: 'drought-and-flood-frist', pathMatch: 'full'},
    /*旱涝*/
    {path: 'drought-and-flood-first', component: FirstDroughtFloodComponent, data: {title: '汛旱一级', keep: false}},
    {path: 'drought-and-flood-second', component: SecondDroughtFloodComponent, data: {title: '汛旱二级', keep: false}},
    {path: 'drought-and-flood-third', component: ThirdDroughtFloodComponent, data: {title: '汛旱三级', keep: false}},
    {path: 'drought-and-flood-fourth', component: FourthDroughtFloodComponent, data: {title: '汛旱四级', keep: false}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LocalEmergencyRoutingModule {
}
