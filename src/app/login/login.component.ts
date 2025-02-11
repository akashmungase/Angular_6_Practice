import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.createControls();
  }

  createControls() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if the form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // Call the user service to check login credentials
    this.commonService.login(this.loginForm.value).subscribe(
      user => {
        if (user) {
          this.toastr.success("Login Successfully!", "Success!");
          this.router.navigate(['/dashboard']);
        } else {
          this.toastr.error("Invalid email or password", "Login Failed");
        }
      },
      error => {
        this.toastr.error("An error occurred", "Error");
      }
    );
  }

  resetForm() {
    this.loginForm.reset();
    this.submitted = false;
  }

  get f() {
    return this.loginForm.controls;
  }
}