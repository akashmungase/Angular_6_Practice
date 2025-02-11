import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private router: Router
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

    // Call API to create user and handle response
    this.commonService.createUser(this.userForm.value).subscribe(
      result => {
        console.log('User created successfully:', result);
        const encryptedUser = this.commonService.encryptData(result);
        const decrytedUser = this.commonService.decryptData(encryptedUser)
        console.log('decrytedUser', decrytedUser);
        localStorage.setItem('userDetails', JSON.stringify(encryptedUser));
        this.router.navigate(['/dashboard'])
      },
      error => {
        console.error('Error creating user:', error);
      }
    );
  }

  resetForm() {
    this.userForm.reset();
    this.submitted = false;
  }

  get f() {
    return this.userForm.controls;
  }


}
