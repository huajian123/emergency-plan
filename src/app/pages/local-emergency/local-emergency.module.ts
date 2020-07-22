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
import {FirstAlgaeOutbreakComponent} from './accident-disasters/algae-outbreak/first-algae-outbreak/first-algae-outbreak.component';
import {SecondAlgaeOutbreakComponent} from './accident-disasters/algae-outbreak/second-algae-outbreak/second-algae-outbreak.component';
import {ThirdAlgaeOutbreakComponent} from './accident-disasters/algae-outbreak/third-algae-outbreak/third-algae-outbreak.component';
import {FourthAlgaeOutbreakComponent} from './accident-disasters/algae-outbreak/fourth-algae-outbreak/fourth-algae-outbreak.component';
import {FirstBlackoutComponent} from './accident-disasters/blackout/first-blackout/first-blackout.component';
import {SecondBlackoutComponent} from './accident-disasters/blackout/second-blackout/second-blackout.component';
import {ThirdBlackoutComponent} from './accident-disasters/blackout/third-blackout/third-blackout.component';
import {FourthBlackoutComponent} from './accident-disasters/blackout/fourth-blackout/fourth-blackout.component';
import {FirstGeologicalDisasterComponent} from './natural-disasters/geological-disaster/first-geological-disaster/first-geological-disaster.component';
import {SecondGeologicalDisasterComponent} from './natural-disasters/geological-disaster/second-geological-disaster/second-geological-disaster.component';
import {ThirdGeologicalDisasterComponent} from './natural-disasters/geological-disaster/third-geological-disaster/third-geological-disaster.component';
import {FourthGeologicalDisasterComponent} from './natural-disasters/geological-disaster/fourth-geological-disaster/fourth-geological-disaster.component';
import {FirstMeteorologicalDisasterComponent} from './natural-disasters/meteorological-disaster/first-meteorological-disaster/first-meteorological-disaster.component';
import {SecondMeteorologicalDisasterComponent} from './natural-disasters/meteorological-disaster/second-meteorological-disaster/second-meteorological-disaster.component';
import {ThirdMeteorologicalDisasterComponent} from './natural-disasters/meteorological-disaster/third-meteorological-disaster/third-meteorological-disaster.component';
import {FourthMeteorologicalDisasterComponent} from './natural-disasters/meteorological-disaster/fourth-meteorological-disaster/fourth-meteorological-disaster.component';
import {FirstDisasterReliefComponent} from './natural-disasters/natural-disaster-relief/first-disaster-relief/first-disaster-relief.component';
import {SecondDisasterReliefComponent} from './natural-disasters/natural-disaster-relief/second-disaster-relief/second-disaster-relief.component';
import {ThirdDisasterReliefComponent} from './natural-disasters/natural-disaster-relief/third-disaster-relief/third-disaster-relief.component';
import {FourthDisasterReliefComponent} from './natural-disasters/natural-disaster-relief/fourth-disaster-relief/fourth-disaster-relief.component';
import {FirstTyphoonDisasterComponent} from './natural-disasters/typhoon-disaster/first-typhoon-disaster/first-typhoon-disaster.component';
import {SecondTyphoonDisasterComponent} from './natural-disasters/typhoon-disaster/second-typhoon-disaster/second-typhoon-disaster.component';
import {ThirdTyphoonDisasterComponent} from './natural-disasters/typhoon-disaster/third-typhoon-disaster/third-typhoon-disaster.component';
import {FourthTyphoonDisasterComponent} from './natural-disasters/typhoon-disaster/fourth-typhoon-disaster/fourth-typhoon-disaster.component';
import {FirstAnimalEpidemicComponent} from './public-health/animal-epidemic/first-animal-epidemic/first-animal-epidemic.component';
import {SecondAnimalEpidemicComponent} from './public-health/animal-epidemic/second-animal-epidemic/second-animal-epidemic.component';
import {ThirdAnimalEpidemicComponent} from './public-health/animal-epidemic/third-animal-epidemic/third-animal-epidemic.component';
import {FourthAnimalEpidemicComponent} from './public-health/animal-epidemic/fourth-animal-epidemic/fourth-animal-epidemic.component';
import {FirstInfluenzaComponent} from './public-health/influenza/first-influenza/first-influenza.component';
import {SecondInfluenzaComponent} from './public-health/influenza/second-influenza/second-influenza.component';
import {ThirdInfluenzaComponent} from './public-health/influenza/third-influenza/third-influenza.component';
import {FourthInfluenzaComponent} from './public-health/influenza/fourth-influenza/fourth-influenza.component';
import {FirstMedicalAidComponent} from './public-health/medical-aid/first-medical-aid/first-medical-aid.component';
import {SecondMedicalAidComponent} from './public-health/medical-aid/second-medical-aid/second-medical-aid.component';
import {ThirdMedicalAidComponent} from './public-health/medical-aid/third-medical-aid/third-medical-aid.component';
import {FourthMedicalAidComponent} from './public-health/medical-aid/fourth-medical-aid/fourth-medical-aid.component';
import {FirstPlagueControlComponent} from './public-health/plague-control/first-plague-control/first-plague-control.component';
import {SecondPlagueControlComponent} from './public-health/plague-control/second-plague-control/second-plague-control.component';
import {ThirdPlagueControlComponent} from './public-health/plague-control/third-plague-control/third-plague-control.component';
import {FourthPlagueControlComponent} from './public-health/plague-control/fourth-plague-control/fourth-plague-control.component';
import {FirstPublicHealthComponent} from './public-health/public-health-event/first-public-health/first-public-health.component';
import {SecondPublicHealthComponent} from './public-health/public-health-event/second-public-health/second-public-health.component';
import {ThirdPublicHealthComponent} from './public-health/public-health-event/third-public-health/third-public-health.component';
import {FourthPublicHealthComponent} from './public-health/public-health-event/fourth-public-health/fourth-public-health.component';
import {FirstSafetyMedicalComponent} from './public-health/safety-medical-devices/first-safety-medical/first-safety-medical.component';
import {SecondSafetyMedicalComponent} from './public-health/safety-medical-devices/second-safety-medical/second-safety-medical.component';
import {ThirdSafetyMedicalComponent} from './public-health/safety-medical-devices/third-safety-medical/third-safety-medical.component';
import {FourthSafetyMedicalComponent} from './public-health/safety-medical-devices/fourth-safety-medical/fourth-safety-medical.component';


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
        FirstAlgaeOutbreakComponent,
        SecondAlgaeOutbreakComponent,
        ThirdAlgaeOutbreakComponent,
        FourthAlgaeOutbreakComponent,
        FirstBlackoutComponent,
        SecondBlackoutComponent,
        ThirdBlackoutComponent,
        FourthBlackoutComponent,
        FirstGeologicalDisasterComponent,
        SecondGeologicalDisasterComponent,
        ThirdGeologicalDisasterComponent,
        FourthGeologicalDisasterComponent,
        FirstMeteorologicalDisasterComponent,
        SecondMeteorologicalDisasterComponent,
        ThirdMeteorologicalDisasterComponent,
        FourthMeteorologicalDisasterComponent,
        FirstDisasterReliefComponent,
        SecondDisasterReliefComponent,
        ThirdDisasterReliefComponent,
        FourthDisasterReliefComponent,
        FirstTyphoonDisasterComponent,
        SecondTyphoonDisasterComponent,
        ThirdTyphoonDisasterComponent,
        FourthTyphoonDisasterComponent,
        FirstAnimalEpidemicComponent,
        SecondAnimalEpidemicComponent,
        ThirdAnimalEpidemicComponent,
        FourthAnimalEpidemicComponent,
        FirstInfluenzaComponent,
        SecondInfluenzaComponent,
        ThirdInfluenzaComponent,
        FourthInfluenzaComponent,
        FirstMedicalAidComponent,
        SecondMedicalAidComponent,
        ThirdMedicalAidComponent,
        FourthMedicalAidComponent,
        FirstPlagueControlComponent,
        SecondPlagueControlComponent,
        ThirdPlagueControlComponent,
        FourthPlagueControlComponent,
        FirstPublicHealthComponent,
        SecondPublicHealthComponent,
        ThirdPublicHealthComponent,
        FourthPublicHealthComponent,
        FirstSafetyMedicalComponent,
        SecondSafetyMedicalComponent,
        ThirdSafetyMedicalComponent,
        FourthSafetyMedicalComponent,
    ],
    imports: [
        ShareModule,
        CommonModule,
        LocalEmergencyRoutingModule
    ]
})
export class LocalEmergencyModule {
}
