import {Component, OnInit} from '@angular/core';
import {CitiesNameModel, CitiesNameService} from 'src/app/services/biz-services/earthquake-warning-list.service';

export interface OptionsInterface {
    value: number;
    label: string;
    url: string;
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

    clickAlert() {
        console.log('1');
    }

    constructor(private dataService: CitiesNameService) {
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
                this.provinceData.push({value: item.id, label: item.cityName, url: item.emergentUrl});
            });
        });
    }

    changeProvince(eve) {
        this.cityData = [];
        this.selected.city = '';
        this.dataInfo.find(data => data.id === eve).countDTOS.forEach(item => {
            this.cityData.push({value: item.id, label: item.countName, url: item.emergentUrl});
        });
    }

    ngOnInit(): void {
        this.getEarthquakeWarningList();
    }

}
