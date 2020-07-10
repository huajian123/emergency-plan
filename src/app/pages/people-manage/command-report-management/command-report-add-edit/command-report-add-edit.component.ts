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
    isTrue: string;
    loginInfo: LoginInfoModel;
    departmentNameOptions: OptionsInterface[];
    departmentOptions: OptionsInterface[];


    constructor(private fb: FormBuilder, private dataService: CommandReportListService) {
        this.returnBack = new EventEmitter<any>();
        this.temporaryNameOptions = [];
        this.accidentTypeOptions = [];
        this.naturalNameOptions = [];
        this.departmentNameOptions = [];
        this.publicHealthNameOptions = [];
        this.socialSecurityNameOptions = [];
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
            accidentId: [null, [Validators.required]],
            accidentGrade: [null, [Validators.required]],
            sendDepartment: [null, [Validators.required]],
            acceptDepartment: [null, [Validators.required]],
            sendDepartmentName: [null, [Validators.required]],
            acceptDepartmentName: [null, [Validators.required]],
        });
    }

    async getDetail() {
        await this.dataService.getCommandReportDetail(this.id).subscribe((res) => {
            this.validateForm.patchValue(res);
            this.validateForm.get('accidentId').setValue(res.accidentId);
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

    returnToList() {
        this.returnBack.emit({refesh: false, pageNo: this.currentPageNum});
    }

    async getDepartmentName() {
        this.departmentNameOptions = [];
        await this.dataService.getDepartmentNameList().subscribe(data => {
            data.selectDepartmentDTOS.forEach((item, index) => {
                this.departmentNameOptions.push({label: item.departmentName, value: item.id});
            });
        });
    }

    /*发送部门下拉*/
    changeDepartmentFn(index) {
        this.departmentOptions = [];
        try {
            if (index !== null) {
                const datas = this.departmentNameOptions.find(ele => {
                    return ele.value === index;
                });
                this.validateForm.get('sendDepartmentName').setValue(datas.label);
            }
        } catch (err) {
            console.log('该部门已删除');
        }
        const arrayObj = this.departmentNameOptions.splice(this.departmentNameOptions.findIndex(ele => ele.value === index), 1);
        this.departmentOptions = this.departmentNameOptions.filter(ele => !arrayObj.includes(ele));
        this.getDepartmentName();
    }

    /*接受部门下拉*/
    changeDepartmentFns(e) {
        try {
            if (e !== null) {
                const data = this.departmentOptions.find(ele => {
                    return ele.value === e;
                });
                this.validateForm.get('acceptDepartmentName').setValue(data.label);
            }
        } catch (err) {
            console.log('该部门已删除');
        }

    }

    ngOnInit(): void {
        this.loginInfo = JSON.parse(window.sessionStorage.getItem(EVENT_KEY.loginInfo));
        this.accidentTypeOptions = [...MapPipe.transformMapToArray(MapSet.accidentType)];
        this.naturalNameOptions = [...MapPipe.transformMapToArray(MapSet.naturalDisastersType)];
        this.accidentNameOptions = [...MapPipe.transformMapToArray(MapSet.accidentDisastersType)];
        this.publicHealthNameOptions = [...MapPipe.transformMapToArray(MapSet.publicHealthType)];
        this.socialSecurityNameOptions = [...MapPipe.transformMapToArray(MapSet.socialSecurityType)];
        this.initForm();
        this.getDepartmentName();
        if (this.id) {
            this.getDetail();
        }
    }

}
