import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-geological',
    templateUrl: './geological.component.html',
    styleUrls: ['./geological.component.less']
})
export class GeologicalComponent implements OnInit {
    @Input() id: number;
    @Input() type: number;

    constructor() {
    }

    ngOnInit(): void {
        console.log(this.id);
        console.log(this.type);
    }

}
