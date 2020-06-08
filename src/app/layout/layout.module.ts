import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutDefalutComponent} from './default/default.component';
import {ShareModule} from '../share/share.module';
import { SidebarNavComponent } from './default/sidebar-nav/sidebar-nav.component';
import { TabComponent } from './default/tab/tab.component';
import { ManageLayoutComponent } from './manage-layout/manage-layout.component';

@NgModule({
  declarations: [LayoutDefalutComponent, SidebarNavComponent, TabComponent, ManageLayoutComponent],
    imports: [
        CommonModule,
        ShareModule,
    ]
})
export class LayoutModule {  }
