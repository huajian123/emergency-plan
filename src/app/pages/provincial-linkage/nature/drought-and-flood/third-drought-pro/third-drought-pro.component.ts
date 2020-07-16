import { Component, OnInit } from '@angular/core';
import {AccidentTypeEnum, DisasterLevelEnum, NaturalEnum} from '../../../../../core/vo-common/BusinessEnum';

@Component({
  selector: 'app-third-drought-pro',
  templateUrl: './third-drought-pro.component.html',
  styleUrls: ['./third-drought-pro.component.less']
})
export class ThirdDroughtProComponent implements OnInit {
  accidentId = NaturalEnum.DroughtAndFlood;
  accidentType = AccidentTypeEnum.Nature;
  planGrade = DisasterLevelEnum.LevelThree;
  constructor() { }

  ngOnInit(): void {
  }

}
