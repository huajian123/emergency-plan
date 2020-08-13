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

    constructor() {
        this.isNum = null;
        this.isArray = [false, false, false, false, false, false, false, false, false];
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
