import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
    AccidentDisastersListService,
    AccidentDisastersModel,
    CommanderInfoModel
} from '../../../../services/biz-services/accident-disasters-list.service';
import {AccidentEnum, DisasterLevelEnum} from '../../../../core/vo-common/BusinessEnum';
import {NzMessageService} from "ng-zorro-antd";

@Component({
    selector: 'app-second-accident-disaster',
    templateUrl: './second-accident-disaster.component.html',
    styleUrls: ['./second-accident-disaster.component.less']
})
export class SecondHazardousChemicalsComponent implements OnInit {
    @Input() currentPageNum: number;
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    dataInfo: AccidentDisastersModel;
    commanderInfos: CommanderInfoModel;
    teamInfos: CommanderInfoModel[];
    accidentEnum = AccidentEnum;
    disasterLevel = DisasterLevelEnum;

    constructor(private dataService: AccidentDisastersListService, public message?: NzMessageService) {
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

    sendMsg() {
        this.message.success('发送信息成功');
    }

    async getAccidentDisastersDetail() {
        await this.dataService.getAccidentDisastersList({
            id: this.accidentEnum.HazardousChemicals,
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
        this.getAccidentDisastersDetail();
    }
}
