import { Component, OnInit } from '@angular/core';
import {AccidentTypeEnum, DisasterLevelEnum, NaturalEnum} from '../../../../core/vo-common/BusinessEnum';

@Component({
  selector: 'app-earthquake-pro-fourth',
  templateUrl: './earthquake-pro-fourth.component.html',
  styleUrls: ['./earthquake-pro-fourth.component.less']
})
export class EarthquakeProFourthComponent implements OnInit {
  accidentId = NaturalEnum.Earthquake;
  accidentType = AccidentTypeEnum.Nature;
  planGrade = DisasterLevelEnum.LevelFour;
  constructor() { }

  ngOnInit(): void {
  }

}
