import {Component, OnInit} from '@angular/core';
import {PageTypeEnum} from '../../../../../core/vo-common/BusinessEnum';

@Component({
    selector: 'app-first-drought-flood',
    templateUrl: './first-drought-flood.component.html',
    styleUrls: ['./first-drought-flood.component.less']
})
export class FirstDroughtFloodComponent implements OnInit {
    currentPage: number;
    pageTypeEnum = PageTypeEnum;

    constructor() {
    }

    returnToList() {
        console.log(1);
    }

    ngOnInit(): void {
    }

}
