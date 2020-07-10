import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DroughtAndFloodWarningComponent} from './natural-disaster-warning/drought-and-flood-warning/drought-and-flood-warning.component';
import {EarthquakeWarningComponent} from './natural-disaster-warning/earthquake-warning/earthquake-warning.component';
import {GeologicalWarningComponent} from './natural-disaster-warning/geological-warning/geological-warning.component';
import {MeteorologicalWarningComponent} from './natural-disaster-warning/meteorological-warning/meteorological-warning.component';
import {TyphoonWarningComponent} from './natural-disaster-warning/typhoon-warning/typhoon-warning.component';
import {NaturalReliefWarningComponent} from './natural-disaster-warning/natural-relief-warning/natural-relief-warning.component';
import {RoadTrafficWarningComponent} from './accident-disaster-warning/road-traffic-warning/road-traffic-warning.component';
import {EnvironmentalWarningComponent} from './accident-disaster-warning/environmental-warning/environmental-warning.component';
import {RadiationAccidentWarningComponent} from './accident-disaster-warning/radiation-accident-warning/radiation-accident-warning.component';
import {AlgaeOutbreakWarningComponent} from './accident-disaster-warning/algae-outbreak-warning/algae-outbreak-warning.component';
import {LakeFloodingWarningComponent} from './accident-disaster-warning/lake-flooding-warning/lake-flooding-warning.component';
import {PollutionWeatherWarningComponent} from './accident-disaster-warning/pollution-weather-warning/pollution-weather-warning.component';
import {PortHazardousChemicalsWarningComponent} from './accident-disaster-warning/port-hazardous-chemicals-warning/port-hazardous-chemicals-warning.component';
import {RailwayAccidentWarningComponent} from './accident-disaster-warning/railway-accident-warning/railway-accident-warning.component';
import {SpecialEquipmentWarningComponent} from './accident-disaster-warning/special-equipment-warning/special-equipment-warning.component';
import {NuclearEventWarningComponent} from './accident-disaster-warning/nuclear-event-warning/nuclear-event-warning.component';
import {BlackoutWarningComponent} from './accident-disaster-warning/blackout-warning/blackout-warning.component';
import {FireAccidentWarningComponent} from './accident-disaster-warning/fire-accident-warning/fire-accident-warning.component';
import {CommunicationWarningComponent} from './accident-disaster-warning/communication-warning/communication-warning.component';
import {HazardousChemicalsWarningComponent} from './accident-disaster-warning/hazardous-chemicals-warning/hazardous-chemicals-warning.component';
import {ProductionSafetyWarningComponent} from './accident-disaster-warning/production-safety-warning/production-safety-warning.component';
import {ForestFireWarningComponent} from './accident-disaster-warning/forest-fire-warning/forest-fire-warning.component';
import {WaterSearchRescueWarningComponent} from './accident-disaster-warning/water-search-rescue-warning/water-search-rescue-warning.component';
import {RailTrafficWarningComponent} from './accident-disaster-warning/rail-traffic-warning/rail-traffic-warning.component';
import {FoodSafetyWarningComponent} from './public-health-warning/food-safety-warning/food-safety-warning.component';
import {PublicHealthWarningComponent} from './public-health-warning/public-health-warning/public-health-warning.component';
import {MedicalAidWarningComponent} from './public-health-warning/medical-aid-warning/medical-aid-warning.component';
import {PlagueControlWarningComponent} from './public-health-warning/plague-control-warning/plague-control-warning.component';
import {InfluenzaWarningComponent} from './public-health-warning/influenza-warning/influenza-warning.component';
import {AnimalEpidemicWarningComponent} from './public-health-warning/animal-epidemic-warning/animal-epidemic-warning.component';
import {SafetyMedicalWarningComponent} from './public-health-warning/safety-medical-warning/safety-medical-warning.component';
import {TerroristAttacksWarningComponent} from './social-security-warning/terrorist-attacks-warning/terrorist-attacks-warning.component';
import {MassIncidentWarningComponent} from './social-security-warning/mass-incident-warning/mass-incident-warning.component';
import {PriceChangesWarningComponent} from './social-security-warning/price-changes-warning/price-changes-warning.component';
import {GrainEmergencyWarningComponent} from './social-security-warning/grain-emergency-warning/grain-emergency-warning.component';
import {NetworkInformationSecurityWarningComponent} from './social-security-warning/network-information-security-warning/network-information-security-warning.component';
import {ForeignAffairsWarningComponent} from './social-security-warning/foreign-affairs-warning/foreign-affairs-warning.component';
import {FinancialAccidentWarningComponent} from './social-security-warning/financial-accident-warning/financial-accident-warning.component';
import {GovernmentDebtWarningComponent} from './social-security-warning/government-debt-warning/government-debt-warning.component';
import {CommissaryEmergencyWarningComponent} from './social-security-warning/commissary-emergency-warning/commissary-emergency-warning.component';
import {ReliefSuppliesWarningComponent} from './social-security-warning/relief-supplies-warning/relief-supplies-warning.component';


