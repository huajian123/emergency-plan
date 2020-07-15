import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MapPipe, MapSet} from '../../../../share/directives/pipe/map.pipe';
import {PlanListService} from 'src/app/services/biz-services/plan-list.service';
import {LoginInfoModel} from 'src/app/core/vo-common/BusinessEnum';
import {EVENT_KEY} from 'src/environments/staticVariable';


interface OptionsInterface {
    value: string | number;
    label: string;
}

interface DeptOptionsInterface extends OptionsInterface {
    departmentPhone?: string;
}

interface ResyOptionsInterface extends OptionsInterface {
    resyDetail?: string;
}

@Component({
    selector: 'app-plans-add-edit',
    templateUrl: './plans-add-edit.component.html',
    styleUrls: ['./plans-add-edit.component.less']
})
export class PlansAddEditComponent implements OnInit {
    validateForm: FormGroup;
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    @Input() currentPageNum: number;
    deptOptions: DeptOptionsInterface[];
    resyOptions: ResyOptionsInterface[];
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
    /*灾害等级*/
    disasterLevelOptions: OptionsInterface[];
    loginInfo: LoginInfoModel;
    save = {
        width: '900px',
        margin: 'auto',
        backgroundColor: '#F2FDFF'
    };

    constructor(private fb: FormBuilder, private dataService: PlanListService) {
        this.accidentTypeOptions = [];
        this.temporaryNameOptions = [];
        this.naturalNameOptions = [];
        this.publicHealthNameOptions = [];
        this.socialSecurityNameOptions = [];
        this.disasterLevelOptions = [];
        this.deptOptions = [];
        this.resyOptions = [];
        this.returnBack = new EventEmitter<any>();
    }

    add() {
        this.items.push(this.createUser());
    }

    del(index: number) {
        this.items.removeAt(index);
    }

    cancel() {
        return;
    }


    initForm() {
        this.validateForm = this.fb.group({
            planName: [null, [Validators.required]],
            accidentType: [null, [Validators.required]],
            accidentId: [null, [Validators.required]],
            planGrade: [null, [Validators.required]],
            accidentName: [null, [Validators.required]],
            deptId: [null, [Validators.required]],
            deptPhone: [null],
            resyId: [9, [Validators.required]],
            resyDetail: [null, [Validators.required]],
            addEmergencyTeamDTOS: this.fb.array([]),
        });
    }

    createUser(): FormGroup {
        return this.fb.group({
            resyId: [null, [Validators.required]],
            deptId: [null, [Validators.required]],
            deptPhone: [null],
            resyDetail: [null, [Validators.required]],
        });
    }

    get items() {
        return this.validateForm.controls['addEmergencyTeamDTOS'] as FormArray;
    }

    async submitForm() {
        Object.keys(this.validateForm.controls).forEach(key => {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        });
        if ((this.validateForm.invalid) || (this.validateForm.controls['addEmergencyTeamDTOS'] as FormGroup).invalid) {
            return;
        }
        const params = this.validateForm.getRawValue();
        let submitHandel = null;
        if (!this.id) {
            params.createBy = this.loginInfo.createBy;
            console.log(params);
            submitHandel = this.dataService.addPlan(params).subscribe();
        } else {
            params.id = this.id;
            params.updateBy = this.loginInfo.account;
            console.log(params);
            submitHandel = this.dataService.editPlan(params).subscribe();
        }

        await submitHandel;
        this.returnBack.emit({refesh: true, pageNo: this.currentPageNum});
    }

    returnToList() {
        this.returnBack.emit({refesh: false, pageNo: this.currentPageNum});
    }


    // 获取部门、小队信息列表
    async getDeptResyListInfos() {
        await this.dataService.getDeptResyList().subscribe(res => {
            /*部门*/
            res.selectDepartmentDTOS.forEach(item => {
                this.deptOptions.push({value: item.id, label: item.departmentName, departmentPhone: item.departmentPhone});
            });
            /*小队*/
            res.emergencyTeamDTOS.forEach(item => {
                this.resyOptions.push({value: item.id, label: item.resyName, resyDetail: item.resyDetail});
            });
            this.validateForm.get('resyDetail').setValue(res.command.resyDetail);
        });
    }

    /*获取预案详情*/
    async getDetail() {
        await this.dataService.getPlanDetail(this.id).subscribe(data => {
            console.log(data);
            this.validateForm.patchValue(data);
            this.validateForm.get('accidentId').setValue(data.accidentId);
            data.planDeptResyEntities.forEach(item => {
                switch (item.grade) {
                    case 1:
                        const field = this.createUser();
                        field.patchValue(item);
                        this.items.push(field);
                        break;
                    default:
                        const infoData = {deptId: item.deptId, deptPhone: item.deptPhone};
                        this.validateForm.get('deptId').setValue(infoData.deptId);
                        this.validateForm.get('deptPhone').setValue(infoData.deptPhone);
                        break;
                }
            });
        });


    }

    changeAccidentIdValue(e) {
        this.temporaryNameOptions = [];
        if (e !== null) {
            switch (e) {
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

    /*灾害名称下拉列表*/
    changeDisasterName(e) {
        if (e === null) {
            return;
        }
        try {
            this.validateForm.get('accidentName').setValue(this.temporaryNameOptions.find(res => res.value === e).label);
        } catch (e) {
        }
    }

    /*下拉选择部门*/
    changeSelValueDept(e) {
        if (e === null) {
            return;
        }
        this.validateForm.get('deptPhone').setValue(this.deptOptions.find(res => res.value === e).departmentPhone);
    }

    /*下拉选择小队*/
    changeSelValueTeam(e, index) {
        if (e === null) {
            return;
        }
        this.items.at(index).get('resyDetail').setValue(this.resyOptions.find(res => res.value === e).resyDetail);
    }

    /*管理小队中部门下拉*/
    changeSelValue(e, index) {
        if (e === null) {
            return;
        }
        this.items.at(index).get('deptPhone').setValue(this.deptOptions.find(res => res.value === e).departmentPhone);
    }

    ngOnInit(): void {
        this.loginInfo = JSON.parse(window.sessionStorage.getItem(EVENT_KEY.loginInfo));
        this.accidentTypeOptions = [...MapPipe.transformMapToArray(MapSet.accidentType)];
        this.disasterLevelOptions = [...MapPipe.transformMapToArray(MapSet.disasterLevel)];
        this.naturalNameOptions = [...MapPipe.transformMapToArray(MapSet.naturalDisastersType)];
        this.accidentNameOptions = [...MapPipe.transformMapToArray(MapSet.accidentDisastersType)];
        this.publicHealthNameOptions = [...MapPipe.transformMapToArray(MapSet.publicHealthType)];
        this.socialSecurityNameOptions = [...MapPipe.transformMapToArray(MapSet.socialSecurityType)];
        this.initForm();
        this.getDeptResyListInfos();
        if (this.id) {
            this.getDetail();
        }
    }

}
