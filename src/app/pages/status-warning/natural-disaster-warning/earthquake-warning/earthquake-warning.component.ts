import {Component, OnInit} from '@angular/core';
import {CitiesNameModel, CitiesNameService} from 'src/app/services/biz-services/earthquake-warning-list.service';
import {NzMessageService} from 'ng-zorro-antd';

export interface OptionsInterface {
    value: number;
    label: string;
}

export interface SelectedInterface {
    province: string;
    city: string;
}

@Component({
    selector: 'app-earthquake-warning',
    templateUrl: './earthquake-warning.component.html',
    styleUrls: ['./earthquake-warning.component.less']
})
export class EarthquakeWarningComponent implements OnInit {
    provinceData: OptionsInterface[];
    cityData: OptionsInterface[];
    selected: SelectedInterface;
    dataInfo: CitiesNameModel[];
    disabled: boolean;


    constructor(private dataService: CitiesNameService, public message?: NzMessageService) {
        this.disabled = false;
        this.provinceData = [];
        this.cityData = [];
        this.selected = {
            province: '',
            city: ''
        };
    }

    start() {
        this.message.success('请选择所在地区范围');
    }

    async getEarthquakeWarningList() {
        await this.dataService.getCitiesNameList().subscribe(res => {
            this.dataInfo = res;
            res.forEach(item => {
                this.provinceData.push({value: item.id, label: item.cityName});
            });
        });
    }

    changeProvince(eve) {
        this.cityData = [];
        this.selected.city = '';
        this.dataInfo.find(data => data.id === eve).countDTOS.forEach(item => {
            this.cityData.push({value: item.id, label: item.countName});
        });
        this.disabled = true;
    }

    ngOnInit(): void {
        this.getEarthquakeWarningList();
    }

}
