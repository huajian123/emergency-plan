import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TotalBudgetComponent} from './total-budget/total-budget.component';


const routes: Routes = [
    {path: '', redirectTo: 'total-budget', pathMatch: 'full'},
    {path: 'total-budget', component: TotalBudgetComponent, data: {title: '总预案判别', keep: false}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TotalPlanRoutingModule {
}
