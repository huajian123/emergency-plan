import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-expert-warehouse',
    templateUrl: './expert-warehouse.component.html',
    styleUrls: ['./expert-warehouse.component.less']
})
export class ExpertWarehouseComponent implements OnInit {

    constructor() {
    }

    goPage() {
        window.open('http://ajj.jiangsu.gov.cn/col/col71597/index.html', '_blank');
    }

    ngOnInit(): void {
    }

}
