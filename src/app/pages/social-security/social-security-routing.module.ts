import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstTerroristAttacksComponent} from './terrorist-attacks/first/first-natural-disaster.component';
import {SecondTerroristAttacksComponent} from './terrorist-attacks/second/second-natural-disaster.component';
import {ThirdTerroristAttacksComponent} from './terrorist-attacks/third/third-natural-disaster.component';
import {FourthTerroristAttacksComponent} from './terrorist-attacks/fourth/fourth-natural-disaster.component';
import {FirstMassIncidentComponent} from './mass-incident/first/first-natural-disaster.component';
import {SecondMassIncidentComponent} from './mass-incident/second/second-natural-disaster.component';
import {ThirdMassIncidentComponent} from './mass-incident/third/third-natural-disaster.component';
import {FourthMassIncidentComponent} from './mass-incident/fourth/fourth-natural-disaster.component';
import {FirstPriceChangesComponent} from './price-changes/first/first-natural-disaster.component';
import {SecondPriceChangesComponent} from './price-changes/second/second-natural-disaster.component';
import {ThirdPriceChangesComponent} from './price-changes/third/third-natural-disaster.component';
import {FourthPriceChangesComponent} from './price-changes/fourth/fourth-natural-disaster.component';
import {FirstGrainEmergencyComponent} from './grain-emergency/first/first-natural-disaster.component';
import {SecondGrainEmergencyComponent} from './grain-emergency/second/second-natural-disaster.component';
import {FourthGrainEmergencyComponent} from './grain-emergency/fourth/fourth-natural-disaster.component';
import {ThirdGrainEmergencyComponent} from './grain-emergency/third/third-natural-disaster.component';
import {FirstNetworkInformationSecurityComponent} from './network-information-security/first/first-natural-disaster.component';
import {SecondNetworkInformationSecurityComponent} from './network-information-security/second/second-natural-disaster.component';
import {ThirdNetworkInformationSecurityComponent} from './network-information-security/third/third-natural-disaster.component';
import {FourthNetworkInformationSecurityComponent} from './network-information-security/fourth/fourth-natural-disaster.component';
import {FirstCommissaryEmergencyComponent} from './commissary-emergency/first/first-natural-disaster.component';
import {SecondCommissaryEmergencyComponent} from './commissary-emergency/second/second-natural-disaster.component';
import {ThirdCommissaryEmergencyComponent} from './commissary-emergency/third/third-natural-disaster.component';
import {FourthCommissaryEmergencyComponent} from './commissary-emergency/fourth/fourth-natural-disaster.component';
import {FirstFinancialDisasterComponent} from './financial-accident/first/first-natural-disaster.component';
import {SecondFinancialDisasterComponent} from './financial-accident/second/second-natural-disaster.component';
import {ThirdFinancialDisasterComponent} from './financial-accident/third/third-natural-disaster.component';
import {FourthFinancialDisasterComponent} from './financial-accident/fourth/fourth-natural-disaster.component';
import {FirstGovernmentDebtComponent} from './government-debt/first/first-natural-disaster.component';
import {SecondGovernmentDebtComponent} from './government-debt/second/second-natural-disaster.component';
import {ThirdGovernmentDebtComponent} from './government-debt/third/third-natural-disaster.component';
import {FourthGovernmentDebtComponent} from './government-debt/fourth/fourth-natural-disaster.component';
import {FirstReliefSuppliesComponent} from './relief-supplies/first/first-natural-disaster.component';
import {SecondReliefSuppliesComponent} from './relief-supplies/second/second-natural-disaster.component';
import {ThirdReliefSuppliesComponent} from './relief-supplies/third/third-natural-disaster.component';
import {FourthReliefSuppliesComponent} from './relief-supplies/fourth/fourth-natural-disaster.component';


