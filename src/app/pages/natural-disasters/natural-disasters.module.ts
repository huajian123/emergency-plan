import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaturalDisastersRoutingModule } from './natural-disasters-routing.module';
import { FistNaturalDisasterComponent } from './fist-natural-disaster/fist-natural-disaster.component';
import { SecondNaturalDisasterComponent } from './second-natural-disaster/second-natural-disaster.component';
import { ThirdNaturalDisasterComponent } from './third-natural-disaster/third-natural-disaster.component';
import { FourthNaturalDisasterComponent } from './fourth-natural-disaster/fourth-natural-disaster.component';


@NgModule({
    declarations: [
        FistNaturalDisasterComponent,
    SecondNaturalDisasterComponent,
        ThirdNaturalDisasterComponent,
        FourthNaturalDisasterComponent],
  imports: [
    CommonModule,
    NaturalDisastersRoutingModule
  ]
})
export class NaturalDisastersModule { }
