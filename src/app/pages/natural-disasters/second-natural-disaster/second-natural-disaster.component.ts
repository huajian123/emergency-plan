import {Component, OnInit} from '@angular/core';
import {NaturalDisastersListService} from '../../../services/biz-services/natural-disasters-list.service';
import {PageTypeEnum} from 'src/app/core/vo-common/BusinessEnum';


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
    colorArray: any;
    itemId: number;

    // 回跳主页
    goMainPage() {
        this.currentPageNum = this.pageTypeEnum.List;
    }


    goDetailPlan(param) {
        this.itemId = param;
        this.currentPageNum = this.pageTypeEnum.DetailOrExamine;
    }

    constructor(private dataService: NaturalDisastersListService) {
        this.id = 1;
        this.currentPageNum = this.pageTypeEnum.List;
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
                    key: index,
                    id: item.id,
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
