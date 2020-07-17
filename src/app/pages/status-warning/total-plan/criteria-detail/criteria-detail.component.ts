import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CitiesNameModel, CitiesNameService} from '../../../../services/biz-services/earthquake-warning-list.service';
import {
    OptionsInterface,
    SelectedInterface
} from '../../natural-disaster-warning/earthquake-warning/earthquake-warning.component';

export interface Indicator {
    oneLevel: string[];
    twoLevel: string[];
    disasterName: string;
}

@Component({
    selector: 'app-criteria-detail',
    templateUrl: './criteria-detail.component.html',
    styleUrls: ['./criteria-detail.component.less']
})
export class CriteriaDetailComponent implements OnInit {

    provinceData: OptionsInterface[];
    cityData: OptionsInterface[];
    selected: SelectedInterface;
    dataInfo: CitiesNameModel[];
    disabled: boolean;
    @Input() indicator: Indicator;
    @Output() returnBack: EventEmitter<any>;

    constructor(private dataService: CitiesNameService) {
        this.indicator = {oneLevel: [], twoLevel: [], disasterName: ''};
        this.disabled = false;
        this.provinceData = [];
        this.cityData = [];
        this.selected = {
            province: '',
            city: ''
        };
        this.returnBack = new EventEmitter<any>();
    }

    async getEarthquakeWarningList() {
        await this.dataService.getCitiesNameList().subscribe(res => {
            this.dataInfo = res;
            res.forEach(item => {
                this.provinceData.push({value: item.id, label: item.cityName});
            });
        });
    }


    returnToBack() {
        this.returnBack.emit();
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
