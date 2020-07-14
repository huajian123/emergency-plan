import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShareModule} from 'src/app/share/share.module';
import {LocalEmergencyRoutingModule} from './local-emergency-routing.module';
import {FirstDroughtFloodComponent} from './natural-disasters/drought-and-flood/first-drought-flood/first-drought-flood.component';
import {SecondDroughtFloodComponent} from './natural-disasters/drought-and-flood/second-drought-flood/second-drought-flood.component';
import {ThirdDroughtFloodComponent} from './natural-disasters/drought-and-flood/third-drought-flood/third-drought-flood.component';
import {FourthDroughtFloodComponent} from './natural-disasters/drought-and-flood/fourth-drought-flood/fourth-drought-flood.component';
import {FirstDroughtFloodDetailComponent} from './natural-disasters/drought-and-flood/first-drought-flood/first-drought-flood-detail/first-drought-flood-detail.component';
import {SecondDroughtFloodDetailComponent} from './natural-disasters/drought-and-flood/second-drought-flood/second-drought-flood-detail/second-drought-flood-detail.component';
import {ThirdDroughtFloodDetailComponent} from './natural-disasters/drought-and-flood/third-drought-flood/third-drought-flood-detail/third-drought-flood-detail.component';
import {FourthDroughtFloodDetailComponent} from './natural-disasters/drought-and-flood/fourth-drought-flood/fourth-drought-flood-detail/fourth-drought-flood-detail.component';


@NgModule({
    declarations: [
        FirstDroughtFloodComponent,
        SecondDroughtFloodComponent,
        ThirdDroughtFloodComponent,
        FourthDroughtFloodComponent,
        FirstDroughtFloodDetailComponent,
        SecondDroughtFloodDetailComponent,
        ThirdDroughtFloodDetailComponent,
        FourthDroughtFloodDetailComponent],
    imports: [
        ShareModule,
        CommonModule,
        LocalEmergencyRoutingModule
    ]
})
export class LocalEmergencyModule {
}
