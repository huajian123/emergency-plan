import {Component, OnInit} from '@angular/core';
import {
    ProvincialLinkageModel,
} from '../../../../services/biz-services/provincial-linkage.service';
import {AccidentTypeEnum, DisasterLevelEnum, NaturalEnum} from '../../../../core/vo-common/BusinessEnum';

@Component({
    selector: 'app-first-drought-pro',
    templateUrl: './first-drought-pro.component.html',
    styleUrls: ['./first-drought-pro.component.less']
})
export class FirstDroughtProComponent implements OnInit {
    accidentId = NaturalEnum.DroughtAndFlood;
    accidentType = AccidentTypeEnum.Nature;
    planGrade = DisasterLevelEnum.LevelOne;

    constructor() {
    }

    ngOnInit(): void {
    }

}
