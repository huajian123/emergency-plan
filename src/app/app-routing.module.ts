import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutDefalutComponent} from './layout/default/default.component';
import {ManageLayoutComponent} from './layout/manage-layout/manage-layout.component';
import {QuicklinkStrategy} from 'ngx-quicklink';
import {LoginLayoutComponent} from './pages/login/login-layout/login-layout.component';
import {StatusWarningLayoutComponent} from './layout/status-warning-layout/status-warning-layout.component';
import {EmergencyPlayComponent} from './layout/emergency-play/emergency-play.component';


const routes: Routes = [
    {path: 'login', component: LoginLayoutComponent},
    {
        path: 'hazard',
        component: LayoutDefalutComponent,
        children: [
            {path: '', redirectTo: 'hazard', pathMatch: 'full'},
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
    /*  {
          path: 'provincial-linkage',
          component: ProvincialLinkageLayoutComponent,
          children: [
              {path: '', redirectTo: 'provincial-linkage', pathMatch: 'full'},
              {
                  path: 'natural-disaster',
                  loadChildren: () =>
                      import('./pages/provincial-natural-disaster/provincial-natural-disaster.module').then(m =>
                          m.ProvincialNaturalDisasterModule)
              },
              {
                  path: 'accident-disaster',
                  loadChildren: () =>
                      import('./pages/provincial-accident-disaster/provincial-accident-disaster.module').then(m =>
                          m.ProvincialAccidentDisasterModule)
              },
              {
                  path: 'public-health',
                  loadChildren: () =>
                      import('./pages/provincial-public-health/provincial-public-health.module').then(m =>
                          m.ProvincialPublicHealthModule)
              },
              {
                  path: 'social-security',
                  loadChildren: () =>
                      import('./pages/provincial-social-security/provincial-social-security.module').then(m =>
                          m.ProvincialSocialSecurityModule)
              },
          ],
      },
      {
          path: 'local-emergency',
          component: LocalEmergencyLayoutComponent,
          children: [
              {path: '', redirectTo: 'local-emergency', pathMatch: 'full'},
              {
                  path: 'local-natural-disaster',
                  loadChildren: () =>
                      import('./pages/local-natural-disaster/local-natural-disaster.module').then(m => m.LocalNaturalDisasterModule)
              },
              {
                  path: 'local-accident-disaster',
                  loadChildren: () =>
                      import('./pages/local-accident-disaster/local-accident-disaster.module').then(m => m.LocalAccidentDisasterModule)
              },
              {
                  path: 'local-public-health',
                  loadChildren: () => import('./pages/local-public-health/local-public-health.module').then(m => m.LocalPublicHealthModule)
              },
              {
                  path: 'local-social-security',
                  loadChildren: () =>
                      import('./pages/local-social-security/local-social-security.module').then(m => m.LocalSocialSecurityModule)
              },
          ],
      },*/
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**', redirectTo: '/login'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: QuicklinkStrategy})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
