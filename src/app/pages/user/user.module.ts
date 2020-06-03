import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserCategoryComponent } from './user-category/user-category.component';


@NgModule({
  declarations: [UserListComponent, UserCategoryComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
