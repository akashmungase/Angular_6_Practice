import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-array',
  templateUrl: './child-array.component.html',
  styleUrls: ['./child-array.component.css']
})
export class ChildArrayComponent implements OnInit {

  dispatchForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    console.log(this.dispatchForm);

  }

  createForm() {
    this.dispatchForm = this.fb.group({
      id: [],
      product_list: this.fb.array([])
    })

    this.addProduct();
  }

  get product(): FormArray {
    return this.dispatchForm.get('product_list') as FormArray;
  }

  createProductControls(): FormGroup {
    return this.fb.group({
      dispatch_id: [null, Validators.required],
      product_name: [null, Validators.required],
      quantity: [null, [Validators.required, Validators.min(1)]],
      price: [null, [Validators.required, Validators.min(0)]]
    });
  }

  addProduct() {
    this.product.push(this.createProductControls());
  }

  removeProduct(index: number) {
    this.product.removeAt(index);
  }

  onSubmit() {
    this.submitted = true;

    if (this.dispatchForm.invalid) {
      return;
    }
  }

  resetForm() {
    this.submitted = false;
    this.dispatchForm.reset();
  }
}
