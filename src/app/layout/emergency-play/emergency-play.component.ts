import {Component, OnInit} from '@angular/core';
import {EmergencyPlanFileList, PlanListModel, PlanListService} from '../../services/biz-services/plan-list.service';

@Component({
    selector: 'app-emergency-play',
    templateUrl: './emergency-play.component.html',
    styleUrls: ['./emergency-play.component.less']
})
export class EmergencyPlayComponent implements OnInit {
    dataList: EmergencyPlanFileList;

    constructor(public dataService: PlanListService) {
        this.dataList = {
            allType: [],
            accidentDisaster: [],
            naturalDisaster: [],
            publicHealth: [],
            societySafety: [],
        };
    }

    downFile() {
        this.dataService.downLoadPlan('file\/《江苏省水上搜救应急预案》.docx', '《江苏省水上搜救应急预案》.docx').subscribe((res) => {
            console.log(res);
        });
    }

    getDataList() {
        this.dataService.getPlans().subscribe(res => {
            this.dataList = res;
            console.log(this.dataList);
        });
    }

    ngOnInit(): void {
        this.getDataList();
    }

}
