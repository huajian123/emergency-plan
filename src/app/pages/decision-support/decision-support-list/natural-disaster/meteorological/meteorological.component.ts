import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-meteorological',
    templateUrl: './meteorological.component.html',
    styleUrls: ['./meteorological.component.less']
})
export class MeteorologicalComponent implements OnInit {
    @Input() id: number;
    @Input() type: number;

    constructor() {
    }

    ngOnInit(): void {
        console.log(this.id);
        console.log(this.type);
    }

}
