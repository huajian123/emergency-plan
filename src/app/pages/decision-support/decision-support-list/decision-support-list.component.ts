import {Component, OnInit} from '@angular/core';
import {MapPipe, MapSet} from '../../../share/directives/pipe/map.pipe';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface OptionsInterface {
    value: string | number;
    label: string;
}

@Component({
    selector: 'app-decision-support-list',
    templateUrl: './decision-support-list.component.html',
    styleUrls: ['./decision-support-list.component.less']
})
export class DecisionSupportListComponent implements OnInit {
    validateForm: FormGroup;
    /*中间数组变量*/
    temporaryNameOptions: OptionsInterface[];
    /*灾害类型下拉*/
    accidentTypeOptions: OptionsInterface[];
    /*自然灾害名称下拉*/
    naturalNameOptions: OptionsInterface[];
    /*事故灾害名称下拉*/
    accidentNameOptions: OptionsInterface[];
    /*公共卫生下拉*/
    publicHealthNameOptions: OptionsInterface[];
    /*社会安全下拉*/
    socialSecurityNameOptions: OptionsInterface[];

    constructor(private fb: FormBuilder) {
        this.temporaryNameOptions = [];
        this.accidentTypeOptions = [];
        this.naturalNameOptions = [];
        this.publicHealthNameOptions = [];
        this.socialSecurityNameOptions = [];
    }

    submitForm() {
        Object.keys(this.validateForm.controls).forEach(key => {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        });
    }

    changeAccidentIdValue(index) {
        this.temporaryNameOptions = [];
        if (index !== null) {
            switch (index) {
                case 1:
                    this.temporaryNameOptions = this.naturalNameOptions;
                    break;
                case 2:
                    this.temporaryNameOptions = this.accidentNameOptions;
                    break;
                case 3:
                    this.temporaryNameOptions = this.publicHealthNameOptions;
                    break;
                default:
                    this.temporaryNameOptions = this.socialSecurityNameOptions;
                    break;
            }
            this.validateForm.get('accidentId').reset();
        }
    }

    initForm() {
        this.validateForm = this.fb.group({
            accidentType: [null, [Validators.required]],
            accidentId: [null, [Validators.required]],
        });
    }

    rest() {
        this.validateForm.reset();
    }

    ngOnInit(): void {
        this.initForm();
        this.accidentTypeOptions = [...MapPipe.transformMapToArray(MapSet.accidentType)];
        this.naturalNameOptions = [...MapPipe.transformMapToArray(MapSet.naturalDisastersType)];
        this.accidentNameOptions = [...MapPipe.transformMapToArray(MapSet.accidentDisastersType)];
        this.publicHealthNameOptions = [...MapPipe.transformMapToArray(MapSet.publicHealthType)];
        this.socialSecurityNameOptions = [...MapPipe.transformMapToArray(MapSet.socialSecurityType)];
    }

}
