import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SocialSecurityRoutingModule} from './social-security-routing.module';
import {SecondTerroristAttacksComponent} from './terrorist-attacks/second/second-natural-disaster.component';
import {SecondMassIncidentComponent} from './mass-incident/second/second-natural-disaster.component';
import {SecondPriceChangesComponent} from './price-changes/second/second-natural-disaster.component';
import {SecondGrainEmergencyComponent} from './grain-emergency/second/second-natural-disaster.component';
import {SecondNetworkInformationSecurityComponent} from './network-information-security/second/second-natural-disaster.component';
import {SecondForeignAffairsComponent} from './foreign-affairs/second/second-natural-disaster.component';
import {SecondFinancialDisasterComponent} from './financial-accident/second/second-natural-disaster.component';
import {ShareModule} from '../../share/share.module';
import {SecondCommissaryEmergencyComponent} from './commissary-emergency/second/second-natural-disaster.component';
import {SecondGovernmentDebtComponent} from './government-debt/second/second-natural-disaster.component';
import {SecondReliefSuppliesComponent} from './relief-supplies/second/second-natural-disaster.component';


@NgModule({
    declarations: [
        SecondTerroristAttacksComponent,
        SecondMassIncidentComponent,
        SecondPriceChangesComponent,
        SecondGrainEmergencyComponent,
        SecondNetworkInformationSecurityComponent,
        SecondForeignAffairsComponent,
        SecondFinancialDisasterComponent,
        SecondCommissaryEmergencyComponent,
        SecondGovernmentDebtComponent,
        SecondReliefSuppliesComponent,
    ],
    imports: [
        CommonModule,
        SocialSecurityRoutingModule,
        ShareModule,
    ]
})
export class SocialSecurityModule {
}
