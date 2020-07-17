import {Component, OnInit} from '@angular/core';
import {CitiesNameModel, CitiesNameService} from '../../../../services/biz-services/earthquake-warning-list.service';
import {
    OptionsInterface,
    SelectedInterface
} from '../../accident-disaster-warning/hazardous-chemicals-warning/hazardous-chemicals-warning.component';

@Component({
    selector: 'app-food-safety-warning',
    templateUrl: './food-safety-warning.component.html',
    styleUrls: ['./food-safety-warning.component.less']
})
export class FoodSafetyWarningComponent implements OnInit {
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
