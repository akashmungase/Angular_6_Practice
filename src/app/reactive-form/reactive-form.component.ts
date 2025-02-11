import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createControls();
  }

  createControls() {
    this.userForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      mobile: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password: [null, [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$')]],
      confirm_password: [null, [Validators.required]]
    });

    // Set the custom validator for password match
    this.userForm.setValidators(this.passwordMatchValidator);
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password').value;
    const confirm_password = form.get('confirm_password').value;
    return password === confirm_password ? null : { mismatch: true };
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if the form is invalid
    if (this.userForm.invalid) {
      return;
    }

    console.log(this.userForm.value);
  }

  resetForm() {
    this.userForm.reset();
    this.submitted = false;
  }

  get f() {
    return this.userForm.controls;
  }
}