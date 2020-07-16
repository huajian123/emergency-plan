import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
    selector: 'app-region-list',
    templateUrl: './region-list.component.html',
    styleUrls: ['./region-list.component.less']
})
export class RegionListComponent implements OnInit {
    @Output() returnCityName: EventEmitter<string>;

    constructor() {
        this.returnCityName = new EventEmitter<string>();
    }

    async goDetail(e) {
        this.returnCityName.emit(e);
    }


    ngOnInit(): void {

    }

}
