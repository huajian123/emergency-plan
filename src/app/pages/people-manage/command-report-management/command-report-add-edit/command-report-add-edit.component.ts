import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MapPipe, MapSet} from 'src/app/share/directives/pipe/map.pipe';
import {CommandReportListService} from 'src/app/services/biz-services/command-report-list.service';
import {EVENT_KEY} from 'src/environments/staticVariable';
import {LoginInfoModel} from 'src/app/core/vo-common/BusinessEnum';

interface OptionsInterface {
    value: string | number;
    label: string;
}

interface OptionIndex extends OptionsInterface {
    indexNum: number;
}

@Component({
    selector: 'app-command-report-add-edit',
    templateUrl: './command-report-add-edit.component.html',
    styleUrls: ['./command-report-add-edit.component.less']
})
export class CommandReportAddEditComponent implements OnInit {
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    @Input() currentPageNum: number;
    validateForm: FormGroup;
    accidentTypeOptions: OptionsInterface[];
    isTrue: string;
    loginInfo: LoginInfoModel;
    departmentNameOptions: OptionIndex[];
    departmentOptions: OptionsInterface[];


    constructor(private fb: FormBuilder, private dataService: CommandReportListService) {
        this.returnBack = new EventEmitter<any>();
        this.accidentTypeOptions = [];
        this.departmentNameOptions = [];
        this.departmentOptions = [];
        this.isTrue = '汇报';
        this.loginInfo = {
            createBy: '',
            createTime: new Date(),
            id: null,
            password: '',
            role: null,
            updateBy: '',
            updateTime: new Date(),
            account: '',
        };

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
            submitHandel = this.dataService.addCommandReport(params).subscribe();
        } else {
            params.id = this.id;
            params.updateBy = this.loginInfo.account;
            submitHandel = this.dataService.editCommandReport(params).subscribe();
        }

        await submitHandel;
        this.returnBack.emit({refesh: true, pageNo: this.currentPageNum});
    }

    initForm() {
        this.validateForm = this.fb.group({
            accidentType: [null, [Validators.required]],
            accidentGrade: [null, [Validators.required]],
            sendDepartment: [null, [Validators.required]],
            acceptDepartment: [null, [Validators.required]],
        });
    }

    async getDetail() {
        await this.dataService.getCommandReportDetail(this.id).subscribe((res) => {
            this.validateForm.patchValue(res);
        });
    }

    changeValue(event) {
        this.isTrue = '';
        switch (event) {
            case 1:
                this.isTrue = '汇报';
                break;
            default:
                this.isTrue = '指挥';
                break;
        }
    }

    returnToList() {
        this.returnBack.emit({refesh: false, pageNo: this.currentPageNum});
    }

    getDepartmentName() {
        this.departmentNameOptions.length = 0;
        this.dataService.getDepartmentNameList().subscribe(data => {
            data.selectDepartmentDTOS.forEach((item, index) => {
                this.departmentNameOptions.push({label: item.departmentName, value: item.id, indexNum: index});
            });
        });
    }

    changeDepartmentFn(index) {
        this.departmentOptions.length = 0;
        if (index !== null) {
            const arrayObj = this.departmentNameOptions.splice(this.departmentNameOptions.findIndex(ele => ele.indexNum === (index - 1)), 1);
            this.departmentOptions = this.departmentNameOptions.filter(ele => !arrayObj.includes(ele));
        }
        this.getDepartmentName();
    }

    ngOnInit(): void {
        this.loginInfo = JSON.parse(window.sessionStorage.getItem(EVENT_KEY.loginInfo));
        this.accidentTypeOptions = [...MapPipe.transformMapToArray(MapSet.accidentType)];
        this.initForm();
        this.getDepartmentName();
        if (this.id) {
            this.getDetail();
        }
    }

}
