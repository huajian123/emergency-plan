import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageTypeEnum} from '../../../core/vo-common/BusinessEnum';
import {NzMessageService} from 'ng-zorro-antd';


@Component({
    selector: 'app-region-city-detail',
    templateUrl: './region-city-detail.component.html',
    styleUrls: ['./region-city-detail.component.less']
})
export class RegionCityDetailComponent implements OnInit {
    currentPage: number;
    pageTypeEnum = PageTypeEnum;
    @Output() returnBack: EventEmitter<any>;
    @Input() data: {
        object: {
            deptName: '',
            deptPhone: '',
            resyName: '',
            resyDetail: ''
        },
        array: Array<number>
    };


    constructor(public message?: NzMessageService) {
        this.returnBack = new EventEmitter<any>();

    }

    sendMsg() {
        this.message.success('已通知管理员');
    }

    returnToList() {
        this.returnBack.emit();
    }

    ngOnInit(): void {
    }
}
