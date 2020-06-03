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
  NzDatePickerModule, NzDropDownModule,
} from 'ng-zorro-antd';



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
  ]
})
export class MyNgZorroModule { }
