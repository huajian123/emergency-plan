import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlanDeptResyEntitiesDTOS, PlanDetailModel, PlanListService} from 'src/app/services/biz-services/plan-list.service';

@Component({
    selector: 'app-plans-detail',
    templateUrl: './plans-detail.component.html',
    styleUrls: ['./plans-detail.component.less']
})
export class PlansDetailComponent implements OnInit {
    @Input() currentPageNum: number;
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    dataInfo: PlanDetailModel;
    commanderInfos: PlanDeptResyEntitiesDTOS;
    teamInfos: PlanDeptResyEntitiesDTOS[];

    constructor(private dataService: PlanListService) {
        this.dataInfo = {
            id: null,
            accidentType: null,
            planName: '',
            planDeptResyEntities: [],
        };
        this.teamInfos = [];
        this.commanderInfos = {
            id: null,
            resyId: null,
            resyName: '',
            resyDetail: '',
            deptId: null,
            deptName: '',
            deptPhone: '',
            grade: null
        };
        this.returnBack = new EventEmitter<any>();
    }

    async getDetail() {
        await this.dataService.getPlanDetail(this.id).subscribe(res => {
            this.dataInfo = res;
            this.dataInfo.planDeptResyEntities.forEach(item => {
                if (item.grade === 0) {
                    this.commanderInfos = {
                        resyName: item.resyName,
                        resyDetail: item.resyDetail,
                        deptPhone: item.deptPhone,
                        deptName: item.deptName
                    };
                } else if (item.grade === 1) {
                    const data = {
                        resyName: item.resyName,
                        resyDetail: item.resyDetail,
                        deptPhone: item.deptPhone,
                        deptName: item.deptName
                    };
                    this.teamInfos.push(data);
                }
            });
        });
    }

    returnToList() {
        this.returnBack.emit({refesh: false, pageNo: this.currentPageNum});
    }

    ngOnInit(): void {
        this.getDetail();
    }

}
