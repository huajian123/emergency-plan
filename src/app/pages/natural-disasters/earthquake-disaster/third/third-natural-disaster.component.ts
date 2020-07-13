import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CitiesNameService} from 'src/app/services/biz-services/earthquake-warning-list.service';

export interface ThirdCitiesModel {
    cityName: string;
    emergencyUrl: string;
}

@Component({
    selector: 'app-third-natural-disaster',
    templateUrl: './third-natural-disaster.component.html',
    styleUrls: ['./third-natural-disaster.component.less']
})
export class ThirdEarthquakeDisasterComponent implements OnInit {
    type: number;
    provinceId: number;
    provinceName: ThirdCitiesModel;

    constructor(private activatedRoute: ActivatedRoute, private dataService: CitiesNameService) {
        this.provinceId = null;
        this.provinceName = {
            cityName: '',
            emergencyUrl: ''
        };
        this.type = null;
    }

    linkToEmergency() {
        window.open('this.provinceName.emergencyUrl', '_blank');
    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(param => {
            this.provinceId = param.provinceId;
            this.type = param.type;
            this.dataService.getNameList({id: this.provinceId, type: this.type}).subscribe(res => {
                this.provinceName = res;
            });
        });
    }

}
