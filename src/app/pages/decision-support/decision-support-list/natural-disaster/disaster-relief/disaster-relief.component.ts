import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-disaster-relief',
    templateUrl: './disaster-relief.component.html',
    styleUrls: ['./disaster-relief.component.less']
})
export class DisasterReliefComponent implements OnInit {
    @Input() id: number;
    @Input() type: number;

    constructor() {
    }

    ngOnInit(): void {
        console.log(this.id);
        console.log(this.type);
    }

}
