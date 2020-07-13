import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutDefalutComponent} from './default/default.component';
import {ShareModule} from '../share/share.module';
import {SidebarNavComponent} from './default/sidebar-nav/sidebar-nav.component';
import {TabComponent} from './default/tab/tab.component';
import {ManageLayoutComponent} from './manage-layout/manage-layout.component';
import { StatusWarningLayoutComponent } from './status-warning-layout/status-warning-layout.component';
import { EmergencyPlayComponent } from './emergency-play/emergency-play.component';

@NgModule({
    declarations: [LayoutDefalutComponent, SidebarNavComponent, TabComponent, ManageLayoutComponent, StatusWarningLayoutComponent, EmergencyPlayComponent],
    imports: [
        CommonModule,
        ShareModule,
    ]
})
export class LayoutModule {
}
