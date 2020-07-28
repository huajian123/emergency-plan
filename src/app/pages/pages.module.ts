import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginModule} from './login/login.module';
import {AccidentDisastersModule} from './accident-disasters/accident-disasters.module';
import {NaturalDisastersModule} from './natural-disasters/natural-disasters.module';
import {SocialSecurityModule} from './social-security/social-security.module';
import {PublicHealthRoutingModule} from './public-health/public-health-routing.module';
import {PeopleManageRoutingModule} from './people-manage/people-manage-routing.module';
import {StatusWarningModule} from './status-warning/status-warning.module';
import {LocalEmergencyModule} from './local-emergency/local-emergency.module';
import {ExpertWarehouseComponent} from './expert-warehouse/expert-warehouse.component';
import {ResourceWarehouseComponent} from './resource-warehouse/resource-warehouse.component';
import {SysSettingComponent} from './sys-setting/sys-setting.component';
import {MyNgZorroModule} from '../share/my-ng-zorro/my-ng-zorro.module';
import {DecisionSupportModule} from './decision-support/decision-support.module';


@NgModule({
    declarations: [ExpertWarehouseComponent, ResourceWarehouseComponent, SysSettingComponent],
    imports: [
        CommonModule,
        LoginModule,
        AccidentDisastersModule,
        NaturalDisastersModule,
        SocialSecurityModule,
        PublicHealthRoutingModule,
        PeopleManageRoutingModule,
        StatusWarningModule,
        LocalEmergencyModule,
        DecisionSupportModule,
        MyNgZorroModule,
    ],
    exports: [
        LoginModule,
        AccidentDisastersModule,
        NaturalDisastersModule,
        SocialSecurityModule,
        PublicHealthRoutingModule,
        PeopleManageRoutingModule,
        StatusWarningModule,
        LocalEmergencyModule,
        DecisionSupportModule
    ]
})
export class PagesModule {
}