const routes: Routes = [
    {path: '', redirectTo: 'natural-drought-and-flood-level', pathMatch: 'full'},
    /*自然灾害*/
    {path: 'natural-drought-and-flood-level', component: DroughtAndFloodWarningComponent, data: {title: '汛旱灾害判别', keep: false}},
    {path: 'natural-earthquake-level', component: EarthquakeWarningComponent, data: {title: '地震灾害判别', keep: false}},
    {path: 'natural-geological-level', component: GeologicalWarningComponent, data: {title: '地质灾害判别', keep: false}},
    {path: 'natural-meteorological-level', component: MeteorologicalWarningComponent, data: {title: '气象灾害判别', keep: false}},
    {path: 'natural-relief-level', component: NaturalReliefWarningComponent, data: {title: '自然灾害救助判别', keep: false}},
    {path: 'natural-typhoon-level', component: TyphoonWarningComponent, data: {title: '台风灾害判别', keep: false}},
    /*事故灾害*/
    {path: 'accident-road-traffic-level', component: RoadTrafficWarningComponent, data: {title: '道路交通灾害判别', keep: false}},
    {path: 'accident-environmental-level', component: EnvironmentalWarningComponent, data: {title: '突发环境灾害判别', keep: false}},
    {path: 'accident-radiation-level', component: RadiationAccidentWarningComponent, data: {title: '辐射灾害判别', keep: false}},
    {path: 'accident-algae-outbreak-level', component: AlgaeOutbreakWarningComponent, data: {title: '太湖蓝藻灾害判别', keep: false}},
    {path: 'accident-lake-flooding-level', component: LakeFloodingWarningComponent, data: {title: '太湖湖泛判别', keep: false}},
    {path: 'accident-pollution-weather-level', component: PollutionWeatherWarningComponent, data: {title: '重污染天气判别', keep: false}},
    {path: 'accident-nuclear-event-level', component: NuclearEventWarningComponent, data: {title: '核应急判别', keep: false}},
    {path: 'accident-special-equipment-level', component: SpecialEquipmentWarningComponent, data: {title: '特种设备判别', keep: false}},
    {path: 'accident-railway-accident-level', component: RailwayAccidentWarningComponent, data: {title: '铁路事故判别', keep: false}},
    {
        path: 'accident-port-hazardous-chemicals-level',
        component: PortHazardousChemicalsWarningComponent,
        data: {title: '港口危险化学品判别', keep: false}
    },
    {path: 'accident-blackout-level', component: BlackoutWarningComponent, data: {title: '大面积停电判别', keep: false}},
    {path: 'accident-fire-accident-level', component: FireAccidentWarningComponent, data: {title: '重特大火灾判别', keep: false}},
    {path: 'accident-communication-level', component: CommunicationWarningComponent, data: {title: '通信保障判别', keep: false}},
    {path: 'accident-hazardous-chemicals-level', component: HazardousChemicalsWarningComponent, data: {title: '危险化学品判别', keep: false}},
    {path: 'accident-production-safety-level', component: ProductionSafetyWarningComponent, data: {title: '生产安全判别', keep: false}},
    {path: 'accident-forest-fire-level', component: ForestFireWarningComponent, data: {title: '森林火灾判别', keep: false}},
    {path: 'accident-water-search-rescue-level', component: WaterSearchRescueWarningComponent, data: {title: '水上搜救判别', keep: false}},
    {path: 'accident-rail-traffic-level', component: RailTrafficWarningComponent, data: {title: '轨道交通运营判别', keep: false}},
    /*公共卫生*/
    {path: 'public-food-safety-level', component: FoodSafetyWarningComponent, data: {title: '食品安全判别', keep: false}},
    {path: 'public-health-event-level', component: PublicHealthWarningComponent, data: {title: '公共卫生判别', keep: false}},
    {path: 'public-medical-aid-level', component: MedicalAidWarningComponent, data: {title: '医疗救急判别', keep: false}},
    {path: 'public-plague-control-level', component: PlagueControlWarningComponent, data: {title: '鼠疫灾害控制判别', keep: false}},
    {path: 'public-influenza-level', component: InfluenzaWarningComponent, data: {title: '流感疫情判别', keep: false}},
    {path: 'public-animal-epidemic-level', component: AnimalEpidemicWarningComponent, data: {title: '动物疫情判别', keep: false}},
    {path: 'public-medical-devices-level', component: SafetyMedicalWarningComponent, data: {title: '药品医疗器械判别', keep: false}},
    /*社会安全*/
    {path: 'social-terrorist-attacks-level', component: TerroristAttacksWarningComponent, data: {title: '恐怖袭击判别', keep: false}},
    {path: 'social-mass-incident-level', component: MassIncidentWarningComponent, data: {title: '群体性事件判别', keep: false}},
    {path: 'social-price-changes-level', component: PriceChangesWarningComponent, data: {title: '价格异动判别', keep: false}},
    {path: 'social-grain-emergency-level', component: GrainEmergencyWarningComponent, data: {title: '粮食应急判别', keep: false}},
    {
        path: 'social-network-information-level',
        component: NetworkInformationSecurityWarningComponent,
        data: {title: '网络与信息安全判别', keep: false}
    },
    {path: 'social-foreign-affairs-level', component: ForeignAffairsWarningComponent, data: {title: '涉外突发判别', keep: false}},
    {path: 'social-financial-accident-level', component: FinancialAccidentWarningComponent, data: {title: '金融突发判别', keep: false}},
    {path: 'social-government-debt-level', component: GovernmentDebtWarningComponent, data: {title: '政府性债务危机判别', keep: false}},
    {path: 'social-commissary-emergency-level', component: CommissaryEmergencyWarningComponent, data: {title: '军粮应急危判别', keep: false}},
    {path: 'social-relief-supplies-level', component: ReliefSuppliesWarningComponent, data: {title: '救灾物资应急判别', keep: false}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StatusWarningRoutingModule {
}
