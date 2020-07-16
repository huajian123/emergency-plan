import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusWarningRoutingModule} from './status-warning-routing.module';
import {EarthquakeWarningComponent} from './natural-disaster-warning/earthquake-warning/earthquake-warning.component';
import {ShareModule} from '../../share/share.module';
import {DroughtAndFloodWarningComponent} from './natural-disaster-warning/drought-and-flood-warning/drought-and-flood-warning.component';
import {GeologicalWarningComponent} from './natural-disaster-warning/geological-warning/geological-warning.component';
import {MeteorologicalWarningComponent} from './natural-disaster-warning/meteorological-warning/meteorological-warning.component';
import {NaturalReliefWarningComponent} from './natural-disaster-warning/natural-relief-warning/natural-relief-warning.component';
import {TyphoonWarningComponent} from './natural-disaster-warning/typhoon-warning/typhoon-warning.component';
import {AlgaeOutbreakWarningComponent} from './accident-disaster-warning/algae-outbreak-warning/algae-outbreak-warning.component';
import {BlackoutWarningComponent} from './accident-disaster-warning/blackout-warning/blackout-warning.component';
import {CommunicationWarningComponent} from './accident-disaster-warning/communication-warning/communication-warning.component';
import {EnvironmentalWarningComponent} from './accident-disaster-warning/environmental-warning/environmental-warning.component';
import {FireAccidentWarningComponent} from './accident-disaster-warning/fire-accident-warning/fire-accident-warning.component';
import {ForestFireWarningComponent} from './accident-disaster-warning/forest-fire-warning/forest-fire-warning.component';
import {HazardousChemicalsWarningComponent} from './accident-disaster-warning/hazardous-chemicals-warning/hazardous-chemicals-warning.component';
import {LakeFloodingWarningComponent} from './accident-disaster-warning/lake-flooding-warning/lake-flooding-warning.component';
import {NuclearEventWarningComponent} from './accident-disaster-warning/nuclear-event-warning/nuclear-event-warning.component';
import {PollutionWeatherWarningComponent} from './accident-disaster-warning/pollution-weather-warning/pollution-weather-warning.component';
import {PortHazardousChemicalsWarningComponent} from './accident-disaster-warning/port-hazardous-chemicals-warning/port-hazardous-chemicals-warning.component';
import {ProductionSafetyWarningComponent} from './accident-disaster-warning/production-safety-warning/production-safety-warning.component';
import {RadiationAccidentWarningComponent} from './accident-disaster-warning/radiation-accident-warning/radiation-accident-warning.component';
import {RailTrafficWarningComponent} from './accident-disaster-warning/rail-traffic-warning/rail-traffic-warning.component';
import {RailwayAccidentWarningComponent} from './accident-disaster-warning/railway-accident-warning/railway-accident-warning.component';
import {SpecialEquipmentWarningComponent} from './accident-disaster-warning/special-equipment-warning/special-equipment-warning.component';
import {WaterSearchRescueWarningComponent} from './accident-disaster-warning/water-search-rescue-warning/water-search-rescue-warning.component';
import {AnimalEpidemicWarningComponent} from './public-health-warning/animal-epidemic-warning/animal-epidemic-warning.component';
import {FoodSafetyWarningComponent} from './public-health-warning/food-safety-warning/food-safety-warning.component';
import {InfluenzaWarningComponent} from './public-health-warning/influenza-warning/influenza-warning.component';
import {MedicalAidWarningComponent} from './public-health-warning/medical-aid-warning/medical-aid-warning.component';
import {PlagueControlWarningComponent} from './public-health-warning/plague-control-warning/plague-control-warning.component';
import {PublicHealthWarningComponent} from './public-health-warning/public-health-warning/public-health-warning.component';
import {SafetyMedicalWarningComponent} from './public-health-warning/safety-medical-warning/safety-medical-warning.component';
import {CommissaryEmergencyWarningComponent} from './social-security-warning/commissary-emergency-warning/commissary-emergency-warning.component';
import {FinancialAccidentWarningComponent} from './social-security-warning/financial-accident-warning/financial-accident-warning.component';
import {ForeignAffairsWarningComponent} from './social-security-warning/foreign-affairs-warning/foreign-affairs-warning.component';
import {GovernmentDebtWarningComponent} from './social-security-warning/government-debt-warning/government-debt-warning.component';
import {GrainEmergencyWarningComponent} from './social-security-warning/grain-emergency-warning/grain-emergency-warning.component';
import {MassIncidentWarningComponent} from './social-security-warning/mass-incident-warning/mass-incident-warning.component';
import {NetworkInformationSecurityWarningComponent} from './social-security-warning/network-information-security-warning/network-information-security-warning.component';
import {PriceChangesWarningComponent} from './social-security-warning/price-changes-warning/price-changes-warning.component';
import {ReliefSuppliesWarningComponent} from './social-security-warning/relief-supplies-warning/relief-supplies-warning.component';
import {TerroristAttacksWarningComponent} from './social-security-warning/terrorist-attacks-warning/terrorist-attacks-warning.component';
import {RoadTrafficWarningComponent} from './accident-disaster-warning/road-traffic-warning/road-traffic-warning.component';
import { TotalPlanComponent } from './total-plan/total-plan.component';


@NgModule({
    declarations: [
        DroughtAndFloodWarningComponent,
        EarthquakeWarningComponent,
        GeologicalWarningComponent,
        MeteorologicalWarningComponent,
        NaturalReliefWarningComponent,
        TyphoonWarningComponent,
        AlgaeOutbreakWarningComponent,
        BlackoutWarningComponent,
        CommunicationWarningComponent,
        EnvironmentalWarningComponent,
        FireAccidentWarningComponent,
        ForestFireWarningComponent,
        HazardousChemicalsWarningComponent,
        LakeFloodingWarningComponent,
        NuclearEventWarningComponent,
        PollutionWeatherWarningComponent,
        PortHazardousChemicalsWarningComponent,
        ProductionSafetyWarningComponent,
        RadiationAccidentWarningComponent,
        RailTrafficWarningComponent,
        RailwayAccidentWarningComponent,
        SpecialEquipmentWarningComponent,
        WaterSearchRescueWarningComponent,
        AnimalEpidemicWarningComponent,
        FoodSafetyWarningComponent,
        InfluenzaWarningComponent,
        MedicalAidWarningComponent,
        PlagueControlWarningComponent,
        PublicHealthWarningComponent,
        SafetyMedicalWarningComponent,
        CommissaryEmergencyWarningComponent,
        FinancialAccidentWarningComponent,
        ForeignAffairsWarningComponent,
        GovernmentDebtWarningComponent,
        GrainEmergencyWarningComponent,
        MassIncidentWarningComponent,
        NetworkInformationSecurityWarningComponent,
        PriceChangesWarningComponent,
        ReliefSuppliesWarningComponent,
        TerroristAttacksWarningComponent,
        RoadTrafficWarningComponent,
        TotalPlanComponent],
    imports: [
        CommonModule,
        StatusWarningRoutingModule,
        ShareModule
    ]
})
export class StatusWarningModule {
}
