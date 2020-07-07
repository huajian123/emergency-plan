import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstFoodSafetyComponent} from './food-safety/first/first-health-disaster.component';
import {SecondFoodSafetyComponent} from './food-safety/second/second-health-disaster.component';
import {ThirdFoodSafetyComponent} from './food-safety/third/third-health-disaster.component';
import {FourthFoodSafetyComponent} from './food-safety/fourth/fourth-health-disaster.component';
import {FirstAnimalEpidemicComponent} from './animal-epidemic/first/first-health-disaster.component';
import {SecondAnimalEpidemicComponent} from './animal-epidemic/second/second-health-disaster.component';
import {ThirdAnimalEpidemicComponent} from './animal-epidemic/third/third-health-disaster.component';
import {FourthAnimalEpidemicComponent} from './animal-epidemic/fourth/fourth-health-disaster.component';
import {FirstInfluenzaComponent} from './influenza/first/first-health-disaster.component';
import {SecondInfluenzaComponent} from './influenza/second/second-health-disaster.component';
import {ThirdInfluenzaComponent} from './influenza/third/third-health-disaster.component';
import {FourthInfluenzaComponent} from './influenza/fourth/fourth-health-disaster.component';
import {FirstPlagueControlComponent} from './plague-control/first/first-health-disaster.component';
import {SecondPlagueControlComponent} from './plague-control/second/second-health-disaster.component';
import {ThirdPlagueControlComponent} from './plague-control/third/third-health-disaster.component';
import {FourthPlagueControlComponent} from './plague-control/fourth/fourth-health-disaster.component';
import {FirstPublicHealthComponent} from './public-health-event/first/first-health-disaster.component';
import {SecondPublicHealthComponent} from './public-health-event/second/second-health-disaster.component';
import {ThirdPublicHealthComponent} from './public-health-event/third/third-health-disaster.component';
import {FourthPublicHealthComponent} from './public-health-event/fourth/fourth-health-disaster.component';
import {FirstMedicalAidComponent} from './medical-aid/first/first-health-disaster.component';
import {SecondMedicalAidComponent} from './medical-aid/second/second-health-disaster.component';
import {ThirdMedicalAidComponent} from './medical-aid/third/third-health-disaster.component';
import {FourthMedicalAidComponent} from './medical-aid/fourth/fourth-health-disaster.component';
import {FirstSafetyMmedicalDevicesComponent} from './safety-mmedical-devices/first/first-health-disaster.component';
import {SecondSafetyMmedicalDevicesComponent} from './safety-mmedical-devices/second/second-health-disaster.component';
import {ThirdSafetyMmedicalDevicesComponent} from './safety-mmedical-devices/third/third-health-disaster.component';
import {FourthSafetyMmedicalDevicesComponent} from './safety-mmedical-devices/fourth/fourth-health-disaster.component';


const routes: Routes = [
    {path: '', redirectTo: 'first', pathMatch: 'full'},
    /*食品安全*/
    {path: 'food-safety-first', component: FirstFoodSafetyComponent, data: {title: '一级灾害', keep: false}},
    {path: 'food-safety-second', component: SecondFoodSafetyComponent, data: {title: '二级灾害', keep: false}},
    {path: 'food-safety-third', component: ThirdFoodSafetyComponent, data: {title: '三级灾害', keep: false}},
    {path: 'food-safety-fourth', component: FourthFoodSafetyComponent, data: {title: '四级灾害', keep: false}},
    /*突发公共卫生*/
    {path: 'public-health-event-first', component: FirstPublicHealthComponent, data: {title: '一级灾害', keep: false}},
    {path: 'public-health-event-second', component: SecondPublicHealthComponent, data: {title: '二级灾害', keep: false}},
    {path: 'public-health-event-third', component: ThirdPublicHealthComponent, data: {title: '三级灾害', keep: false}},
    {path: 'public-health-event-fourth', component: FourthPublicHealthComponent, data: {title: '四级灾害', keep: false}},
    /*公共卫生医疗救急*/
    {path: 'medical-aid-first', component: FirstMedicalAidComponent, data: {title: '一级灾害', keep: false}},
    {path: 'medical-aid-second', component: SecondMedicalAidComponent, data: {title: '二级灾害', keep: false}},
    {path: 'medical-aid-third', component: ThirdMedicalAidComponent, data: {title: '三级灾害', keep: false}},
    {path: 'medical-aid-fourth', component: FourthMedicalAidComponent, data: {title: '四级灾害', keep: false}},
    /*鼠疫控制*/
    {path: 'plague-control-first', component: FirstPlagueControlComponent, data: {title: '一级灾害', keep: false}},
    {path: 'plague-control-second', component: SecondPlagueControlComponent, data: {title: '二级灾害', keep: false}},
    {path: 'plague-control-third', component: ThirdPlagueControlComponent, data: {title: '三级灾害', keep: false}},
    {path: 'plague-control-fourth', component: FourthPlagueControlComponent, data: {title: '四级灾害', keep: false}},
    /*流感*/
    {path: 'influenza-first', component: FirstInfluenzaComponent, data: {title: '一级灾害', keep: false}},
    {path: 'influenza-second', component: SecondInfluenzaComponent, data: {title: '二级灾害', keep: false}},
    {path: 'influenza-third', component: ThirdInfluenzaComponent, data: {title: '三级灾害', keep: false}},
    {path: 'influenza-fourth', component: FourthInfluenzaComponent, data: {title: '四级灾害', keep: false}},
    /*动物疫情*/
    {path: 'animal-epidemic-first', component: FirstAnimalEpidemicComponent, data: {title: '一级灾害', keep: false}},
    {path: 'animal-epidemic-second', component: SecondAnimalEpidemicComponent, data: {title: '二级灾害', keep: false}},
    {path: 'animal-epidemic-third', component: ThirdAnimalEpidemicComponent, data: {title: '三级灾害', keep: false}},
    {path: 'animal-epidemic-fourth', component: FourthAnimalEpidemicComponent, data: {title: '四级灾害', keep: false}},
    /*药品医疗器械*/
    {path: 'safety-mmedical-devices-first', component: FirstSafetyMmedicalDevicesComponent, data: {title: '一级灾害', keep: false}},
    {path: 'safety-mmedical-devices-second', component: SecondSafetyMmedicalDevicesComponent, data: {title: '二级灾害', keep: false}},
    {path: 'safety-mmedical-devices-third', component: ThirdSafetyMmedicalDevicesComponent, data: {title: '三级灾害', keep: false}},
    {path: 'safety-mmedical-devices-fourth', component: FourthSafetyMmedicalDevicesComponent, data: {title: '四级灾害', keep: false}},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicHealthRoutingModule {
}
