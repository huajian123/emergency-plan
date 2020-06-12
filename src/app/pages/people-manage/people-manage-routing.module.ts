import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TableListComponent} from './table-list/table-list.component';
import {FormModelComponent} from './form-model/form-model.component';
import {CommandReportManagementComponent} from './command-report-management/command-report-management.component';
import {ManagementDepartmentsComponent} from './management-departments/management-departments.component';
import {ManagementTeamsComponent} from './management-teams/management-teams.component';
import {ManagementPlansComponent} from './management-plans/management-plans.component';


const routes: Routes = [
    {path: '', redirectTo: 'table-model', pathMatch: 'full'},
    {path: 'table-model', component: TableListComponent, data: {title: '列表示例', keep: true}},
    {path: 'form-model', component: FormModelComponent, data: {title: '表单示例', keep: true}},
    {path: 'report-command', component: CommandReportManagementComponent, data: {title: '指挥汇报管理', keep: false}},
    {path: 'teams', component: ManagementTeamsComponent, data: {title: '小队管理', keep: false}},
    {path: 'departments', component: ManagementDepartmentsComponent, data: {title: '部门管理', keep: false}},
    {path: 'plans', component: ManagementPlansComponent, data: {title: '预案管理', keep: false}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PeopleManageRoutingModule {
}
