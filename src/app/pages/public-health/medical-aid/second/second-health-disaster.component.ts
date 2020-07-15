import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommanderInfoModel, PublicHealthListService, PublicHealthModel} from '../../../../services/biz-services/public-health-list.service';
import {DisasterLevelEnum, PublicHealthEnum} from '../../../../core/vo-common/BusinessEnum';

@Component({
    selector: 'app-second-health-disaster',
    templateUrl: './second-health-disaster.component.html',
    styleUrls: ['./second-health-disaster.component.less']
})
export class SecondMedicalAidComponent implements OnInit {
    @Input() currentPageNum: number;
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    dataInfo: PublicHealthModel;
    commanderInfos: CommanderInfoModel;
    teamInfos: CommanderInfoModel[];
    publicHealthEnum = PublicHealthEnum;
    disasterLevel = DisasterLevelEnum;

    constructor(private dataService: PublicHealthListService) {
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
            id: this.publicHealthEnum.MedicalAid,
            planGrade: this.disasterLevel.LevelTwo
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

    ngOnInit(): void {
        this.getPublicHealthDetail();
    }
}
