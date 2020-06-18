import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TeamListService} from 'src/app/services/biz-services/team-list.service';
import {EVENT_KEY} from '../../../../../environments/staticVariable';
import {LoginInfoModel} from '../../../../core/vo-common/BusinessEnum';

@Component({
    selector: 'app-teams-add-edit',
    templateUrl: './teams-add-edit.component.html',
    styleUrls: ['./teams-add-edit.component.less']
})
export class TeamsAddEditComponent implements OnInit {
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    @Input() currentPageNum: number;
    validateForm: FormGroup;
    loginInfo: LoginInfoModel;

    constructor(private fb: FormBuilder, private dataService: TeamListService) {
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
            submitHandel = this.dataService.addTeamJobs(params).subscribe();
        } else {
            params.id = this.id;
            params.updateBy = this.loginInfo.account;
            submitHandel = this.dataService.editTeamJobs(params).subscribe();
        }

        await submitHandel;
        this.returnBack.emit({refesh: true, pageNo: this.currentPageNum});
    }

    initForm() {
        this.validateForm = this.fb.group({
            responsibilityName: [null, [Validators.required]],
            responsibilityDetail: [null, [Validators.required]],
        });
    }

    async getDetail() {
        await this.dataService.getTeamJobsDetail(this.id).subscribe((res) => {
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
