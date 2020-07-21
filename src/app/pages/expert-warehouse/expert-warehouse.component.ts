import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-expert-warehouse',
    templateUrl: './expert-warehouse.component.html',
    styleUrls: ['./expert-warehouse.component.less']
})
export class ExpertWarehouseComponent implements OnInit {

    formObj: { name: string; url: string; }[];

    constructor() {
        this.formObj = [
            {name: 'Poisoning', url: 'http://www.emc.gov.cn/yjjyjhxxcx/gjzdjjwl/201710/t20171030_175585.shtml'},
            {name: 'traffic', url: 'http://www.mot.gov.cn/'},
            {name: 'earthquake', url: 'http://www.nerss.cn/'},
            {name: 'Flood', url: 'http://www.cfdm.cn/CN/abstract/abstract2502.shtml'},
            {name: 'Fire', url: 'http://www.ccgp.gov.cn/cggg/zygg/zbgg/202005/t20200520_14323866.htm'},
        ];
    }

    goPage() {
        window.open('http://ajj.jiangsu.gov.cn/col/col71597/index.html', '_blank');
    }

    goOther(cityName) {
        window.open(this.formObj.find(({name}) => name === cityName).url, '_blank');
    }

    ngOnInit(): void {
    }

}
