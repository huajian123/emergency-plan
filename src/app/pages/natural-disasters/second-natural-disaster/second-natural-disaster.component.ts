import {Component, OnInit} from '@angular/core';
import {NaturalDisastersListService} from '../../../services/biz-services/natural-disasters-list.service';


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
    id: number;
    currentPageNum: number;
    pageTypeEnum = PageTypeEnum;
    dataInfo: [];

    // 回跳主页
    goMainPage() {
        this.currentPageNum = this.pageTypeEnum.MainPage;
    }

    goDetailPlan() {
        this.currentPageNum = this.pageTypeEnum.FloodDroughtControl;
    }

    constructor(private dataService: NaturalDisastersListService) {
        this.id = 1;
        this.currentPageNum = this.pageTypeEnum.MainPage;
        this.dataInfo = [];
    }

    async getNaturalListInfo(params) {
        this.id = params;
        await this.dataService.getNaturalDisastersList(this.id).subscribe((data) => {
            data.forEach(item => {
                const value = item.plainName;
                // @ts-ignore
                this.dataInfo.push(value);
                //console.log(this.dataInfo);
            });

        });


    }

    ngOnInit(): void {
        this.getNaturalListInfo(this.id);
    }

}
