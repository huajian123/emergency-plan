import { Component, OnInit } from '@angular/core';
import {AccidentTypeEnum, DisasterLevelEnum, PublicHealthEnum} from '../../../../../core/vo-common/BusinessEnum';

@Component({
  selector: 'app-food-pro-first',
  templateUrl: './food-pro-first.component.html',
  styleUrls: ['./food-pro-first.component.less']
})
export class FoodProFirstComponent implements OnInit {
  accidentId = PublicHealthEnum.FoodSafety;
  accidentType = AccidentTypeEnum.PublicHealth;
  planGrade = DisasterLevelEnum.LevelOne;
  constructor() { }

  ngOnInit(): void {
  }

}
