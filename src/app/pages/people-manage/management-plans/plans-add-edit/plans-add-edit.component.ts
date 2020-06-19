import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MapPipe, MapSet} from '../../../../share/directives/pipe/map.pipe';
import {NzModalService} from 'ng-zorro-antd';

interface OptionsInterface {
    value: string | number;
    label: string;
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
    accidentTypeOptions: OptionsInterface[];

    save = {
        width: '900px',
        margin: 'auto',
        backgroundColor: '#F2FDFF'
    };

    constructor(private fb: FormBuilder, private modalService: NzModalService) {
        this.accidentTypeOptions = [];
        this.returnBack = new EventEmitter<any>();
    }

    add() {
        this.items.push(this.createUser());
    }

    del(index: number) {
        this.modalService.confirm({
            nzTitle: '确定删除？',
            nzOnOk: () => {
                this.items.removeAt(index);
            },
            nzOkText: 'OK',
            nzOnCancel: () => {
                return;
            },
            nzCancelText: 'Cancel'
        });

    }

    createUser(): FormGroup {
        return this.fb.group({
            resyName: [null, [Validators.required]],
            departmentName: [null, [Validators.required]],
            departmentPhone: [null],
            resyDetail: [null, [Validators.required]],
        });
    }

    get items() {
        return this.validateForm.controls.items as FormArray;
    }

    initForm() {
        this.validateForm = this.fb.group({
            planName: [null, [Validators.required]],
            accidentType: [null, [Validators.required]],
            departmentName: [null, [Validators.required]],
            departmentPhone: [null],
            resyDetail: [null, [Validators.required]],
            items: this.fb.array([]),
        });
    }

    submitForm(): void {
        Object.keys(this.validateForm.controls).forEach(key => {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        });
        if ((this.validateForm.invalid) || (this.validateForm.controls.items).invalid) {
            return;
        }

    }

    returnToList() {
        this.returnBack.emit({refesh: false, pageNo: this.currentPageNum});
    }

    ngOnInit(): void {
        this.accidentTypeOptions = [...MapPipe.transformMapToArray(MapSet.accidentType)];
        this.initForm();
        const userList = [
            {
                resyName: '1',
                departmentName: '00001',
                departmentPhone: 'John Brown',
                resyDetail: 'New York No. 1 Lake Park',
            },
            {
                resyName: '2',
                departmentName: '00002',
                departmentPhone: 'John Brown',
                resyDetail: 'New York No. 2 Lake Park',
            },
        ];
        userList.forEach((i) => {
            const field = this.createUser();
            field.patchValue(i);
            this.items.push(field);
        });

    }

}
