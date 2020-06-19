import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-plans-detail',
    templateUrl: './plans-detail.component.html',
    styleUrls: ['./plans-detail.component.less']
})
export class PlansDetailComponent implements OnInit {
    @Input() currentPageNum: number;
    @Output() returnBack: EventEmitter<any>;

    constructor() {
        this.returnBack = new EventEmitter<any>();
    }

    returnToList() {
        this.returnBack.emit({refesh: false, pageNo: this.currentPageNum});
    }

    ngOnInit(): void {
    }

}
