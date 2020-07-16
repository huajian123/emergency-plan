import { Component, OnInit } from '@angular/core';
import {AccidentTypeEnum, DisasterLevelEnum, PublicHealthEnum} from '../../../../../core/vo-common/BusinessEnum';

@Component({
  selector: 'app-food-pro-second',
  templateUrl: './food-pro-second.component.html',
  styleUrls: ['./food-pro-second.component.less']
})
export class FoodProSecondComponent implements OnInit {
  accidentId = PublicHealthEnum.FoodSafety;
  accidentType = AccidentTypeEnum.PublicHealth;
  planGrade = DisasterLevelEnum.LevelTwo;
  constructor() { }

  ngOnInit(): void {
  }

}
