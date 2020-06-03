import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutDefalutComponent} from './layout/default/default.component';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'hazard',
    component: LayoutDefalutComponent,
    // canActivate: [SimpleGuard],
    children: [
      { path: '', redirectTo: 'product', pathMatch: 'full' },
      // { path: 'dashboard', component: DashboardComponent, data: { title: '仪表盘', titleI18n: 'dashboard' } },
      { path: 'product', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule) },
      { path: 'user', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },
      { path: 'ceshi', loadChildren: () => import('./pages/ceshi/ceshi.module').then(m => m.CeshiModule) },
      { path: 'ceshi2', loadChildren: () => import('./pages/ceshi2/ceshi2.module').then(m => m.Ceshi2Module) },
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
