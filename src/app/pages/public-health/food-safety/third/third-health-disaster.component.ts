import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {DisasterLevelEnum, PublicHealthEnum} from '../../../../core/vo-common/BusinessEnum';
import {ActivatedRoute} from '@angular/router';
import {CitiesNameService} from '../../../../services/biz-services/earthquake-warning-list.service';
import {NzMessageService} from 'ng-zorro-antd';
import {ThirdCitiesModel} from '../../../natural-disasters/earthquake-disaster/third/third-natural-disaster.component';
import {CommanderInfoModel, PublicHealthListService, PublicHealthModel} from 'src/app/services/biz-services/public-health-list.service';

@Component({
    selector: 'app-third-health-disaster',
    templateUrl: './third-health-disaster.component.html',
    styleUrls: ['./third-health-disaster.component.less']
})
export class ThirdFoodSafetyComponent implements OnInit {
    @Input() currentPageNum: number;
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    dataInfo: PublicHealthModel;
    commanderInfos: CommanderInfoModel;
    teamInfos: CommanderInfoModel[];
    publicHealthEnum = PublicHealthEnum;
    disasterLevel = DisasterLevelEnum;
    type: number;
    provinceId: number;
    isTrue: boolean;
    provinceName: ThirdCitiesModel;

    constructor(private activatedRoute: ActivatedRoute, private dataServices: CitiesNameService,
                private dataService: PublicHealthListService, public message?: NzMessageService) {
        this.isTrue = false;
        this.provinceId = null;
        this.provinceName = {
            cityName: '',
            emergencyUrl: ''
        };
        this.type = null;
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

    linkToEmergency() {
        window.open('this.provinceName.emergencyUrl', '_blank');
    }

    async getPublicHealthDetail() {
        await this.dataService.getPublicHealthList({
            id: this.publicHealthEnum.FoodSafety,
            planGrade: this.disasterLevel.LevelThree
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

    sendMsg() {
        this.message.success('发送信息成功');
    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(param => {
            this.provinceId = param.provinceId;
            this.type = param.type;
            if (this.provinceId === null || this.type === null) {
                return;
            }
            this.dataServices.getNameList({id: this.provinceId, type: this.type}).subscribe(res => {
                if (res === null) {
                    return;
                } else {
                    this.provinceName = res;
                    this.isTrue = true;
                }
            });
        });
        this.getPublicHealthDetail();
    }

}
