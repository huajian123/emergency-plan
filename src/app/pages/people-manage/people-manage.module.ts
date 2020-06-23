import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PeopleManageRoutingModule} from './people-manage-routing.module';
import {ShareModule} from '../../share/share.module';
import {CommandReportManagementComponent} from './command-report-management/command-report-management.component';
import {ManagementTeamsComponent} from './management-teams/management-teams.component';
import {ManagementDepartmentsComponent} from './management-departments/management-departments.component';
import {ManagementPlansComponent} from './management-plans/management-plans.component';
import {CommandReportAddEditComponent} from './command-report-management/command-report-add-edit/command-report-add-edit.component';
import {TeamsAddEditComponent} from './management-teams/teams-add-edit/teams-add-edit.component';
import {DepartmentsAddEditComponent} from './management-departments/departments-add-edit/departments-add-edit.component';
import {PlansAddEditComponent} from './management-plans/plans-add-edit/plans-add-edit.component';
import {PlansDetailComponent} from './management-plans/plans-detail/plans-detail.component';
import {NzRadioModule} from 'ng-zorro-antd';


@NgModule({
    declarations: [CommandReportManagementComponent, ManagementTeamsComponent, ManagementDepartmentsComponent, ManagementPlansComponent, CommandReportAddEditComponent, TeamsAddEditComponent, DepartmentsAddEditComponent, PlansAddEditComponent, PlansDetailComponent],
    imports: [
        CommonModule,
        PeopleManageRoutingModule,
        ShareModule,
        NzRadioModule,
    ]
})
export class PeopleManageModule {
}
