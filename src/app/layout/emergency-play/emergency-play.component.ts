import {Component, OnInit} from '@angular/core';
import {PlanListService} from "../../services/biz-services/plan-list.service";

@Component({
    selector: 'app-emergency-play',
    templateUrl: './emergency-play.component.html',
    styleUrls: ['./emergency-play.component.less']
})
export class EmergencyPlayComponent implements OnInit {

    constructor(public dataService: PlanListService) {
    }

    downFile() {
        this.dataService.downLoadPlan('file\/《江苏省水上搜救应急预案》.docx', '《江苏省水上搜救应急预案》.docx').subscribe((res) => {
            console.log(res);
        });
    }

    ngOnInit(): void {
    }

}
