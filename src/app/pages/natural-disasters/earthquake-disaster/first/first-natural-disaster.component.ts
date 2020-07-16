import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
    CommanderInfoModel,
    NaturalDisastersListService,
    NaturalDisastersModel
} from '../../../../services/biz-services/natural-disasters-list.service';
import {DisasterLevelEnum, NaturalEnum} from '../../../../core/vo-common/BusinessEnum';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
    selector: 'app-first-natural-disaster',
    templateUrl: './first-natural-disaster.component.html',
    styleUrls: ['./first-natural-disaster.component.less']
})
export class FirstEarthquakeDisasterComponent implements OnInit {
    @Input() currentPageNum: number;
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    dataInfo: NaturalDisastersModel;
    commanderInfos: CommanderInfoModel;
    teamInfos: CommanderInfoModel[];
    naturalEnum = NaturalEnum;
    disasterLevel = DisasterLevelEnum;

    constructor(private dataService: NaturalDisastersListService, public message?: NzMessageService) {
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

    async getNaturalDisastersDetail() {
        await this.dataService.getNaturalDisastersList({
            id: this.naturalEnum.Earthquake,
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
        this.getNaturalDisastersDetail();
    }
}
