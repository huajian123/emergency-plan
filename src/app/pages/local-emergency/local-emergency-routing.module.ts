import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstDroughtFloodComponent} from './natural-disasters/drought-and-flood/first-drought-flood/first-drought-flood.component';
import {SecondDroughtFloodComponent} from './natural-disasters/drought-and-flood/second-drought-flood/second-drought-flood.component';
import {ThirdDroughtFloodComponent} from './natural-disasters/drought-and-flood/third-drought-flood/third-drought-flood.component';
import {FourthDroughtFloodComponent} from './natural-disasters/drought-and-flood/fourth-drought-flood/fourth-drought-flood.component';
import {FirstHazardousChemicalsComponent} from './accident-disasters/hazardous-chemicals/first-hazardous-chemicals/first-hazardous-chemicals.component';
import {SecondHazardousChemicalsComponent} from './accident-disasters/hazardous-chemicals/second-hazardous-chemicals/second-hazardous-chemicals.component';
import {ThirdHazardousChemicalsComponent} from './accident-disasters/hazardous-chemicals/third-hazardous-chemicals/third-hazardous-chemicals.component';
import {FourthHazardousChemicalsComponent} from './accident-disasters/hazardous-chemicals/fourth-hazardous-chemicals/fourth-hazardous-chemicals.component';
import {FirstFoodSafetyComponent} from './public-health/food-safety/first-food-safety/first-food-safety.component';
import {SecondFoodSafetyComponent} from './public-health/food-safety/second-food-safety/second-food-safety.component';
import {ThirdFoodSafetyComponent} from './public-health/food-safety/third-food-safety/third-food-safety.component';
import {FourthFoodSafetyComponent} from './public-health/food-safety/fourth-food-safety/fourth-food-safety.component';
import {FirstEarthquakeDisasterComponent} from './natural-disasters/earthquake-disasters/first-earthquake-disaster/first-earthquake-disaster.component';
import {SecondEarthquakeDisasterComponent} from './natural-disasters/earthquake-disasters/second-earthquake-disaster/second-earthquake-disaster.component';
import {ThirdEarthquakeDisasterComponent} from './natural-disasters/earthquake-disasters/third-earthquake-disaster/third-earthquake-disaster.component';
import {FourthEarthquakeDisasterComponent} from './natural-disasters/earthquake-disasters/fourth-earthquake-disaster/fourth-earthquake-disaster.component';
import {TotalBudgetComponent} from '../total-plan/total-budget/total-budget.component';
import {FirstGeologicalDisasterComponent} from './natural-disasters/geological-disaster/first-geological-disaster/first-geological-disaster.component';
import {SecondGeologicalDisasterComponent} from './natural-disasters/geological-disaster/second-geological-disaster/second-geological-disaster.component';
import {ThirdGeologicalDisasterComponent} from './natural-disasters/geological-disaster/third-geological-disaster/third-geological-disaster.component';
import {FourthGeologicalDisasterComponent} from './natural-disasters/geological-disaster/fourth-geological-disaster/fourth-geological-disaster.component';
import {FirstMeteorologicalDisasterComponent} from './natural-disasters/meteorological-disaster/first-meteorological-disaster/first-meteorological-disaster.component';
import {ThirdMeteorologicalDisasterComponent} from './natural-disasters/meteorological-disaster/third-meteorological-disaster/third-meteorological-disaster.component';
import {SecondMeteorologicalDisasterComponent} from './natural-disasters/meteorological-disaster/second-meteorological-disaster/second-meteorological-disaster.component';
import {FourthMeteorologicalDisasterComponent} from './natural-disasters/meteorological-disaster/fourth-meteorological-disaster/fourth-meteorological-disaster.component';
import {FirstDisasterReliefComponent} from './natural-disasters/natural-disaster-relief/first-disaster-relief/first-disaster-relief.component';
import {SecondDisasterReliefComponent} from './natural-disasters/natural-disaster-relief/second-disaster-relief/second-disaster-relief.component';
import {ThirdDisasterReliefComponent} from './natural-disasters/natural-disaster-relief/third-disaster-relief/third-disaster-relief.component';
import {FourthDisasterReliefComponent} from './natural-disasters/natural-disaster-relief/fourth-disaster-relief/fourth-disaster-relief.component';
import {FirstTyphoonDisasterComponent} from './natural-disasters/typhoon-disaster/first-typhoon-disaster/first-typhoon-disaster.component';
import {SecondTyphoonDisasterComponent} from './natural-disasters/typhoon-disaster/second-typhoon-disaster/second-typhoon-disaster.component';
import {ThirdTyphoonDisasterComponent} from './natural-disasters/typhoon-disaster/third-typhoon-disaster/third-typhoon-disaster.component';
import {FourthTyphoonDisasterComponent} from './natural-disasters/typhoon-disaster/fourth-typhoon-disaster/fourth-typhoon-disaster.component';
import {FirstAlgaeOutbreakComponent} from './accident-disasters/algae-outbreak/first-algae-outbreak/first-algae-outbreak.component';
import {SecondAlgaeOutbreakComponent} from './accident-disasters/algae-outbreak/second-algae-outbreak/second-algae-outbreak.component';
import {ThirdAlgaeOutbreakComponent} from './accident-disasters/algae-outbreak/third-algae-outbreak/third-algae-outbreak.component';
import {FourthAlgaeOutbreakComponent} from './accident-disasters/algae-outbreak/fourth-algae-outbreak/fourth-algae-outbreak.component';
import {FirstBlackoutComponent} from './accident-disasters/blackout/first-blackout/first-blackout.component';
import {SecondBlackoutComponent} from './accident-disasters/blackout/second-blackout/second-blackout.component';
import {ThirdBlackoutComponent} from './accident-disasters/blackout/third-blackout/third-blackout.component';
import {FourthBlackoutComponent} from './accident-disasters/blackout/fourth-blackout/fourth-blackout.component';
import {FirstAnimalEpidemicComponent} from './public-health/animal-epidemic/first-animal-epidemic/first-animal-epidemic.component';
import {SecondAnimalEpidemicComponent} from './public-health/animal-epidemic/second-animal-epidemic/second-animal-epidemic.component';
import {ThirdAnimalEpidemicComponent} from './public-health/animal-epidemic/third-animal-epidemic/third-animal-epidemic.component';
import {FourthAnimalEpidemicComponent} from './public-health/animal-epidemic/fourth-animal-epidemic/fourth-animal-epidemic.component';
import {FirstInfluenzaComponent} from './public-health/influenza/first-influenza/first-influenza.component';
import {SecondInfluenzaComponent} from './public-health/influenza/second-influenza/second-influenza.component';
import {ThirdInfluenzaComponent} from './public-health/influenza/third-influenza/third-influenza.component';
import {FourthInfluenzaComponent} from './public-health/influenza/fourth-influenza/fourth-influenza.component';
import {FirstPlagueControlComponent} from './public-health/plague-control/first-plague-control/first-plague-control.component';
import {SecondPlagueControlComponent} from './public-health/plague-control/second-plague-control/second-plague-control.component';
import {ThirdPlagueControlComponent} from './public-health/plague-control/third-plague-control/third-plague-control.component';
import {FourthPlagueControlComponent} from './public-health/plague-control/fourth-plague-control/fourth-plague-control.component';
import {FirstMedicalAidComponent} from './public-health/medical-aid/first-medical-aid/first-medical-aid.component';
import {SecondMedicalAidComponent} from './public-health/medical-aid/second-medical-aid/second-medical-aid.component';
import {ThirdMedicalAidComponent} from './public-health/medical-aid/third-medical-aid/third-medical-aid.component';
import {FourthMedicalAidComponent} from './public-health/medical-aid/fourth-medical-aid/fourth-medical-aid.component';
import {FirstSafetyMedicalComponent} from './public-health/safety-medical-devices/first-safety-medical/first-safety-medical.component';
import {SecondSafetyMedicalComponent} from './public-health/safety-medical-devices/second-safety-medical/second-safety-medical.component';
import {ThirdSafetyMedicalComponent} from './public-health/safety-medical-devices/third-safety-medical/third-safety-medical.component';
import {FourthSafetyMedicalComponent} from './public-health/safety-medical-devices/fourth-safety-medical/fourth-safety-medical.component';
import {FirstPublicHealthComponent} from './public-health/public-health-event/first-public-health/first-public-health.component';
import {SecondPublicHealthComponent} from './public-health/public-health-event/second-public-health/second-public-health.component';
import {ThirdPublicHealthComponent} from './public-health/public-health-event/third-public-health/third-public-health.component';
import {FourthPublicHealthComponent} from './public-health/public-health-event/fourth-public-health/fourth-public-health.component';
import {FirstTerroristAttacksComponent} from './social-security/terrorist-attacks/first-terrorist-attacks/first-terrorist-attacks.component';
import {SecondTerroristAttacksComponent} from './social-security/terrorist-attacks/second-terrorist-attacks/second-terrorist-attacks.component';
import {ThirdTerroristAttacksComponent} from './social-security/terrorist-attacks/third-terrorist-attacks/third-terrorist-attacks.component';
import {FourthTerroristAttacksComponent} from './social-security/terrorist-attacks/fourth-terrorist-attacks/fourth-terrorist-attacks.component';
import {FirstReliefSuppliesComponent} from './social-security/relief-supplies/first-relief-supplies/first-relief-supplies.component';
import {SecondReliefSuppliesComponent} from './social-security/relief-supplies/second-relief-supplies/second-relief-supplies.component';
import {ThirdReliefSuppliesComponent} from './social-security/relief-supplies/third-relief-supplies/third-relief-supplies.component';
import {FourthReliefSuppliesComponent} from './social-security/relief-supplies/fourth-relief-supplies/fourth-relief-supplies.component';
import {FirstPriceChangesComponent} from './social-security/price-changes/first-price-changes/first-price-changes.component';
import {SecondPriceChangesComponent} from './social-security/price-changes/second-price-changes/second-price-changes.component';
import {FourthPriceChangesComponent} from './social-security/price-changes/fourth-price-changes/fourth-price-changes.component';
import {ThirdPriceChangesComponent} from './social-security/price-changes/third-price-changes/third-price-changes.component';
import {FirstGrainEmergencyComponent} from './social-security/grain-emergency/first-grain-emergency/first-grain-emergency.component';
import {SecondGrainEmergencyComponent} from './social-security/grain-emergency/second-grain-emergency/second-grain-emergency.component';
import {ThirdGrainEmergencyComponent} from './social-security/grain-emergency/third-grain-emergency/third-grain-emergency.component';
import {FourthGrainEmergencyComponent} from './social-security/grain-emergency/fourth-grain-emergency/fourth-grain-emergency.component';
import {FirstNetworkInformationComponent} from './social-security/network-information-security/first-network-information/first-network-information.component';
import {SecondNetworkInformationComponent} from './social-security/network-information-security/second-network-information/second-network-information.component';
import {ThirdNetworkInformationComponent} from './social-security/network-information-security/third-network-information/third-network-information.component';
import {FourthNetworkInformationComponent} from './social-security/network-information-security/fourth-network-information/fourth-network-information.component';
import {FirstForeignAffairsComponent} from './social-security/foreign-affairs/first-foreign-affairs/first-foreign-affairs.component';
import {SecondForeignAffairsComponent} from './social-security/foreign-affairs/second-foreign-affairs/second-foreign-affairs.component';
import {ThirdForeignAffairsComponent} from './social-security/foreign-affairs/third-foreign-affairs/third-foreign-affairs.component';
import {FourthForeignAffairsComponent} from './social-security/foreign-affairs/fourth-foreign-affairs/fourth-foreign-affairs.component';
import {FirstFinancialAccidentComponent} from './social-security/financial-accident/first-financial-accident/first-financial-accident.component';
import {SecondFinancialAccidentComponent} from './social-security/financial-accident/second-financial-accident/second-financial-accident.component';
import {ThirdFinancialAccidentComponent} from './social-security/financial-accident/third-financial-accident/third-financial-accident.component';
import {FourthFinancialAccidentComponent} from './social-security/financial-accident/fourth-financial-accident/fourth-financial-accident.component';
import {FirstGovernmentDebtComponent} from './social-security/government-debt/first-government-debt/first-government-debt.component';
import {SecondGovernmentDebtComponent} from './social-security/government-debt/second-government-debt/second-government-debt.component';
import {ThirdGovernmentDebtComponent} from './social-security/government-debt/third-government-debt/third-government-debt.component';
import {FourthGovernmentDebtComponent} from './social-security/government-debt/fourth-government-debt/fourth-government-debt.component';
import {FirstCommissaryEmergencyComponent} from './social-security/commissary-emergency/first-commissary-emergency/first-commissary-emergency.component';
import {SecondCommissaryEmergencyComponent} from './social-security/commissary-emergency/second-commissary-emergency/second-commissary-emergency.component';
import {ThirdCommissaryEmergencyComponent} from './social-security/commissary-emergency/third-commissary-emergency/third-commissary-emergency.component';
import {FourthCommissaryEmergencyComponent} from './social-security/commissary-emergency/fourth-commissary-emergency/fourth-commissary-emergency.component';


