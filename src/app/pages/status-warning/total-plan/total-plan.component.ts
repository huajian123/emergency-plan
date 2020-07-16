import { Component, OnInit } from '@angular/core';
import {CitiesNameModel, CitiesNameService} from '../../../services/biz-services/earthquake-warning-list.service';

export interface OptionsInterface {
  value: number;
  label: string;
}

export interface SelectedInterface {
  province: string;
  city: string;
}


@Component({
  selector: 'app-total-plan',
  templateUrl: './total-plan.component.html',
  styleUrls: ['./total-plan.component.less']
})
export class TotalPlanComponent implements OnInit {
  provinceData: OptionsInterface[];
  cityData: OptionsInterface[];
  selected: SelectedInterface;
  dataInfo: CitiesNameModel[];
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
  }

  ngOnInit(): void {
    this.getEarthquakeWarningList();
  }

}
