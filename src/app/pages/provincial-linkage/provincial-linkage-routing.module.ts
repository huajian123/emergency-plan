import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstDroughtProComponent} from './drought-and-flood/first-drought-pro/first-drought-pro.component';
import {SecondDroughtProComponent} from './drought-and-flood/second-drought-pro/second-drought-pro.component';
import {ThirdDroughtProComponent} from './drought-and-flood/third-drought-pro/third-drought-pro.component';
import {FourthDroughtProComponent} from './drought-and-flood/fourth-drought-pro/fourth-drought-pro.component';


const routes: Routes = [
  {path: '', redirectTo: 'first-drought-pro', pathMatch: 'full'},
  /*防汛防旱*/
  {path: 'first-drought-pro', component: FirstDroughtProComponent, data: {title: '汛旱一级', keep: false}},
  {path: 'second-drought-pro', component: SecondDroughtProComponent, data: {title: '汛旱二级', keep: false}},
  {path: 'third-drought-pro', component: ThirdDroughtProComponent, data: {title: '汛旱三级', keep: false}},
  {path: 'fourth-drought-pro', component: FourthDroughtProComponent, data: {title: '汛旱四级', keep: false}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvincialLinkageRoutingModule { }
