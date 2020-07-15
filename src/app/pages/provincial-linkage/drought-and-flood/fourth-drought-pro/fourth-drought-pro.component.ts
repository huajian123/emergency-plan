import { Component, OnInit } from '@angular/core';
import {AccidentTypeEnum, DisasterLevelEnum, NaturalEnum} from '../../../../core/vo-common/BusinessEnum';

@Component({
  selector: 'app-fourth-drought-pro',
  templateUrl: './fourth-drought-pro.component.html',
  styleUrls: ['./fourth-drought-pro.component.less']
})
export class FourthDroughtProComponent implements OnInit {
  accidentId = NaturalEnum.DroughtAndFlood;
  accidentType = AccidentTypeEnum.Nature;
  planGrade = DisasterLevelEnum.LevelFour;
  constructor() { }

  ngOnInit(): void {
  }

}
