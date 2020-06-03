import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { TopProgressBarComponent } from './top-progress-bar/top-progress-bar.component';


@NgModule({
  declarations: [TopProgressBarComponent],
  imports: [
    CommonModule
  ],
  exports: [TopProgressBarComponent]
})
export class MyCommentModule {
}
