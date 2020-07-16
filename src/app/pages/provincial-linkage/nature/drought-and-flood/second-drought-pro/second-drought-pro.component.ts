import { Component, OnInit } from '@angular/core';
import {AccidentTypeEnum, DisasterLevelEnum, NaturalEnum} from '../../../../../core/vo-common/BusinessEnum';

@Component({
  selector: 'app-second-drought-pro',
  templateUrl: './second-drought-pro.component.html',
  styleUrls: ['./second-drought-pro.component.less']
})
export class SecondDroughtProComponent implements OnInit {
  accidentId = NaturalEnum.DroughtAndFlood;
  accidentType = AccidentTypeEnum.Nature;
  planGrade = DisasterLevelEnum.LevelTwo;
  constructor() { }

  ngOnInit(): void {
  }

}
