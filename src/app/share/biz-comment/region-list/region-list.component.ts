import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-region-list',
    templateUrl: './region-list.component.html',
    styleUrls: ['./region-list.component.less']
})
export class RegionListComponent implements OnInit {
    @Output() clickCity: EventEmitter<any>;
    @Input() kind: string;
    @Input() level: number;

    constructor() {
        this.clickCity = new EventEmitter<boolean>();
    }

    ceshi(id?) {
        const data = [1, 3, 4];
        this.clickCity.emit(data);
    }

    ngOnInit(): void {
        console.log(this.kind);
        console.log(this.level);
    }

}
