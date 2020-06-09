import { NgModule } from '@angular/core';
import {
  NzBreadCrumbModule,
  NzButtonModule,
  NzCheckboxModule,
  NzFormModule,
  NzIconModule,
  NzInputModule,
  NzLayoutModule,
  NzMenuModule,
  NzPageHeaderModule,
  NzToolTipModule,
  NzTableModule,
  NzDividerModule,
  NzTabsModule,
  NzDatePickerModule,
  NzDropDownModule, NzTypographyModule, NzSelectModule, NzCardModule,
} from 'ng-zorro-antd';
import {NzSpaceModule} from "ng-zorro-antd/space";



@NgModule({
  declarations: [],
  imports: [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzIconModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzToolTipModule,
    NzPageHeaderModule,
    NzTableModule,
    NzDividerModule,
    NzTabsModule,
    NzDatePickerModule,
    NzDropDownModule,
    NzTypographyModule,
    NzSelectModule,
    NzSpaceModule,
    NzCardModule,
  ],
  exports: [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzIconModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzToolTipModule,
    NzPageHeaderModule,
    NzTableModule,
    NzDividerModule,
    NzTabsModule,
    NzDatePickerModule,
    NzDropDownModule,
    NzTypographyModule,
    NzSelectModule,
    NzSpaceModule,
    NzCardModule,
  ]
})
export class MyNgZorroModule { }