const routes: Routes = [
    {path: '', redirectTo: 'total-plan', pathMatch: 'full'},
    /*总预案*/
    {path: 'total-plan', component: TotalBudgetComponent, data: {title: '总预案', keep: true}},
    /*旱涝*/
    {path: 'drought-and-flood-first', component: FirstDroughtFloodComponent, data: {title: '汛旱一级', keep: true}},
    {path: 'drought-and-flood-second', component: SecondDroughtFloodComponent, data: {title: '汛旱二级', keep: true}},
    {path: 'drought-and-flood-third', component: ThirdDroughtFloodComponent, data: {title: '汛旱三级', keep: true}},
    {path: 'drought-and-flood-fourth', component: FourthDroughtFloodComponent, data: {title: '汛旱四级', keep: true}},
    /*地质*/
    {path: 'geological-disaster-first', component: FirstGeologicalDisasterComponent, data: {title: '地质一级', keep: true}},
    {path: 'geological-disaster-second', component: SecondGeologicalDisasterComponent, data: {title: '地质二级', keep: true}},
    {path: 'geological-disaster-third', component: ThirdGeologicalDisasterComponent, data: {title: '地质三级', keep: true}},
    {path: 'geological-disaster-fourth', component: FourthGeologicalDisasterComponent, data: {title: '地质四级', keep: true}},
    /*地震*/
    {path: 'earthquake-disaster-first', component: FirstEarthquakeDisasterComponent, data: {title: '地震一级', keep: false}},
    {path: 'earthquake-disaster-second', component: SecondEarthquakeDisasterComponent, data: {title: '地震二级', keep: false}},
    {path: 'earthquake-disaster-third', component: ThirdEarthquakeDisasterComponent, data: {title: '地震三级', keep: false}},
    {path: 'earthquake-disaster-fourth', component: FourthEarthquakeDisasterComponent, data: {title: '地震四级', keep: false}},
    /*气象*/
    {path: 'meteorological-disaster-first', component: FirstMeteorologicalDisasterComponent, data: {title: '气象灾害一级', keep: false}},
    {path: 'meteorological-disaster-second', component: SecondMeteorologicalDisasterComponent, data: {title: '气象灾害二级', keep: false}},
    {path: 'meteorological-disaster-third', component: ThirdMeteorologicalDisasterComponent, data: {title: '气象灾害三级', keep: false}},
    {path: 'meteorological-disaster-fourth', component: FourthMeteorologicalDisasterComponent, data: {title: '气象灾害四级', keep: false}},
    /*救助*/
    {path: 'natural-disaster-relief-first', component: FirstDisasterReliefComponent, data: {title: '灾害救助一级', keep: false}},
    {path: 'natural-disaster-relief-second', component: SecondDisasterReliefComponent, data: {title: '灾害救助二级', keep: false}},
    {path: 'natural-disaster-relief-third', component: ThirdDisasterReliefComponent, data: {title: '灾害救助三级', keep: false}},
    {path: 'natural-disaster-relief-fourth', component: FourthDisasterReliefComponent, data: {title: '灾害救助四级', keep: false}},
    /*台风*/
    {path: 'typhoon-disaster-first', component: FirstTyphoonDisasterComponent, data: {title: '台风一级', keep: false}},
    {path: 'typhoon-disaster-second', component: SecondTyphoonDisasterComponent, data: {title: '台风二级', keep: false}},
    {path: 'typhoon-disaster-third', component: ThirdTyphoonDisasterComponent, data: {title: '台风三级', keep: false}},
    {path: 'typhoon-disaster-fourth', component: FourthTyphoonDisasterComponent, data: {title: '台风四级', keep: false}},
    /*食品安全*/
    {path: 'food-safety-first', component: FirstFoodSafetyComponent, data: {title: '食品安全一级', keep: false}},
    {path: 'food-safety-second', component: SecondFoodSafetyComponent, data: {title: '食品安全二级', keep: false}},
    {path: 'food-safety-third', component: ThirdFoodSafetyComponent, data: {title: '食品安全三级', keep: false}},
    {path: 'food-safety-fourth', component: FourthFoodSafetyComponent, data: {title: '食品安全四级', keep: false}},
    /*动物疫情*/
    {path: 'animal-epidemic-first', component: FirstAnimalEpidemicComponent, data: {title: '动物疫情一级', keep: false}},
    {path: 'animal-epidemic-second', component: SecondAnimalEpidemicComponent, data: {title: '动物疫情二级', keep: false}},
    {path: 'animal-epidemic-third', component: ThirdAnimalEpidemicComponent, data: {title: '动物疫情三级', keep: false}},
    {path: 'animal-epidemic-fourth', component: FourthAnimalEpidemicComponent, data: {title: '动物疫情四级', keep: false}},
    /*流感*/
    {path: 'influenza-first', component: FirstInfluenzaComponent, data: {title: '流感一级', keep: false}},
    {path: 'influenza-second', component: SecondInfluenzaComponent, data: {title: '流感二级', keep: false}},
    {path: 'influenza-third', component: ThirdInfluenzaComponent, data: {title: '流感三级', keep: false}},
    {path: 'influenza-fourth', component: FourthInfluenzaComponent, data: {title: '流感四级', keep: false}},
    /*鼠疫*/
    {path: 'plague-control-first', component: FirstPlagueControlComponent, data: {title: '鼠疫一级', keep: false}},
    {path: 'plague-control-second', component: SecondPlagueControlComponent, data: {title: '鼠疫二级', keep: false}},
    {path: 'plague-control-third', component: ThirdPlagueControlComponent, data: {title: '鼠疫三级', keep: false}},
    {path: 'plague-control-fourth', component: FourthPlagueControlComponent, data: {title: '鼠疫四级', keep: false}},
    /*医疗救急*/
    {path: 'medical-aid-first', component: FirstMedicalAidComponent, data: {title: '医疗救急一级', keep: false}},
    {path: 'medical-aid-second', component: SecondMedicalAidComponent, data: {title: '医疗救急二级', keep: false}},
    {path: 'medical-aid-third', component: ThirdMedicalAidComponent, data: {title: '医疗救急三级', keep: false}},
    {path: 'medical-aid-fourth', component: FourthMedicalAidComponent, data: {title: '医疗救急全四级', keep: false}},
    /*公共卫生*/
    {path: 'public-health-event-first', component: FirstPublicHealthComponent, data: {title: '医疗救急一级', keep: false}},
    {path: 'public-health-event-second', component: SecondPublicHealthComponent, data: {title: '医疗救急二级', keep: false}},
    {path: 'public-health-event-third', component: ThirdPublicHealthComponent, data: {title: '医疗救急三级', keep: false}},
    {path: 'public-health-event-fourth', component: FourthPublicHealthComponent, data: {title: '医疗救急全四级', keep: false}},
    /*医疗器械*/
    {path: 'safety-medical-devices-first', component: FirstSafetyMedicalComponent, data: {title: '医疗器械一级', keep: false}},
    {path: 'safety-medical-devices-second', component: SecondSafetyMedicalComponent, data: {title: '医疗器械二级', keep: false}},
    {path: 'safety-medical-devices-third', component: ThirdSafetyMedicalComponent, data: {title: '医疗器械三级', keep: false}},
    {path: 'safety-medical-devices-fourth', component: FourthSafetyMedicalComponent, data: {title: '医疗器械四级', keep: false}},
    /*危化品*/
    {path: 'hazardous-chemicals-first', component: FirstHazardousChemicalsComponent, data: {title: '危化品一级', keep: false}},
    {path: 'hazardous-chemicals-second', component: SecondHazardousChemicalsComponent, data: {title: '危化品二级', keep: false}},
    {path: 'hazardous-chemicals-third', component: ThirdHazardousChemicalsComponent, data: {title: '危化品三级', keep: false}},
    {path: 'hazardous-chemicals-fourth', component: FourthHazardousChemicalsComponent, data: {title: '危化品四级', keep: false}},
    /*蓝藻爆发*/
    {path: 'algae-outbreak-first', component: FirstAlgaeOutbreakComponent, data: {title: '蓝藻一级', keep: false}},
    {path: 'algae-outbreak-second', component: SecondAlgaeOutbreakComponent, data: {title: '蓝藻二级', keep: false}},
    {path: 'algae-outbreak-third', component: ThirdAlgaeOutbreakComponent, data: {title: '蓝藻三级', keep: false}},
    {path: 'algae-outbreak-fourth', component: FourthAlgaeOutbreakComponent, data: {title: '蓝藻四级', keep: false}},
    /*停电*/
    {path: 'blackout-first', component: FirstBlackoutComponent, data: {title: '停电一级', keep: false}},
    {path: 'blackout-second', component: SecondBlackoutComponent, data: {title: '停电二级', keep: false}},
    {path: 'blackout-third', component: ThirdBlackoutComponent, data: {title: '停电三级', keep: false}},
    {path: 'blackout-fourth', component: FourthBlackoutComponent, data: {title: '停电四级', keep: false}},
    /*恐怖袭击*/
    {path: 'terrorist-attacks-first', component: FirstTerroristAttacksComponent, data: {title: '恐怖袭击一级', keep: false}},
    {path: 'terrorist-attacks-second', component: SecondTerroristAttacksComponent, data: {title: '恐怖袭击二级', keep: false}},
    {path: 'terrorist-attacks-third', component: ThirdTerroristAttacksComponent, data: {title: '恐怖袭击三级', keep: false}},
    {path: 'terrorist-attacks-fourth', component: FourthTerroristAttacksComponent, data: {title: '恐怖袭击四级', keep: false}},
    /*群体性事件*/
    {path: 'mass-incident-first', component: FirstReliefSuppliesComponent, data: {title: '群体性事件一级', keep: false}},
    {path: 'mass-incident-second', component: SecondReliefSuppliesComponent, data: {title: '群体性事件二级', keep: false}},
    {path: 'mass-incident-third', component: ThirdReliefSuppliesComponent, data: {title: '群体性事件三级', keep: false}},
    {path: 'mass-incident-fourth', component: FourthReliefSuppliesComponent, data: {title: '群体性事件四级', keep: false}},
    /*价格异动*/
    {path: 'price-changes-first', component: FirstPriceChangesComponent, data: {title: '价格异动一级', keep: false}},
    {path: 'price-changes-second', component: SecondPriceChangesComponent, data: {title: '价格异动二级', keep: false}},
    {path: 'price-changes-third', component: ThirdPriceChangesComponent, data: {title: '价格异动三级', keep: false}},
    {path: 'price-changes-fourth', component: FourthPriceChangesComponent, data: {title: '价格异动四级', keep: false}},
    /*粮食应急*/
    {path: 'grain-emergency-first', component: FirstGrainEmergencyComponent, data: {title: '粮食应急一级', keep: false}},
    {path: 'grain-emergency-second', component: SecondGrainEmergencyComponent, data: {title: '粮食应急二级', keep: false}},
    {path: 'grain-emergency-third', component: ThirdGrainEmergencyComponent, data: {title: '粮食应急三级', keep: false}},
    {path: 'grain-emergency-fourth', component: FourthGrainEmergencyComponent, data: {title: '粮食应急四级', keep: false}},
    /*网络与信息安全*/
    {path: 'network-information-security-first', component: FirstNetworkInformationComponent, data: {title: '网络与信息一级', keep: false}},
    {path: 'network-information-security-second', component: SecondNetworkInformationComponent, data: {title: '网络与信息二级', keep: false}},
    {path: 'network-information-security-third', component: ThirdNetworkInformationComponent, data: {title: '网络与信息三级', keep: false}},
    {path: 'network-information-security-fourth', component: FourthNetworkInformationComponent, data: {title: '网络与信息四级', keep: false}},
    /*涉外事件*/
    {path: 'foreign-affairs-first', component: FirstForeignAffairsComponent, data: {title: '涉外突发一级', keep: false}},
    {path: 'foreign-affairs-second', component: SecondForeignAffairsComponent, data: {title: '涉外突发二级', keep: false}},
    {path: 'foreign-affairs-third', component: ThirdForeignAffairsComponent, data: {title: '涉外突发三级', keep: false}},
    {path: 'foreign-affairs-fourth', component: FourthForeignAffairsComponent, data: {title: '涉外突发四级', keep: false}},
    /*金融突发*/
    {path: 'financial-accident-first', component: FirstFinancialAccidentComponent, data: {title: '金融突发一级', keep: false}},
    {path: 'financial-accident-second', component: SecondFinancialAccidentComponent, data: {title: '金融突发二级', keep: false}},
    {path: 'financial-accident-third', component: ThirdFinancialAccidentComponent, data: {title: '金融突发三级', keep: false}},
    {path: 'financial-accident-fourth', component: FourthFinancialAccidentComponent, data: {title: '金融突发四级', keep: false}},
    /*政府性债务*/
    {path: 'government-debt-first', component: FirstGovernmentDebtComponent, data: {title: '政府债务一级', keep: false}},
    {path: 'government-debt-second', component: SecondGovernmentDebtComponent, data: {title: '政府债务二级', keep: false}},
    {path: 'government-debt-third', component: ThirdGovernmentDebtComponent, data: {title: '政府债务三级', keep: false}},
    {path: 'government-debt-fourth', component: FourthGovernmentDebtComponent, data: {title: '政府债务四级', keep: false}},
    /*军粮应急*/
    {path: 'commissary-emergency-first', component: FirstCommissaryEmergencyComponent, data: {title: '军粮应急一级', keep: false}},
    {path: 'commissary-emergency-second', component: SecondCommissaryEmergencyComponent, data: {title: '军粮应急二级', keep: false}},
    {path: 'commissary-emergency-third', component: ThirdCommissaryEmergencyComponent, data: {title: '军粮应急三级', keep: false}},
    {path: 'commissary-emergency-fourth', component: FourthCommissaryEmergencyComponent, data: {title: '军粮应急四级', keep: false}},
    /*救灾物资*/
    {path: 'relief-supplies-first', component: FirstReliefSuppliesComponent, data: {title: '救灾物资一级', keep: false}},
    {path: 'relief-supplies-second', component: SecondReliefSuppliesComponent, data: {title: '救灾物资二级', keep: false}},
    {path: 'relief-supplies-third', component: ThirdReliefSuppliesComponent, data: {title: '救灾物资三级', keep: false}},
    {path: 'relief-supplies-fourth', component: FourthReliefSuppliesComponent, data: {title: '救灾物资四级', keep: false}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LocalEmergencyRoutingModule {
}
