import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MapPipe, MapSet} from 'src/app/share/directives/pipe/map.pipe';

interface OptionsInterface {
    value: string;
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
    validateForm!: FormGroup;
    accidentTypeOptions: OptionsInterface[];
    isTrue: boolean;

    submitForm(): void {
        Object.keys(this.validateForm.controls).forEach(key => {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        });
    }

    initForm() {
        this.validateForm = this.fb.group({
            accidentType: [null, [Validators.required]],
            accidentGrade: [null, [Validators.required]],
            sendDepartmentName: [null, [Validators.required]],
            acceptDepartmentName: [null, [Validators.required]],
        });
    }


    constructor(private fb: FormBuilder) {
        this.returnBack = new EventEmitter<any>();
        this.isTrue = true;

    }

    changeValue(event) {
        switch (event) {
            case '1':
                this.isTrue = true;
                break;
            default:
                this.isTrue = false;
                break;
        }
    }

    returnToList() {
        this.returnBack.emit();
    }

    ngOnInit(): void {
        this.accidentTypeOptions = [...MapPipe.transformMapToArray(MapSet.accidentType)];
        this.initForm();
    }

}
