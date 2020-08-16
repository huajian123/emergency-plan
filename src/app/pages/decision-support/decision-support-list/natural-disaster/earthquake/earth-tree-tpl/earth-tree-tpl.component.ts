import {Component, Input, OnInit} from '@angular/core';
import {
    CitiesNameService,
    DepartInfoModel,
    ResponsibilityEntitiesModel,
    UpdateScheduleDTO
} from '../../../../../../services/biz-services/earthquake-warning-list.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
    selector: 'app-earth-tree-tpl',
    templateUrl: './earth-tree-tpl.component.html',
    styleUrls: ['./earth-tree-tpl.component.less']
})
export class EarthTreeTplComponent implements OnInit {
    tabId: number;
    @Input() currentNum;
    @Input() cityName;
    @Input() responsibilityEntities: DepartInfoModel[];
    isVisible: boolean;
    isWithVisible: boolean;
    data: ResponsibilityEntitiesModel;
    scheduleParam: UpdateScheduleDTO;
    tabContent: ResponsibilityEntitiesModel[];

    constructor(private dataService: CitiesNameService, public message: NzMessageService) {
        this.scheduleParam = {id: null, completeSchedule: ''};
        this.isWithVisible = false;
        this.isVisible = false;
        this.tabContent = [];

    }

    chooseTab(typeNum) {
        this.tabId = typeNum;
    }


    showModal(id, e) {
        this.dataService.getGroupInfo({id, cityName: this.cityName}).subscribe(res => {
            this.data = res.responsibilityEntities;
            this.isVisible = true;
        });
    }

    showBigModal(id, e) {
        this.dataService.getGroupIdInfo({id, cityName: this.cityName}).subscribe(res => {
            this.tabContent = res;
            this.tabId = this.tabContent[0].id;
            this.isWithVisible = true;
        });
    }

    submitBtu() {
        const object = {
            id: this.data.id,
            completeSchedule: this.data.completeSchedule
        };
        this.dataService.getSchedule(object).subscribe(res => {
            this.isVisible = false;
        });
    }

    submitWithBtu() {
        const temp = this.tabContent.find((item) => item.id === this.tabId);
        const objects = {
            id: this.tabId,
            completeSchedule: temp.completeSchedule
        };
        this.dataService.getSchedule(objects).subscribe(res => {
            this.message.success('修改成功');
        });
    }

    /*关闭弹窗一二*/
    handleCancel() {
        this.isVisible = false;
    }

    /*关闭弹窗三*/
    handlerCancel() {
        this.isWithVisible = false;
    }

    ngOnInit(): void {
    }
}
