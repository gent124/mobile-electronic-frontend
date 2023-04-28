import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product.interface';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
    productForm!: FormGroup;
    @Output() productAdded = new EventEmitter<any>();

    constructor(
      private router: Router,
      private formBuilder: FormBuilder) { };


  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      type: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      quantity: this.formBuilder.control('', [Validators.required, Validators.pattern("^[0-9]*$"),
    ]),
      price: ''
    });

    console.log(this.productForm)
  }


  backToStock() {
    this.router.navigate(['stock'])
  }

  addProduct() {
    const product = this.productForm.value;
    this.productAdded.emit(product);
    this.productForm.reset();
  }

  get quantity() {
    return this.productForm.get('quantity');
  }


}