const routes: Routes = [
    {path: '', redirectTo: 'terrorist-attacks-first', pathMatch: 'full'},
    /*恐怖袭击*/
    {path: 'terrorist-attacks-first', component: FirstTerroristAttacksComponent, data: {title: '一级灾害', keep: false}},
    {path: 'terrorist-attacks-second', component: SecondTerroristAttacksComponent, data: {title: '二级灾害', keep: false}},
    {path: 'terrorist-attacks-third', component: ThirdTerroristAttacksComponent, data: {title: '三级灾害', keep: false}},
    {path: 'terrorist-attacks-fourth', component: FourthTerroristAttacksComponent, data: {title: '四级灾害', keep: false}},
    /*群体性事件*/
    {path: 'mass-incident-first', component: FirstMassIncidentComponent, data: {title: '一级灾害', keep: false}},
    {path: 'mass-incident-second', component: SecondMassIncidentComponent, data: {title: '二级灾害', keep: false}},
    {path: 'mass-incident-third', component: ThirdMassIncidentComponent, data: {title: '三级灾害', keep: false}},
    {path: 'mass-incident-fourth', component: FourthMassIncidentComponent, data: {title: '四级灾害', keep: false}},
    /*价格异动*/
    {path: 'price-changes-first', component: FirstPriceChangesComponent, data: {title: '一级灾害', keep: false}},
    {path: 'price-changes-second', component: SecondPriceChangesComponent, data: {title: '二级灾害', keep: false}},
    {path: 'price-changes-third', component: ThirdPriceChangesComponent, data: {title: '三级灾害', keep: false}},
    {path: 'price-changes-fourth', component: FourthPriceChangesComponent, data: {title: '四级灾害', keep: false}},
    /*粮食应急*/
    {path: 'grain-emergency-first', component: FirstGrainEmergencyComponent, data: {title: '一级灾害', keep: false}},
    {path: 'grain-emergency-second', component: SecondGrainEmergencyComponent, data: {title: '二级灾害', keep: false}},
    {path: 'grain-emergency-third', component: ThirdGrainEmergencyComponent, data: {title: '三级灾害', keep: false}},
    {path: 'grain-emergency-fourth', component: FourthGrainEmergencyComponent, data: {title: '四级灾害', keep: false}},
    /*网络安全*/
    {path: 'network-information-security-first', component: FirstNetworkInformationSecurityComponent, data: {title: '一级灾害', keep: false}},
    {path: 'network-information-security-second', component: SecondNetworkInformationSecurityComponent, data: {title: '二级灾害', keep: false}},
    {path: 'network-information-security-third', component: ThirdNetworkInformationSecurityComponent, data: {title: '三级灾害', keep: false}},
    {path: 'network-information-security-fourth', component: FourthNetworkInformationSecurityComponent, data: {title: '四级灾害', keep: false}},
    /*涉外事务*/
    {path: 'foreign-affairs-first', component: FirstGrainEmergencyComponent, data: {title: '一级灾害', keep: false}},
    {path: 'foreign-affairs-second', component: SecondGrainEmergencyComponent, data: {title: '二级灾害', keep: false}},
    {path: 'foreign-affairs-third', component: ThirdGrainEmergencyComponent, data: {title: '三级灾害', keep: false}},
    {path: 'foreign-affairs-fourth', component: FourthGrainEmergencyComponent, data: {title: '四级灾害', keep: false}},
    /*金融突发*/
    {path: 'financial-accident-first', component: FirstFinancialDisasterComponent, data: {title: '一级灾害', keep: false}},
    {path: 'financial-accident-second', component: SecondFinancialDisasterComponent, data: {title: '二级灾害', keep: false}},
    {path: 'financial-accident-third', component: ThirdFinancialDisasterComponent, data: {title: '三级灾害', keep: false}},
    {path: 'financial-accident-fourth', component: FourthFinancialDisasterComponent, data: {title: '四级灾害', keep: false}},
    /*政府债券*/
    {path: 'government-debt-first', component: FirstGovernmentDebtComponent, data: {title: '一级灾害', keep: false}},
    {path: 'government-debt-second', component: SecondGovernmentDebtComponent, data: {title: '二级灾害', keep: false}},
    {path: 'government-debt-third', component: ThirdGovernmentDebtComponent, data: {title: '三级灾害', keep: false}},
    {path: 'government-debt-fourth', component: FourthGovernmentDebtComponent, data: {title: '四级灾害', keep: false}},
    /*军粮应急*/
    {path: 'commissary-emergency-first', component: FirstCommissaryEmergencyComponent, data: {title: '一级灾害', keep: false}},
    {path: 'commissary-emergency-second', component: SecondCommissaryEmergencyComponent, data: {title: '二级灾害', keep: false}},
    {path: 'commissary-emergency-third', component: ThirdCommissaryEmergencyComponent, data: {title: '三级灾害', keep: false}},
    {path: 'commissary-emergency-fourth', component: FourthCommissaryEmergencyComponent, data: {title: '四级灾害', keep: false}},
    /*救灾物资*/
    {path: 'relief-supplies-first', component: FirstReliefSuppliesComponent, data: {title: '一级灾害', keep: false}},
    {path: 'relief-supplies-second', component: SecondReliefSuppliesComponent, data: {title: '二级灾害', keep: false}},
    {path: 'relief-supplies-third', component: ThirdReliefSuppliesComponent, data: {title: '三级灾害', keep: false}},
    {path: 'relief-supplies-fourth', component: FourthReliefSuppliesComponent, data: {title: '四级灾害', keep: false}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SocialSecurityRoutingModule {
}
