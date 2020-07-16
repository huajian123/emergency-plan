import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicHealthRoutingModule} from './public-health-routing.module';
import {SecondAnimalEpidemicComponent} from './animal-epidemic/second/second-health-disaster.component';
import {SecondFoodSafetyComponent} from './food-safety/second/second-health-disaster.component';
import {SecondInfluenzaComponent} from './influenza/second/second-health-disaster.component';
import {SecondMedicalAidComponent} from './medical-aid/second/second-health-disaster.component';
import {SecondPlagueControlComponent} from './plague-control/second/second-health-disaster.component';
import {SecondPublicHealthComponent} from './public-health-event/second/second-health-disaster.component';
import {ShareModule} from '../../share/share.module';
import {SecondSafetyMedicalDevicesComponent} from './safety-medical-devices/second/second-health-disaster.component';
import {FirstFoodSafetyComponent} from './food-safety/first/first-health-disaster.component';
import {FourthFoodSafetyComponent} from './food-safety/fourth/fourth-health-disaster.component';
import {ThirdFoodSafetyComponent} from './food-safety/third/third-health-disaster.component';


@NgModule({
    declarations: [
        FirstFoodSafetyComponent,
        FourthFoodSafetyComponent,
        ThirdFoodSafetyComponent,
        SecondFoodSafetyComponent,
        SecondAnimalEpidemicComponent,
        SecondInfluenzaComponent,
        SecondMedicalAidComponent,
        SecondPlagueControlComponent,
        SecondPublicHealthComponent,
        SecondSafetyMedicalDevicesComponent
    ],
    imports: [
        CommonModule,
        PublicHealthRoutingModule,
        ShareModule,
    ]
})
export class PublicHealthModule {
}
