import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.less']
})
export class LoginLayoutComponent implements OnInit {
  validateForm!: FormGroup;

  submitForm(): void {
    // Object.keys(this.validateForm.controls).forEach(key => {
    //   this.validateForm.controls[key].markAsDirty();
    //   this.validateForm.controls[key].updateValueAndValidity();
    // });

  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: ['true']
    });
  }

}
