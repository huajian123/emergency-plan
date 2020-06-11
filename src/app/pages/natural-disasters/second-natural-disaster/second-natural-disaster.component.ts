import {Component, OnInit} from '@angular/core';
import {NaturalDisastersListService} from '../../../services/biz-services/natural-disasters-list.service';


export enum PageTypeEnum {
    MainPage,
    indexControl
}

@Component({
    selector: 'app-second-natural-disaster',
    templateUrl: './second-natural-disaster.component.html',
    styleUrls: ['./second-natural-disaster.component.less']
})
export class SecondNaturalDisasterComponent implements OnInit {
    indexControl: number; // 防汛防旱
    id: number;
    currentPageNum: number;
    pageTypeEnum = PageTypeEnum;
    dataInfo: [];
    colorArray: any;
    isTrue: boolean;

    // 回跳主页
    goMainPage() {
        this.currentPageNum = this.pageTypeEnum.MainPage;
    }


    goDetailPlan(params) {
        this.indexControl = params;
        this.currentPageNum = this.pageTypeEnum.indexControl;
    }

    constructor(private dataService: NaturalDisastersListService) {
        this.isTrue = true;
        this.id = 1;
        this.currentPageNum = this.pageTypeEnum.MainPage;
        this.dataInfo = [];
        this.colorArray = [
            '#28B8D3',
            '#D65BD1',
            '#F58A77',
            '#8678FD',
            '#589EFF',
            '#F7A656',
            '#fedcbd',
            '#7f7522',
            '#224b8f',
            '#64492b',
            '#d71345',
            '#426ab3',
            '#7f7522',
            '#444693',
            '#402e4c'
        ];
    }

    getNaturalListInfo(params) {
        this.id = params;
        this.dataService.getNaturalDisastersList(this.id).subscribe((data) => {
            data.forEach((item, index) => {
                const valueColumn = {
                    value: item.plainName,
                    key: index
                };
                // @ts-ignore
                this.dataInfo.push(valueColumn);
            });


        });


    }

    ngOnInit(): void {
        this.getNaturalListInfo(this.id);
    }

}
