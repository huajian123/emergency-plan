import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TotalPlanRoutingModule} from './total-plan-routing.module';
import {TotalBudgetComponent} from './total-budget/total-budget.component';
import {ShareModule} from '../../share/share.module';


@NgModule({
    declarations: [TotalBudgetComponent],
    imports: [
        ShareModule,
        CommonModule,
        TotalPlanRoutingModule
    ]
})
export class TotalPlanModule {
}
