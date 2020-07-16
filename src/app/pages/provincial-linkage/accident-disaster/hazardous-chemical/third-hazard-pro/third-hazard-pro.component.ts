import { Component, OnInit } from '@angular/core';
import {
  AccidentEnum,
  AccidentTypeEnum,
  DisasterLevelEnum,
} from '../../../../../core/vo-common/BusinessEnum';

@Component({
  selector: 'app-third-hazard-pro',
  templateUrl: './third-hazard-pro.component.html',
  styleUrls: ['./third-hazard-pro.component.less']
})
export class ThirdHazardProComponent implements OnInit {
  accidentId = AccidentEnum.HazardousChemicals;
  accidentType = AccidentTypeEnum.Accident;
  planGrade = DisasterLevelEnum.LevelThree;
  constructor() { }

  ngOnInit(): void {
  }

}
