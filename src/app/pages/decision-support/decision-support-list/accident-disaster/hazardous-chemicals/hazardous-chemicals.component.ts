import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {
    CitiesNameModel,
    CitiesNameService,
    DepartInfoModel
} from '../../../../../services/biz-services/earthquake-warning-list.service';
import {
    OptionsInterface,
    SelectedInterface
} from '../../../../status-warning/natural-disaster-warning/earthquake-warning/earthquake-warning.component';
import {AccidentDisastersListService} from 'src/app/services/biz-services/accident-disasters-list.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {debounceTime, distinctUntilChanged, first, map, tap} from 'rxjs/operators';

export enum VariableEnum {
    one = 1,
    two = 2,
    three = 3,
    four = 4
}

@Component({
    selector: 'app-hazardous-chemicals',
    templateUrl: './hazardous-chemicals.component.html',
    styleUrls: ['./hazardous-chemicals.component.less']
})
export class HazardousChemicalsComponent implements OnInit {
    isShowStandard: boolean; // 是否展开标准
    @Input() id: number;
    currentPage: number;
    numVariable = VariableEnum;
    validateForm: FormGroup;
    provinceData: OptionsInterface[];
    cityData: OptionsInterface[];
    selected: SelectedInterface;
    dataInfo: CitiesNameModel[];
    responsibilityEntities: DepartInfoModel[];

    constructor(private fb: FormBuilder, private dataService: CitiesNameService, private dataServicers: AccidentDisastersListService,
                public message: NzMessageService, private modal: NzModalService) {
        this.provinceData = [];
        this.cityData = [];
        this.selected = {
            province: '',
            city: ''
        };
        this.isShowStandard = true;
        this.currentPage = 0;
        this.responsibilityEntities = [];
    }

    submitForm() {
    }

    initForm() {
        this.validateForm = this.fb.group({
            peopleDie: [null],
            peoplePoisoning: [null],
            economicLoss: [null],
            peopleLoss: [null],
            toxicGas: [null],
            cityId: [null],
            areaId: [null],
        });
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

    async subForm() {
        this.validateForm.valueChanges.pipe(debounceTime(1000), distinctUntilChanged()).subscribe(res => {
            res.accidentId = this.id;
            this.dataServicers.getDecideGrade(res).subscribe(grade => {
                const cityName = this.provinceData.find((item) => item.value === res.cityId)?.label || '';
                const areaName = this.cityData.find((item) => item.value === res.areaId)?.label || '';
                const paramAreaName = `${cityName}${areaName}` || ' ';
                this.dataService.getGroupInfo({
                    accidentId: this.id,
                    cityName: paramAreaName,
                    grade
                }).subscribe(result => {
                    this.responsibilityEntities = result.responsibilityEntities;
                    console.log(   this.responsibilityEntities );
                    this.currentPage = grade;
                    console.log(this.currentPage);
                });
            });
        });
    }

    ngOnInit(): void {
        this.initForm();
        this.getEarthquakeWarningList();
        this.subForm();
    }

}
