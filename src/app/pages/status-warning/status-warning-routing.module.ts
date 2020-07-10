import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DroughtAndFloodWarningComponent} from './natural-disaster-warning/drought-and-flood-warning/drought-and-flood-warning.component';
import {EarthquakeWarningComponent} from './natural-disaster-warning/earthquake-warning/earthquake-warning.component';
import {GeologicalWarningComponent} from './natural-disaster-warning/geological-warning/geological-warning.component';
import {MeteorologicalWarningComponent} from './natural-disaster-warning/meteorological-warning/meteorological-warning.component';
import {NaturalReliefWarningComponent} from './natural-disaster-warning/natural-relief-warning/natural-relief-warning.component';
import {TyphoonWarningComponent} from './natural-disaster-warning/typhoon-warning/typhoon-warning.component';


const routes: Routes = [
    {path: '', redirectTo: 'natural-drought-and-flood-level', pathMatch: 'full'},
    {path: 'natural-drought-and-flood-level', component: DroughtAndFloodWarningComponent, data: {title: '汛旱灾害判别', keep: false}},
    {path: 'natural-earthquake-level', component: EarthquakeWarningComponent, data: {title: '地震灾害判别', keep: false}},
    {path: 'natural-geological-level', component: GeologicalWarningComponent, data: {title: '地质灾害判别', keep: false}},
    {path: 'natural-meteorological-level', component: MeteorologicalWarningComponent, data: {title: '气象灾害判别', keep: false}},
    {path: 'natural-relief-level', component: NaturalReliefWarningComponent, data: {title: '自然灾害救助判别', keep: false}},
    {path: 'natural-typhoon-level', component: TyphoonWarningComponent, data: {title: '台风灾害判别', keep: false}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StatusWarningRoutingModule {
}
