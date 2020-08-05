import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CitiesNameModel, CitiesNameService} from '../../../../../services/biz-services/earthquake-warning-list.service';
import {
    OptionsInterface,
    SelectedInterface
} from '../../../../status-warning/natural-disaster-warning/earthquake-warning/earthquake-warning.component';
import {AccidentDisastersListService} from 'src/app/services/biz-services/accident-disasters-list.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';

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
    @Input() id: number;
    currentPage: number;
    numVariable = VariableEnum;
    validateForm: FormGroup;
    provinceData: OptionsInterface[];
    cityData: OptionsInterface[];
    selected: SelectedInterface;
    dataInfo: CitiesNameModel[];

    constructor(private fb: FormBuilder, private dataService: CitiesNameService, private dataServicers: AccidentDisastersListService,
                public message: NzMessageService, private modal: NzModalService) {
        this.provinceData = [];
        this.cityData = [];
        this.selected = {
            province: '',
            city: ''
        };
    }

    showConfirm(e): void {
        this.modal.confirm({
                nzContent: `确定启动 ${e} 级应急响应`,
                nzOnOk: () => {
                    this.currentPage = e;
                },
                nzOkText: '启动',
                nzCancelText: '关闭',
                nzOnCancel: () => {
                    console.log('未启动应急方案');
                },
            },
        )
        ;
    }

    submitForm() {
        Object.keys(this.validateForm.controls).forEach(key => {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        });
        if (this.validateForm.invalid) {
            return false;
        }
        const params = this.validateForm.getRawValue();
        params.accidentId = this.id;
        this.dataServicers.getDecideGrade(params).subscribe(res => {
            if (res != null) {
                this.showConfirm(res);
            }
        });
    }

    initForm() {
        this.validateForm = this.fb.group({
            peopleDie: [null],
            peopleInjury: [null],
            propertyLoss: [null],
            peopleLoss: [null],
            toxicGas: [null],
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

    ngOnInit(): void {
        this.initForm();
        this.getEarthquakeWarningList();
    }

}
