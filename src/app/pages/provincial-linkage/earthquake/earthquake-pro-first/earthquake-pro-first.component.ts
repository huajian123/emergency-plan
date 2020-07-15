import { Component, OnInit } from '@angular/core';
import {AccidentTypeEnum, DisasterLevelEnum, NaturalEnum} from '../../../../core/vo-common/BusinessEnum';

@Component({
  selector: 'app-earthquake-pro-first',
  templateUrl: './earthquake-pro-first.component.html',
  styleUrls: ['./earthquake-pro-first.component.less']
})
export class EarthquakeProFirstComponent implements OnInit {
  accidentId = NaturalEnum.Earthquake;
  accidentType = AccidentTypeEnum.Nature;
  planGrade = DisasterLevelEnum.LevelOne;
  constructor() { }

  ngOnInit(): void {
  }

}
