import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-command-report-add-edit',
    templateUrl: './command-report-add-edit.component.html',
    styleUrls: ['./command-report-add-edit.component.less']
})
export class CommandReportAddEditComponent implements OnInit {
    @Output() returnBack: EventEmitter<any>;
    // 如果有id，则表示为编辑，否则为新增
    @Input() id: number;
    @Input() currentPageNum: number;
    validateForm!: FormGroup;

    submitForm(): void {
        Object.keys(this.validateForm.controls).forEach(key => {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        });
    }

    initForm() {
        this.validateForm = this.fb.group({
            disasters: [null, [Validators.required]],
        });
    }

    constructor(private fb: FormBuilder) {
        this.returnBack = new EventEmitter<any>();
    }

    returnToList() {
        this.returnBack.emit();
    }

    ngOnInit(): void {
        this.initForm();
    }

}
