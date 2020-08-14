import {Component, Input, OnInit} from '@angular/core';
import {
    CitiesNameService,
    DepartInfoModel,
    DepartInfoTabModel,
    UpdateScheduleDTO,
} from '../../../../../../services/biz-services/earthquake-warning-list.service';

@Component({
    selector: 'app-tree-tpl',
    templateUrl: './tree-tpl.component.html',
    styleUrls: ['./tree-tpl.component.less'],
})
export class TreeTplComponent implements OnInit {
    @Input() currentNum;
    @Input() cityName;
    @Input() responsibilityEntities: DepartInfoModel[];
    isVisible = false;
    isWithVisible = false;
    data: DepartInfoModel;
    scheduleParam: UpdateScheduleDTO;
    tabId: number;
    tabData: DepartInfoTabModel[];
    tabContent: DepartInfoTabModel;

    constructor(private dataService: CitiesNameService) {
        this.tabId = 1;
        this.scheduleParam = {id: null, completeSchedule: ''};
        this.tabData = [];
    }

    chooseTab(type) {
        this.tabId = type;
    }

    /*关闭弹窗一二*/
    handleCancel() {
        this.isVisible = false;
    }

    /*关闭弹窗三*/
    handlerCancel() {
        this.isWithVisible = false;
    }

    showModal(id, e) {
        this.dataService.getGroupInfo({id, cityName: this.cityName}).subscribe(res => {
            this.data = res.responsibilityEntities;
            this.isVisible = true;
        });
    }

    showBigModal(id, e) {
        this.dataService.getGroupIdInfo({id, cityName: this.cityName}).subscribe(res => {
            const tabDataObject = {
                id: res.id,
                responsibilityName: res.responsibilityName
            };
            this.tabData.push(tabDataObject);
            this.tabContent = res;
            this.isWithVisible = true;
        });
        /*console.log(this.tabData);
        console.log(this.data);*/
    }

    submitBtu() {
        const object = {
            id: this.data.id,
            completeSchedule: this.data.completeSchedule
        };
        this.dataService.getSchedule(object).subscribe(res => {
            if (this.isVisible) {
                return !this.isVisible;
            }
            if (this.isWithVisible) {
                return !this.isWithVisible;
            }
        });
    }

    ngOnInit(): void {
    }
}
