import { Component, OnInit } from '@angular/core';
import {AccidentTypeEnum, DisasterLevelEnum, PublicHealthEnum} from '../../../../../core/vo-common/BusinessEnum';

@Component({
  selector: 'app-food-pro-fourth',
  templateUrl: './food-pro-fourth.component.html',
  styleUrls: ['./food-pro-fourth.component.less']
})
export class FoodProFourthComponent implements OnInit {
  accidentId = PublicHealthEnum.FoodSafety;
  accidentType = AccidentTypeEnum.PublicHealth;
  planGrade = DisasterLevelEnum.LevelFour;
  constructor() { }

  ngOnInit(): void {
  }

}
