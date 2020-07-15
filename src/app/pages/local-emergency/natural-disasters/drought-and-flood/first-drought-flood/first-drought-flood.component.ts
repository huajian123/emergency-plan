import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {PageTypeEnum} from '../../../../../core/vo-common/BusinessEnum';


@Component({
    selector: 'app-first-drought-flood',
    templateUrl: './first-drought-flood.component.html',
    styleUrls: ['./first-drought-flood.component.less']
})
export class FirstDroughtFloodComponent implements OnInit {
    @ViewChild('operationTpl', {static: true}) operationTpl: TemplateRef<any>;
    currentPage: number;
    pageTypeEnum = PageTypeEnum;
    dataList: any;

    constructor() {
        this.currentPage = this.pageTypeEnum.List;
    }

    clickCity(e) {
        console.log(e);
        this.dataList = e;
        this.currentPage = this.pageTypeEnum.DetailOrExamine;
    }


    ngOnInit(): void {
    }

}
