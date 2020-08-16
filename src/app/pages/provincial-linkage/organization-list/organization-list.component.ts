import {Component, Input, OnInit} from '@angular/core';
import {ProvincialLinkageModel, ProvincialLinkageService} from '../../../services/biz-services/provincial-linkage.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
    selector: 'app-organization-list',
    templateUrl: './organization-list.component.html',
    styleUrls: ['./organization-list.component.less']
})
export class OrganizationListComponent implements OnInit {
    data: ProvincialLinkageModel;
    @Input() accidentId: number;
    @Input() accidentType: number;
    @Input() planGrade: number;

    constructor(public dataService: ProvincialLinkageService, public message?: NzMessageService) {
        this.data = {
            office: [],
            bureau: [],
        };
    }

    goPage(url: string) {
        window.open(url, '_blank');
    }

    getDataList() {
        this.dataService.getProvincialLinkage(this.accidentId, this.accidentType, this.planGrade).subscribe(res => {
            if (res) {
                this.data = res;
            }
        });
    }

    sendMsg() {
        this.message.success('已通知管理员');
    }

    ngOnInit(): void {
        this.getDataList();
    }

}
