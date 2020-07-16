import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommanderInfoModel, TotalPlanListService, TotalPlanModel} from '../../../../services/biz-services/total-plan-list.service';
import {DisasterLevelEnum, TotalPlan} from '../../../../core/vo-common/BusinessEnum';

@Component({
    selector: 'app-total-budget',
    templateUrl: './total-budget.component.html',
    styleUrls: ['./total-budget.component.less']
})
export class TotalBudgetComponent implements OnInit {
    @Input() currentPageNum: number;
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    dataInfo: TotalPlanModel;
    commanderInfos: CommanderInfoModel;
    teamInfos: CommanderInfoModel[];
    totalPlan = TotalPlan;
    disasterLevel = DisasterLevelEnum;

    constructor(private dataService: TotalPlanListService) {
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

    async getTotalPlanDetail() {
        await this.dataService.getTotalPlanModelList({
            id: this.totalPlan.Zero,
            planGrade: this.disasterLevel.LevelZero
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
        this.getTotalPlanDetail();
    }

}
