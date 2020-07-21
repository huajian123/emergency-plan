import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EVENT_KEY} from '../../../../../environments/staticVariable';
import {LoginInfoModel} from '../../../../core/vo-common/BusinessEnum';
import {UserManageService} from 'src/app/services/biz-services/user-list.service';

@Component({
    selector: 'app-user-add-edit',
    templateUrl: './user-add-edit.component.html',
    styleUrls: ['./user-add-edit.component.less']
})
export class UserAddEditComponent implements OnInit {
    validateForm: FormGroup;
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    @Input() currentPageNum: number;
    loginInfo: LoginInfoModel;
    isTrue: boolean;

    constructor(private fb: FormBuilder, private dataService: UserManageService) {
        this.isTrue = false;
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
            params.role = this.loginInfo.role;
            submitHandel = this.dataService.addUser(params).subscribe();
        } else {
            params.id = this.id;
            submitHandel = this.dataService.userEdit(params).subscribe();
        }

        await submitHandel;
        this.returnBack.emit({refesh: true, pageNo: this.currentPageNum});
    }

    initForm() {
        this.validateForm = this.fb.group({
            account: [null, [Validators.required]],
            password: [null, [Validators.required]],
            role: [null, [Validators.required]],
        });
    }

    async getDetail() {
        this.isTrue = true;
        await this.dataService.getUserDetail(this.id).subscribe(res => {
            this.validateForm.patchValue(res);
        });
    }

    returnToList() {
        this.returnBack.emit({refesh: false, pageNo: this.currentPageNum});
    }

    ngOnInit(): void {
        this.initForm();
        if (this.id) {
            this.getDetail();
        }
        this.loginInfo = JSON.parse(window.sessionStorage.getItem(EVENT_KEY.loginInfo));
    }

}
