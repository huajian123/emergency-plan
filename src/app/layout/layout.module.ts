import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutDefalutComponent} from './default/default.component';
import {ShareModule} from '../share/share.module';
import {SidebarNavComponent} from './default/sidebar-nav/sidebar-nav.component';
import {TabComponent} from './default/tab/tab.component';
import {ManageLayoutComponent} from './manage-layout/manage-layout.component';
import {StatusWarningLayoutComponent} from './status-warning-layout/status-warning-layout.component';
import {EmergencyPlayComponent} from './emergency-play/emergency-play.component';
import {ProvincialLinkageLayoutComponent} from './provincial-linkage-layout/provincial-linkage-layout.component';
import {LocalEmergencyLayoutComponent} from './local-emergency-layout/local-emergency-layout.component';

@NgModule({
    declarations: [
        LayoutDefalutComponent,
        SidebarNavComponent,
        TabComponent,
        ManageLayoutComponent,
        StatusWarningLayoutComponent,
        EmergencyPlayComponent,
        ProvincialLinkageLayoutComponent,
        LocalEmergencyLayoutComponent
    ],
    imports: [
        CommonModule,
        ShareModule,
    ]
})
export class LayoutModule {
}
