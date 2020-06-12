import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {NaturalDisastersListService, CommanderInfoModel} from 'src/app/services/biz-services/natural-disasters-list.service';

@Component({
    selector: 'app-natural-disaster-plan',
    templateUrl: './natural-disaster-plan.component.html',
    styleUrls: ['./natural-disaster-plan.component.less']
})
export class NaturalDisasterPlanComponent implements OnInit {
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    commanderInfo: CommanderInfoModel;
    teamInfo: CommanderInfoModel[];

    constructor(private dataService: NaturalDisastersListService) {
        this.returnBack = new EventEmitter<any>();
        this.commanderInfo = {
            departmentName: '',
            departmentPhone: '',
            responsibilityName: '',
            responsibilityDetail: '',
        };
        this.teamInfo = [];
    }

    // 返回
    goMainPage() {
        this.returnBack.emit();
    }

    planDetailFn(id) {
        this.id = id;
        this.dataService.getNaturalDisastersPlan(this.id).subscribe((data) => {
            data.forEach((item, index) => {
                if (item.grade === '0') {
                    this.commanderInfo = {
                        responsibilityName: item.responsibilityName,
                        departmentName: item.departmentName,
                        responsibilityDetail: item.responsibilityDetail,
                        departmentPhone: item.departmentPhone,
                    };
                } else if (item.grade === '1') {
                    const res = {
                        responsibilityName: item.responsibilityName,
                        departmentName: item.departmentName,
                        responsibilityDetail: item.responsibilityDetail,
                        departmentPhone: item.departmentPhone,
                    };
                    this.teamInfo.push(res);
                }
            });
        });

    }

    ngOnInit(): void {
        this.planDetailFn(this.id);
    }

}
