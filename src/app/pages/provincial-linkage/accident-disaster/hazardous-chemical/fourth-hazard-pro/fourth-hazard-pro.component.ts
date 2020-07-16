import { Component, OnInit } from '@angular/core';
import {
  AccidentEnum,
  AccidentTypeEnum,
  DisasterLevelEnum,
} from '../../../../../core/vo-common/BusinessEnum';

@Component({
  selector: 'app-fourth-hazard-pro',
  templateUrl: './fourth-hazard-pro.component.html',
  styleUrls: ['./fourth-hazard-pro.component.less']
})
export class FourthHazardProComponent implements OnInit {
  accidentId = AccidentEnum.HazardousChemicals;
  accidentType = AccidentTypeEnum.Accident;
  planGrade = DisasterLevelEnum.LevelFour;
  constructor() { }

  ngOnInit(): void {
  }

}
