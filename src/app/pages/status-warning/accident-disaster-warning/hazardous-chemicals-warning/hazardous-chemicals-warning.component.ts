import {Component, OnInit} from '@angular/core';
import {CitiesNameModel, CitiesNameService} from 'src/app/services/biz-services/earthquake-warning-list.service';

export interface OptionsInterface {
    value: number;
    label: string;
}

export interface SelectedInterface {
    province: string;
    city: string;
}

@Component({
    selector: 'app-hazardous-chemicals-warning',
    templateUrl: './hazardous-chemicals-warning.component.html',
    styleUrls: ['./hazardous-chemicals-warning.component.less']
})
export class HazardousChemicalsWarningComponent implements OnInit {
    provinceData: OptionsInterface[];
    cityData: OptionsInterface[];
    selected: SelectedInterface;
    dataInfo: CitiesNameModel[];
    disabled: boolean;


    constructor(private dataService: CitiesNameService) {
        this.disabled = false;
        this.provinceData = [];
        this.cityData = [];
        this.selected = {
            province: '',
            city: ''
        };
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
