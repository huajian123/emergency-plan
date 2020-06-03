import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MyCommentModule} from './comment/my-comment.module';
import {MyNgZorroModule} from './my-ng-zorro/my-ng-zorro.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyCommentModule,
    MyNgZorroModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyCommentModule,
    MyNgZorroModule,
    RouterModule,
  ]
})
export class ShareModule {
}
