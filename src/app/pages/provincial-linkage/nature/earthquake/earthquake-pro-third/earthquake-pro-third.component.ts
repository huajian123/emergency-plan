import { Component, OnInit } from '@angular/core';
import {AccidentTypeEnum, DisasterLevelEnum, NaturalEnum} from '../../../../../core/vo-common/BusinessEnum';

@Component({
  selector: 'app-earthquake-pro-third',
  templateUrl: './earthquake-pro-third.component.html',
  styleUrls: ['./earthquake-pro-third.component.less']
})
export class EarthquakeProThirdComponent implements OnInit {
  accidentId = NaturalEnum.Earthquake;
  accidentType = AccidentTypeEnum.Nature;
  planGrade = DisasterLevelEnum.LevelThree;
  constructor() { }

  ngOnInit(): void {
  }

}
