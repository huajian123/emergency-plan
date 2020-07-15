import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccidentEnum, DisasterLevelEnum} from 'src/app/core/vo-common/BusinessEnum';
import {
    AccidentDisastersListService,
    AccidentDisastersModel,
    CommanderInfoModel
} from 'src/app/services/biz-services/accident-disasters-list.service';


@Component({
    selector: 'app-second-accident-disaster',
    templateUrl: './second-accident-disaster.component.html',
    styleUrls: ['./second-accident-disaster.component.less']
})
export class SecondAlgaeOutbreakComponent implements OnInit {
    @Input() currentPageNum: number;
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    dataInfo: AccidentDisastersModel;
    commanderInfos: CommanderInfoModel;
    teamInfos: CommanderInfoModel[];
    accidentEnum = AccidentEnum;
    disasterLevel = DisasterLevelEnum;

    constructor(private dataService: AccidentDisastersListService) {
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

    async getAccidentDisastersDetail() {
        await this.dataService.getAccidentDisastersList({
            id: this.accidentEnum.AlgaeOutbreak,
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
