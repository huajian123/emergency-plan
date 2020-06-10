import {Component, OnInit} from '@angular/core';


export enum PageTypeEnum {
    MainPage,
    FloodDroughtControl, // 防汛防旱
    EarthquakeEmergency, // 地震应急
    MeteorologicalDisasters, // 气象灾害
    NaturalDisasters, // 自然灾害
    GeologicalDisasters, // 地质灾害
    TyphoonEmergency  // 台风灾害
}

@Component({
    selector: 'app-second-natural-disaster',
    templateUrl: './second-natural-disaster.component.html',
    styleUrls: ['./second-natural-disaster.component.less']
})
export class SecondNaturalDisasterComponent implements OnInit {
    currentPageNum: number;
    pageTypeEnum = PageTypeEnum;

    // 回跳主页
    goMainPage() {
        this.currentPageNum = this.pageTypeEnum.MainPage;
    }

    goDetailPlan() {
        this.currentPageNum = this.pageTypeEnum.FloodDroughtControl;
    }

    constructor() {
        this.currentPageNum = this.pageTypeEnum.MainPage;
    }

    ngOnInit(): void {
    }

}
