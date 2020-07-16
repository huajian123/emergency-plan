import { Component, OnInit } from '@angular/core';
import {AccidentTypeEnum, DisasterLevelEnum, NaturalEnum} from '../../../../../core/vo-common/BusinessEnum';

@Component({
  selector: 'app-earthquake-pro-second',
  templateUrl: './earthquake-pro-second.component.html',
  styleUrls: ['./earthquake-pro-second.component.less']
})
export class EarthquakeProSecondComponent implements OnInit {
  accidentId = NaturalEnum.Earthquake;
  accidentType = AccidentTypeEnum.Nature;
  planGrade = DisasterLevelEnum.LevelTwo;
  constructor() { }

  ngOnInit(): void {
  }

}
