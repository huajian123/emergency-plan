import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutDefalutComponent} from './layout/default/default.component';
import {ManageLayoutComponent} from "./layout/manage-layout/manage-layout.component";


const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginModule)
    },
    {
        path: 'hazard',
        component: LayoutDefalutComponent,
        children: [
            {path: '', redirectTo: 'product', pathMatch: 'full'},
            {path: 'product', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)},
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
            {path: 'people-manage', loadChildren: () => import('./pages/people-manage/people-manage.module').then(m => m.PeopleManageModule)},

        ],
    },
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**', redirectTo: '/login'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
