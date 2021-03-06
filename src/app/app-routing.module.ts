import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutDefalutComponent} from './layout/default/default.component';
import {ManageLayoutComponent} from './layout/manage-layout/manage-layout.component';
import {QuicklinkStrategy} from 'ngx-quicklink';
import {LoginLayoutComponent} from './pages/login/login-layout/login-layout.component';
import {StatusWarningLayoutComponent} from './layout/status-warning-layout/status-warning-layout.component';
import {EmergencyPlayComponent} from './layout/emergency-play/emergency-play.component';
import {LocalEmergencyLayoutComponent} from './layout/local-emergency-layout/local-emergency-layout.component';
import {ExpertWarehouseComponent} from './pages/expert-warehouse/expert-warehouse.component';
import {ResourceWarehouseComponent} from './pages/resource-warehouse/resource-warehouse.component';
import {ProvincialLinkageLayoutComponent} from './layout/provincial-linkage-layout/provincial-linkage-layout.component';
import {SysSettingComponent} from './pages/sys-setting/sys-setting.component';
import {DecisionSupportListComponent} from './pages/decision-support/decision-support-list/decision-support-list.component';


const routes: Routes = [
    {path: 'login', component: LoginLayoutComponent},
    {
        path: 'hazard',
        component: LayoutDefalutComponent,
        children: [
            {path: '', redirectTo: 'total-plan', pathMatch: 'full'},
            {
                path: 'natural-disaster',
                loadChildren: () => import('./pages/natural-disasters/natural-disasters.module').then(m => m.NaturalDisastersModule)
            },
            {
                path: 'accident-disaster',
                loadChildren: () => import('./pages/accident-disasters/accident-disasters.module').then(m => m.AccidentDisastersModule)
            },
            {
                path: 'public-health',
                loadChildren: () => import('./pages/public-health/public-health.module').then(m => m.PublicHealthModule)
            },
            {
                path: 'social-security',
                loadChildren: () => import('./pages/social-security/social-security.module').then(m => m.SocialSecurityModule)
            },
            {
                path: 'total-plan',
                loadChildren: () => import('./pages/total-plan/total-plan.module').then(m => m.TotalPlanModule)
            },
        ],
    },
    {
        path: 'hazard-manage',
        component: ManageLayoutComponent,
        children: [
            {path: '', redirectTo: 'people-manage', pathMatch: 'full'},
            {
                path: 'people-manage',
                loadChildren: () => import('./pages/people-manage/people-manage.module').then(m => m.PeopleManageModule)
            },

        ],
    },
    {
        path: 'hazard-decision-support',
        component: DecisionSupportListComponent,
    },
    {
        path: 'hazard-status',
        component: StatusWarningLayoutComponent,
        children: [
            {path: '', redirectTo: 'status-warning', pathMatch: 'full'},
            {
                path: 'status-warning',
                loadChildren: () => import('./pages/status-warning/status-warning.module').then(m => m.StatusWarningModule)
            },

        ],
    },
    {
        path: 'hazard-emergency-plan',
        component: EmergencyPlayComponent,
    },
    {
        path: 'hazard-regional-response',
        component: LocalEmergencyLayoutComponent,
        children: [
            {path: '', redirectTo: 'local-emergency', pathMatch: 'full'},
            {
                path: 'local-emergency',
                loadChildren: () => import('./pages/local-emergency/local-emergency.module').then(m => m.LocalEmergencyModule)
            },

        ],
    },
    {
        path: 'hazard-expert-warehouse',
        component: ExpertWarehouseComponent,
    },
    {
        path: 'hazard-system-setting',
        component: SysSettingComponent,
    },
    {
        path: 'hazard-resource-warehouse',
        component: ResourceWarehouseComponent,
    },
    {
        path: 'hazard-provincial',
        component: ProvincialLinkageLayoutComponent,
        children: [
            {path: '', redirectTo: 'provincial-linkage', pathMatch: 'full'},
            {
                path: 'provincial-linkage',
                loadChildren: () => import('./pages/provincial-linkage/provincial-linkage.module').then(m => m.ProvincialLinkageModule)
            },
        ],
    },
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**', redirectTo: '/login'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: QuicklinkStrategy})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
