import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MyCommentModule} from './comment/my-comment.module';
import {MyNgZorroModule} from './my-ng-zorro/my-ng-zorro.module';
import {RouterModule} from '@angular/router';
import {QuicklinkModule} from 'ngx-quicklink';
import {BizComment} from './biz-comment/biz-comment.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MyCommentModule,
        MyNgZorroModule,
        QuicklinkModule,
        RouterModule,
        BizComment,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MyCommentModule,
        MyNgZorroModule,
        QuicklinkModule,
        RouterModule,
        BizComment
    ]
})
export class ShareModule {
}
