import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
    selector: 'app-level-two',
    templateUrl: './level-two.component.html',
    styleUrls: ['./level-two.component.less']
})
export class LevelTwoComponent implements OnInit {
    constructor(public message?: NzMessageService) {
    }
    ngOnInit(): void {
    }

}
