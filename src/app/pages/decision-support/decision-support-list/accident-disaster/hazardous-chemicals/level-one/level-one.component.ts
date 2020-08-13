import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-level-one',
    templateUrl: './level-one.component.html',
    styleUrls: ['./level-one.component.less']
})
export class LevelOneComponent implements OnInit {
    isVisible = false;
    isArray: any[];
    isNum: number;
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


    constructor() {
        this.tabId = 1;
        this.isNum = null;
        this.isArray = [false, false, false, false, false, false, false, false, false];
    }

    chooseTab(type) {
        this.tabId = type;
    }

    showModal(e): void {
        this.isNum = e;
        if (e == null) {
            return;
        }
        switch (e) {
            case 0:
                this.isArray[0] = true;
                break;
            case 1:
                this.isArray[1] = true;
                break;
            case 2:
                this.isArray[2] = true;
                break;
            default:
                return;
        }
        this.isVisible = true;
    }

    handleCancel(): void {
        this.isVisible = false;
        this.isArray[this.isNum] = false;
    }

    ngOnInit(): void {
    }

}
