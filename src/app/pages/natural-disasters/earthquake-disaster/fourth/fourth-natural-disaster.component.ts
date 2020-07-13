import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CitiesNameService} from '../../../../services/biz-services/earthquake-warning-list.service';

export interface FourthCitiesModel {
    countName: string;
    emergencyUrl: string;
}

@Component({
    selector: 'app-fourth-natural-disaster',
    templateUrl: './fourth-natural-disaster.component.html',
    styleUrls: ['./fourth-natural-disaster.component.less']
})
export class FourthEarthquakeDisasterComponent implements OnInit {
    type: number;
    cityId: number;
    cityName: FourthCitiesModel;

    constructor(private activatedRoute: ActivatedRoute, private dataService: CitiesNameService) {
        this.cityId = null;
        this.cityName = {
            countName: '',
            emergencyUrl: ''
        };
    }

    linkToEmergency() {
        window.open('this.cityName.emergencyUrl', '_blank');
    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(param => {
            this.cityId = param.cityId;
            this.type = param.type;
            this.dataService.getNameList({id: this.cityId, type: this.type}).subscribe(res => {
                this.cityName = res;
            });
        });

    }

}
