import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
    selector: 'app-level-two',
    templateUrl: './level-two.component.html',
    styleUrls: ['./level-two.component.less']
})
export class LevelTwoComponent implements OnInit {
    radioOne: string;
    radioTwo: string;
    radioThree: string;
    radioFour: string;
    radioFive: string;
    radioSix: string;
    radioSeven: string;
    radioEight: string;
    radioNine: string;

    constructor(public message?: NzMessageService) {
        this.radioOne = '进行中';
        this.radioTwo = '进行中';
        this.radioThree = '进行中';
        this.radioFour = '进行中';
        this.radioFive = '进行中';
        this.radioSix = '进行中';
        this.radioSeven = '进行中';
        this.radioEight = '进行中';
        this.radioNine = '进行中';
    }

    OnSendMsg(): void {
        this.message.success('发送信息');
    }

    OnOverMsg(): void {
        this.message.success('应急结束');
    }

    ngOnInit(): void {
    }

}
