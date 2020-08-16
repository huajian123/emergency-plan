import {Component, Input, OnInit} from '@angular/core';
import {
    CitiesNameService,
    DepartInfoModel,
    ResponsibilityEntitiesModel,
    UpdateScheduleDTO
} from '../../../../../../services/biz-services/earthquake-warning-list.service';
import {NzMessageService} from 'ng-zorro-antd';
import {UserRole} from '../../../../../../VO/types';
import {EVENT_KEY} from '../../../../../../../environments/staticVariable';

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
    bigModalData: ResponsibilityEntitiesModel;
    scheduleParam: UpdateScheduleDTO;
    tabContent: ResponsibilityEntitiesModel[];
    userRole: number;
    userRoleEnum = UserRole;
    setInterval: any;

    constructor(private dataService: CitiesNameService, public message: NzMessageService) {
        this.scheduleParam = {id: null, completeSchedule: ''};
        this.isWithVisible = false;
        this.isVisible = false;
        this.tabContent = [];

    }

    // 获取配合部门详情
    getGroupIdInfoDetail(id) {
        this.dataService.getGroupIdInfoDetail(id).subscribe((res) => {
            this.bigModalData = res;
            this.isWithVisible = true;
        });
    }

    chooseTab(typeNum) {
        clearInterval(this.setInterval);
        this.setInterval = setInterval(() => {
            this.tabId = typeNum;
            this.getGroupIdInfoDetail(typeNum);
        }, 50);
    }


    showModal(id, e) {
        clearInterval(this.setInterval);
        this.dataService.getGroupInfo({id, cityName: this.cityName}).subscribe(res => {
            this.data = res.responsibilityEntities;
            console.log(res);
            this.isVisible = true;
            this.setInterval = setInterval(() => {
                if (this.userRole === this.userRoleEnum.User) {
                    this.dataService.getGroupInfo({id, cityName: this.cityName}).subscribe((res2) => {
                        this.data = res2.responsibilityEntities;
                    });
                }
            }, 50);
        });
    }

    showBigModal(id, e) {
        // this.getGroupIdInfoDetail(id);
        this.dataService.getGroupIdInfo({id, cityName: this.cityName}).subscribe(res => {
            this.tabContent = res;
            this.tabId = this.tabContent[0].id;
            console.log(this.tabContent);
            this.getGroupIdInfoDetail(this.tabId);
        });
        /* clearInterval(this.setInterval);
         this.dataService.getGroupIdInfo({id, cityName: this.cityName}).subscribe(res => {
             this.tabContent = res;
             this.tabId = this.tabContent[0].id;
             this.bigModalData = this.tabContent.find((item) => {
                 return item.id === this.tabId;
             });
             this.isWithVisible = true;
         });
         this.setInterval = setInterval(() => {
             if (this.userRole === this.userRoleEnum.User) {
                 this.dataService.getGroupIdInfo({id, cityName: this.cityName}).subscribe(res => {
                     this.tabContent = res;
                     this.bigModalData = this.tabContent.find((item) => {
                         return item.id === this.tabId;
                     });
                     this.isWithVisible = true;
                 });
             }
         }, 5000);*/

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
        clearInterval(this.setInterval);
    }

    /*关闭弹窗三*/
    handlerCancel() {
        this.isWithVisible = false;
        clearInterval(this.setInterval);
    }

    ngOnInit(): void {
        this.userRole = JSON.parse(window.sessionStorage.getItem(EVENT_KEY.loginInfo)).role;
    }
}
