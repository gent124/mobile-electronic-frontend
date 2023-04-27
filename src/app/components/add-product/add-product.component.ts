import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
    productForm!: FormGroup;


  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      type: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      quanity: this.formBuilder.control(0, [Validators.required]),
      price: ''
    });

    console.log(this.productForm)
  }
  constructor(
    private router: Router,
    private formBuilder: FormBuilder) { };

  backToStock() {
    this.router.navigate(['stock'])
  }

  addProduct(product: Object) {
    console.log(product);
    console.log(this.productForm);

  }
}
