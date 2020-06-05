import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutDefalutComponent} from './layout/default/default.component';


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
            {path: 'user', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)},
            {path: 'ceshi', loadChildren: () => import('./pages/ceshi/ceshi.module').then(m => m.CeshiModule)},
            {path: 'ceshi2', loadChildren: () => import('./pages/ceshi2/ceshi2.module').then(m => m.Ceshi2Module)},
            {
                path: 'natural-disaster',
                loadChildren: () => import('./pages/natural-disasters/natural-disasters.module').then(m => m.NaturalDisastersModule)
            },
            {
                path: 'accident-disaster',
                loadChildren: () => import('./pages/accident-disasters/accident-disasters.module').then(m => m.AccidentDisastersModule)
            },
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
