import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginInfoModel} from '../../../../core/vo-common/BusinessEnum';
import {EVENT_KEY} from '../../../../../environments/staticVariable';
import {DepartmentsManagementListService} from 'src/app/services/biz-services/department-list.service';
import {UfastValidatorsService} from 'src/app/services/http/validators.service';

@Component({
    selector: 'app-departments-add-edit',
    templateUrl: './departments-add-edit.component.html',
    styleUrls: ['./departments-add-edit.component.less']
})
export class DepartmentsAddEditComponent implements OnInit {
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    @Input() currentPageNum: number;
    validateForm: FormGroup;
    loginInfo: LoginInfoModel;

    constructor(private fb: FormBuilder, private dataService: DepartmentsManagementListService,
                private ufastValidotors: UfastValidatorsService) {
        this.returnBack = new EventEmitter<any>();
    }

    async submitForm() {
        Object.keys(this.validateForm.controls).forEach(key => {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        });
        if (this.validateForm.invalid) {
            return;
        }
        const params = this.validateForm.getRawValue();
        let submitHandel = null;
        if (!this.id) {
            params.createBy = this.loginInfo.createBy;
            submitHandel = this.dataService.addDepartments(params).subscribe();
        } else {
            params.id = this.id;
            params.updateBy = this.loginInfo.account;
            submitHandel = this.dataService.editDepartments(params).subscribe();
        }

        await submitHandel;
        this.returnBack.emit({refesh: true, pageNo: this.currentPageNum});
    }

    initForm() {
        this.validateForm = this.fb.group({
            departmentName: ['', [Validators.required]],
            departmentPhone: ['', [Validators.required, this.ufastValidotors.mobileOrTeleValidator()]],
        });
    }

    async getDetail() {
        await this.dataService.getDepartmentsDetail(this.id).subscribe((res) => {
            this.validateForm.patchValue(res);
        });
    }

    returnToList() {
        this.returnBack.emit({refesh: false, pageNo: this.currentPageNum});
    }

    ngOnInit(): void {
        this.loginInfo = JSON.parse(window.sessionStorage.getItem(EVENT_KEY.loginInfo));
        this.initForm();
        if (this.id) {
            this.getDetail();
        }
    }

}
