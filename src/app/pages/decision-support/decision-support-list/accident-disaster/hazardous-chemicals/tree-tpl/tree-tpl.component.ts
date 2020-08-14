import {Component, Input, OnInit} from '@angular/core';
import {
    CitiesNameService,
    DepartInfoModel,
    UpdateScheduleDTO
} from '../../../../../../services/biz-services/earthquake-warning-list.service';

@Component({
    selector: 'app-tree-tpl',
    templateUrl: './tree-tpl.component.html',
    styleUrls: ['./tree-tpl.component.less'],
})
export class TreeTplComponent implements OnInit {
    @Input() currentNum;
    @Input() cityName;
    process: string;
    @Input() responsibilityEntities: DepartInfoModel[];
    isVisible = false;
    isWithVisible = false;
    data: DepartInfoModel;
    scheduleParam: UpdateScheduleDTO;
    tabId: number;
    tabs = [
        {
            id: 1,
            name: '省军区'
        },
        {
            id: 2,
            name: '武警江苏省总队'
        },
        {
            id: 3,
            name: '事发地人民政府'
        },
        {
            id: 4,
            name: '事发单位'
        },
        {
            id: 5,
            name: '其他配合部门'
        },
        {
            id: 6,
            name: '其他配合部门'
        }
    ];

    constructor(private dataService: CitiesNameService) {
        this.tabId = 1;
        this.scheduleParam = {id: null, completeSchedule: ''};
        this.process = '';
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
            console.log(res);
            this.data = res.responsibilityEntities;
            console.log(this.data);
            this.isVisible = true;
        });
    }

    showBigModal(id, e) {
        this.data = this.responsibilityEntities.find((item) => {
            return item.id === id;
        });
        this.isWithVisible = true;
    }

    submitBtu() {
        const object = {
            id: this.data.id,
            completeSchedule: this.process
        };
        this.dataService.getSchedule(object).subscribe(res => {
            this.isVisible = false;
        });
    }

    ngOnInit(): void {
    }
}
