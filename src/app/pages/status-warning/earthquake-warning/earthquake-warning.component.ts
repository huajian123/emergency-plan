import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-earthquake-warning',
    templateUrl: './earthquake-warning.component.html',
    styleUrls: ['./earthquake-warning.component.less']
})
export class EarthquakeWarningComponent implements OnInit {
    selectedProvince = '浙江';
    selectedCity = '杭州';
    provinceData = ['浙江', '江苏', '安徽'];
    cityData: { [place: string]: string[] } = {
        浙江: ['杭州', '宁波', '温州'],
        江苏: ['南京', '苏州', '镇江'],
        安徽: ['合肥', '滁州', '安庆']
    };

    clickAlert() {
        console.log('1');
    }

    provinceChange(value: string): void {
        this.selectedCity = this.cityData[value][0];
    }

    constructor() {
    }

    ngOnInit(): void {

    }

}
