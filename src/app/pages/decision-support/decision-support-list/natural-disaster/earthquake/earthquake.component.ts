import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-earthquake',
    templateUrl: './earthquake.component.html',
    styleUrls: ['./earthquake.component.less']
})
export class EarthquakeComponent implements OnInit {
    @Input() id: number;
    @Input() type: number;

    constructor() {
    }

    ngOnInit(): void {
        console.log(this.id);
        console.log(this.type);
    }

}
