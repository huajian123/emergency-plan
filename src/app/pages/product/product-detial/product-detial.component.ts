import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-product-detial',
    templateUrl: './product-detial.component.html',
    styleUrls: ['./product-detial.component.less']
})
export class ProductDetialComponent implements OnInit {
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    @Input() currentPageNum: number;

    constructor() {
        this.returnBack = new EventEmitter<any>();
    }

    returnBackToList() {
        this.returnBack.emit({refesh: false, pageNo: this.currentPageNum});
    }

    ngOnInit(): void {
    }

}
