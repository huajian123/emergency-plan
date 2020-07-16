import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocalEmergencyRoutingModule} from './local-emergency-routing.module';
import {FirstDroughtFloodComponent} from './natural-disasters/drought-and-flood/first-drought-flood/first-drought-flood.component';
import {SecondDroughtFloodComponent} from './natural-disasters/drought-and-flood/second-drought-flood/second-drought-flood.component';
import {ThirdDroughtFloodComponent} from './natural-disasters/drought-and-flood/third-drought-flood/third-drought-flood.component';
import {FourthDroughtFloodComponent} from './natural-disasters/drought-and-flood/fourth-drought-flood/fourth-drought-flood.component';
import {ShareModule} from '../../share/share.module';

import {SecondEarthquakeDisasterComponent} from './natural-disasters/earthquake-disasters/second-earthquake-disaster/second-earthquake-disaster.component';
import {ThirdEarthquakeDisasterComponent} from './natural-disasters/earthquake-disasters/third-earthquake-disaster/third-earthquake-disaster.component';
import {FourthEarthquakeDisasterComponent} from './natural-disasters/earthquake-disasters/fourth-earthquake-disaster/fourth-earthquake-disaster.component';
import {FirstEarthquakeDisasterComponent} from './natural-disasters/earthquake-disasters/first-earthquake-disaster/first-earthquake-disaster.component';
import {FourthFoodSafetyComponent} from './public-health/food-safety/fourth-food-safety/fourth-food-safety.component';
import {FirstFoodSafetyComponent} from './public-health/food-safety/first-food-safety/first-food-safety.component';
import {SecondFoodSafetyComponent} from './public-health/food-safety/second-food-safety/second-food-safety.component';
import {ThirdFoodSafetyComponent} from './public-health/food-safety/third-food-safety/third-food-safety.component';
import {ThirdHazardousChemicalsComponent} from './accident-disasters/hazardous-chemicals/third-hazardous-chemicals/third-hazardous-chemicals.component';
import {FirstHazardousChemicalsComponent} from './accident-disasters/hazardous-chemicals/first-hazardous-chemicals/first-hazardous-chemicals.component';
import {SecondHazardousChemicalsComponent} from './accident-disasters/hazardous-chemicals/second-hazardous-chemicals/second-hazardous-chemicals.component';
import {FourthHazardousChemicalsComponent} from './accident-disasters/hazardous-chemicals/fourth-hazardous-chemicals/fourth-hazardous-chemicals.component';
import {TotalBudgetComponent} from './total-plan/total-budget/total-budget.component';


@NgModule({
    declarations: [
        FirstDroughtFloodComponent,
        SecondDroughtFloodComponent,
        ThirdDroughtFloodComponent,
        FourthDroughtFloodComponent,
        FirstEarthquakeDisasterComponent,
        SecondEarthquakeDisasterComponent,
        ThirdEarthquakeDisasterComponent,
        FourthEarthquakeDisasterComponent,
        FourthFoodSafetyComponent,
        FirstFoodSafetyComponent,
        SecondFoodSafetyComponent,
        ThirdFoodSafetyComponent,
        ThirdHazardousChemicalsComponent,
        FirstHazardousChemicalsComponent,
        SecondHazardousChemicalsComponent,
        FourthHazardousChemicalsComponent,
        TotalBudgetComponent,
    ],
    imports: [
        ShareModule,
        CommonModule,
        LocalEmergencyRoutingModule
    ]
})
export class LocalEmergencyModule {
}
