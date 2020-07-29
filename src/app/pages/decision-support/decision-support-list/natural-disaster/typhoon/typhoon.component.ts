import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-typhoon',
    templateUrl: './typhoon.component.html',
    styleUrls: ['./typhoon.component.less']
})
export class TyphoonComponent implements OnInit {
    @Input() id: number;
    @Input() type: number;

    constructor() {
    }

    ngOnInit(): void {
        console.log(this.id);
        console.log(this.type);
    }

}
