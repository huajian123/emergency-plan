import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicHealthRoutingModule} from './public-health-routing.module';
import {SecondAnimalEpidemicComponent} from './animal-epidemic/second/second-health-disaster.component';
import {SecondFoodSafetyComponent} from './food-safety/second/second-health-disaster.component';
import {SecondInfluenzaComponent} from './influenza/second/second-health-disaster.component';
import {SecondMedicalAidComponent} from './medical-aid/second/second-health-disaster.component';
import {SecondPlagueControlComponent} from './plague-control/second/second-health-disaster.component';
import {SecondPublicHealthComponent} from './public-health-event/second/second-health-disaster.component';
import {SecondSafetyMmedicalDevicesComponent} from './safety-mmedical-devices/second/second-health-disaster.component';


@NgModule({
    declarations: [
        SecondFoodSafetyComponent,
        SecondAnimalEpidemicComponent,
        SecondInfluenzaComponent,
        SecondMedicalAidComponent,
        SecondPlagueControlComponent,
        SecondPublicHealthComponent,
        SecondSafetyMmedicalDevicesComponent
    ],
    imports: [
        CommonModule,
        PublicHealthRoutingModule
    ]
})
export class PublicHealthModule {
}
