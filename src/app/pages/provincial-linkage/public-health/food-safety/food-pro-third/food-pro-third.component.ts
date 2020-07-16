import { Component, OnInit } from '@angular/core';
import {AccidentTypeEnum, DisasterLevelEnum, PublicHealthEnum} from '../../../../../core/vo-common/BusinessEnum';

@Component({
  selector: 'app-food-pro-third',
  templateUrl: './food-pro-third.component.html',
  styleUrls: ['./food-pro-third.component.less']
})
export class FoodProThirdComponent implements OnInit {
  accidentId = PublicHealthEnum.FoodSafety;
  accidentType = AccidentTypeEnum.PublicHealth;
  planGrade = DisasterLevelEnum.LevelThree;
  constructor() { }

  ngOnInit(): void {
  }

}
