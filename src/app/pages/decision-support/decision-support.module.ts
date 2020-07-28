import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DecisionSupportRoutingModule} from './decision-support-routing.module';
import {DecisionSupportListComponent} from './decision-support-list/decision-support-list.component';
import {ShareModule} from '../../share/share.module';


@NgModule({
    declarations: [DecisionSupportListComponent],
    imports: [
        ShareModule,
        CommonModule,
        DecisionSupportRoutingModule
    ]
})
export class DecisionSupportModule {
}
