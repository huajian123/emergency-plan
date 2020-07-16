import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {DisasterLevelEnum, PublicHealthEnum} from '../../../../core/vo-common/BusinessEnum';
import {ActivatedRoute} from '@angular/router';
import {CitiesNameService} from '../../../../services/biz-services/earthquake-warning-list.service';
import {NzMessageService} from 'ng-zorro-antd';
import {FourthCitiesModel} from '../../../natural-disasters/earthquake-disaster/fourth/fourth-natural-disaster.component';
import {CommanderInfoModel, PublicHealthListService, PublicHealthModel} from 'src/app/services/biz-services/public-health-list.service';

@Component({
    selector: 'app-fourth-health-disaster',
    templateUrl: './fourth-health-disaster.component.html',
    styleUrls: ['./fourth-health-disaster.component.less']
})
export class FourthFoodSafetyComponent implements OnInit {
    @Input() currentPageNum: number;
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    dataInfo: PublicHealthModel;
    commanderInfos: CommanderInfoModel;
    teamInfos: CommanderInfoModel[];
    publicHealthEnum = PublicHealthEnum;
    disasterLevel = DisasterLevelEnum;
    type: number;
    cityId: number;
    cityName: FourthCitiesModel;
    isTrue: boolean;

    constructor(private activatedRoute: ActivatedRoute, private dataServices: CitiesNameService,
                private dataService: PublicHealthListService, public message?: NzMessageService) {
        this.isTrue = false;
        this.cityId = null;
        this.type = null;
        this.cityName = {
            countName: '',
            emergencyUrl: ''
        };
        this.dataInfo = {
            id: null,
            planGrade: null,
            accidentType: null,
            planName: '',
            planDeptResyEntities: [],
        };
        this.teamInfos = [];
        this.commanderInfos = {
            id: null,
            resyName: '',
            resyDetail: '',
            deptName: '',
            deptPhone: '',
            grade: null
        };
        this.returnBack = new EventEmitter<any>();
    }

    async getPublicHealthDetail() {
        await this.dataService.getPublicHealthList({
            id: this.publicHealthEnum.FoodSafety,
            planGrade: this.disasterLevel.LevelFour
        }).subscribe(res => {
            this.dataInfo = res;
            this.dataInfo.planDeptResyEntities.forEach(item => {
                switch (item.grade) {
                    case 0:
                        this.commanderInfos = {
                            resyName: item.resyName,
                            resyDetail: item.resyDetail,
                            deptPhone: item.deptPhone,
                            deptName: item.deptName
                        };
                        break;
                    default:
                        const data = {
                            resyName: item.resyName,
                            resyDetail: item.resyDetail,
                            deptPhone: item.deptPhone,
                            deptName: item.deptName
                        };
                        this.teamInfos.push(data);
                        break;
                }
            });
        });
    }

    linkToEmergency() {
        window.open('this.cityName.emergencyUrl', '_blank');
    }

    sendMsg() {
        this.message.success('发送信息成功');
    }

    ngOnInit(): void {
        this.getPublicHealthDetail();

    }

}
