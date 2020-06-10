import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-form-model',
    templateUrl: './form-model.component.html',
    styleUrls: ['./form-model.component.less']
})
export class FormModelComponent implements OnInit {
    validateForm!: FormGroup;

    submitForm(): void {
        Object.keys(this.validateForm.controls).forEach(key => {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        });
    }

    updateConfirmValidator(): void {
        Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
    }

    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return {required: true};
        } else if (control.value !== this.validateForm.controls.password.value) {
            return {confirm: true, error: true};
        }
        return {};
    };

    getCaptcha(e: MouseEvent): void {
        e.preventDefault();
    }

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            email: [null, [Validators.email, Validators.required]],
            password: [null, [Validators.required]],
            checkPassword: [null, [Validators.required, this.confirmationValidator]],
            nickname: [null, [Validators.required]],
            phoneNumberPrefix: ['+86'],
            phoneNumber: [null, [Validators.required]],
            website: [null, [Validators.required]],
            captcha: [null, [Validators.required]],
            agree: [false]
        });
    }
}
