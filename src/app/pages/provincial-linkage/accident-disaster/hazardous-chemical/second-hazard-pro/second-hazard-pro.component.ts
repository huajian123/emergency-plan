import { Component, OnInit } from '@angular/core';
import {
  AccidentEnum,
  AccidentTypeEnum,
  DisasterLevelEnum,
} from '../../../../../core/vo-common/BusinessEnum';

@Component({
  selector: 'app-second-hazard-pro',
  templateUrl: './second-hazard-pro.component.html',
  styleUrls: ['./second-hazard-pro.component.less']
})
export class SecondHazardProComponent implements OnInit {
  accidentId = AccidentEnum.HazardousChemicals;
  accidentType = AccidentTypeEnum.Accident;
  planGrade = DisasterLevelEnum.LevelTwo;
  constructor() { }

  ngOnInit(): void {
  }

}
