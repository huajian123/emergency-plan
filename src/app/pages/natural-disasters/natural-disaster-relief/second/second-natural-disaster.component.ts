import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
    CommanderInfoModel,
    NaturalDisastersListService,
    NaturalDisastersModel
} from '../../../../services/biz-services/natural-disasters-list.service';
import {NaturalEnum} from '../../../../core/vo-common/BusinessEnum';

@Component({
    selector: 'app-second-natural-disaster',
    templateUrl: './second-natural-disaster.component.html',
    styleUrls: ['./second-natural-disaster.component.less']
})
export class SecondNaturalDisasterReliefComponent implements OnInit {
    @Input() currentPageNum: number;
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    dataInfo: NaturalDisastersModel;
    commanderInfos: CommanderInfoModel;
    teamInfos: CommanderInfoModel[];
    naturalEnum = NaturalEnum;

    constructor(private dataService: NaturalDisastersListService) {
        this.dataInfo = {
            id: null,
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
        await this.dataService.getNaturalDisastersList(this.naturalEnum.NaturalRelief).subscribe(res => {
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
        this.getNaturalDisastersDetail();
    }

}
