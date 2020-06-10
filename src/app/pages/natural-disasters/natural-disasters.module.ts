import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NaturalDisastersRoutingModule} from './natural-disasters-routing.module';
import {FistNaturalDisasterComponent} from './fist-natural-disaster/fist-natural-disaster.component';
import {SecondNaturalDisasterComponent} from './second-natural-disaster/second-natural-disaster.component';
import {ThirdNaturalDisasterComponent} from './third-natural-disaster/third-natural-disaster.component';
import {FourthNaturalDisasterComponent} from './fourth-natural-disaster/fourth-natural-disaster.component';
import {NzButtonModule, NzCardModule, NzGridModule, NzTabsModule} from 'ng-zorro-antd';
import {NaturalDisasterPlanComponent} from './second-natural-disaster/natural-disaster-plan/natural-disaster-plan.component';


@NgModule({
    declarations: [
        FistNaturalDisasterComponent,
        SecondNaturalDisasterComponent,
        ThirdNaturalDisasterComponent,
        FourthNaturalDisasterComponent,
        NaturalDisasterPlanComponent],
    imports: [
        CommonModule,
        NaturalDisastersRoutingModule,
        NzGridModule,
        NzCardModule,
        NzButtonModule,
        NzTabsModule
    ]
})
export class NaturalDisastersModule {
}
