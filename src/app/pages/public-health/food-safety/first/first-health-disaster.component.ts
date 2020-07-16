import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DisasterLevelEnum, PublicHealthEnum} from '../../../../core/vo-common/BusinessEnum';
import {NzMessageService} from 'ng-zorro-antd';
import {CommanderInfoModel, PublicHealthListService, PublicHealthModel} from 'src/app/services/biz-services/public-health-list.service';

@Component({
    selector: 'app-first-health-disaster',
    templateUrl: './first-health-disaster.component.html',
    styleUrls: ['./first-health-disaster.component.less']
})
export class FirstFoodSafetyComponent implements OnInit {
    @Input() currentPageNum: number;
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    dataInfo: PublicHealthModel;
    commanderInfos: CommanderInfoModel;
    teamInfos: CommanderInfoModel[];
    publicHealthEnum = PublicHealthEnum;
    disasterLevel = DisasterLevelEnum;

    constructor(private dataService: PublicHealthListService, public message?: NzMessageService) {
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
            planGrade: this.disasterLevel.LevelOne
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
        this.getPublicHealthDetail();
    }
}
