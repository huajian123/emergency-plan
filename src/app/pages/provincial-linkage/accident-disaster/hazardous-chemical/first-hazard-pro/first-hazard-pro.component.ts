import { Component, OnInit } from '@angular/core';
import {
  AccidentEnum,
  AccidentTypeEnum,
  DisasterLevelEnum,
} from '../../../../../core/vo-common/BusinessEnum';

@Component({
  selector: 'app-first-hazard-pro',
  templateUrl: './first-hazard-pro.component.html',
  styleUrls: ['./first-hazard-pro.component.less']
})
export class FirstHazardProComponent implements OnInit {
  accidentId = AccidentEnum.HazardousChemicals;
  accidentType = AccidentTypeEnum.Accident;
  planGrade = DisasterLevelEnum.LevelOne;
  constructor() { }

  ngOnInit(): void {
  }

}
