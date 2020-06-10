import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.less']
})
export class ProductEditComponent implements OnInit {
    validateForm: FormGroup;
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    @Input() currentPageNum: number;

    constructor(private fb: FormBuilder) {
        this.returnBack = new EventEmitter<any>();
    }

    async submitForm() {
        Object.keys(this.validateForm.controls).forEach(key => {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        });
    }

    returnToList() {
        this.returnBack.emit();
    }

    initForm() {
        this.validateForm = this.fb.group({
            userName: ['', [Validators.required]],
            mobile: ['', [Validators.required]],
            email: ['', [Validators.required]],
            rangePickerTime: ['', [Validators.required]],
            password: ['', [Validators.required]],
            comment: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {
        this.initForm();
    }

}
