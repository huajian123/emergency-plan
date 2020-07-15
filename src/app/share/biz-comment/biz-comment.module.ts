import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegionCityDetailComponent} from './region-city-detail/region-city-detail.component';
import {RegionListComponent} from './region-list/region-list.component';
import {MyNgZorroModule} from '../my-ng-zorro/my-ng-zorro.module';


@NgModule({
    declarations: [
        RegionCityDetailComponent,
        RegionListComponent
    ],
    imports: [
        CommonModule,
        MyNgZorroModule,
    ],
    exports: [
        RegionCityDetailComponent,
        RegionListComponent
    ]
})
export class BizComment {
}
