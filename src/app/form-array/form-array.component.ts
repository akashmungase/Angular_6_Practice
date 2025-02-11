import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  dispatchForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    public commonService: CommonService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.dispatchForm = this.fb.group({
      id: [null],
      productList: this.fb.array([])
    });

    this.addProduct();
  }

  createProduct(): FormGroup {
    return this.fb.group({
      dispatch_id: [null, Validators.required],
      product_name: [null, Validators.required],
      quantity: [null, [Validators.required, Validators.min(1)]],
      price: [null, [Validators.required, Validators.min(0)]]
    });
  }

  get product(): FormArray {
    return this.dispatchForm.get('productList') as FormArray;
  }

  addProduct() {
    this.product.push(this.createProduct());
  }

  removeProduct(index: number) {
    this.product.removeAt(index);
  }

  resetForm() {
    this.dispatchForm.reset();
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    if (this.dispatchForm.invalid) {
      return;
    }

    console.log(this.dispatchForm.value);
  }

  get f() {
    return this.dispatchForm.controls;
  }
}