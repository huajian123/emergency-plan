import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-drought-flood',
    templateUrl: './drought-flood.component.html',
    styleUrls: ['./drought-flood.component.less']
})
export class DroughtFloodComponent implements OnInit {
    @Input() id: number;
    @Input() type: number;
    validateForm: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    submitForm() {
        Object.keys(this.validateForm.controls).forEach(key => {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        });
    }

    initForm() {
        this.validateForm = this.fb.group({
            responsibilityName: [null, [Validators.required]],
            /*  accidentId: [null, [Validators.required]],*/
        });
    }

    ngOnInit(): void {
        this.initForm();
        console.log(this.id);
        console.log(this.type);
    }

}
