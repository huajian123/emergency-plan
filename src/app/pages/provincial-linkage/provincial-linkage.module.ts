import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProvincialLinkageRoutingModule} from './provincial-linkage-routing.module';
import {ShareModule} from '../../share/share.module';
import { FirstDroughtProComponent } from './drought-and-flood/first-drought-pro/first-drought-pro.component';
import { SecondDroughtProComponent } from './drought-and-flood/second-drought-pro/second-drought-pro.component';
import { ThirdDroughtProComponent } from './drought-and-flood/third-drought-pro/third-drought-pro.component';
import { FourthDroughtProComponent } from './drought-and-flood/fourth-drought-pro/fourth-drought-pro.component';


@NgModule({
    declarations: [FirstDroughtProComponent, SecondDroughtProComponent, ThirdDroughtProComponent, FourthDroughtProComponent],
    imports: [
        CommonModule,
        ProvincialLinkageRoutingModule,
        ShareModule
    ]
})
export class ProvincialLinkageModule {
}
