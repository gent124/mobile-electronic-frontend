import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Product } from 'src/app/interfaces/product.interface';
import { EditProductComponent } from '../edit-product/edit-product.component';

const products: Product[] = [
  {type: 'LCD X', quantity: 5, price: 23.3},
  {type: 'LCD 11 Pro', quantity: 10, price: 23.4},
  {type: 'LCD 12 Max', quantity: 12, price: 12.5},
  {type: 'Port 7+ ORG', quantity: 3, price: 3.5},
  {type: 'LCD 12 Max', quantity: 12, price: 12.5},
  {type: 'LCD 12 Max', quantity: 12, price: 12.5},
  {type: 'LCD 12 Max', quantity: 12, price: 12.5},
  {type: 'LCD 12 Max', quantity: 12, price: 12.5},
  {type: 'LCD 12 Max', quantity: 12, price: 12.5},
  {type: 'LCD 12 Max', quantity: 12, price: 12.5},
  {type: 'LCD 12 Max', quantity: 12, price: 12.5},
  {type: 'LCD 12 Max', quantity: 12, price: 12.5},
  {type: 'LCD 12 Max', quantity: 12, price: 12.5},
  {type: 'LCD 12 Max', quantity: 12, price: 12.5},
  {type: 'LCD 12 Max', quantity: 12, price: 12.5},
  {type: 'LCD 12 Max', quantity: 12, price: 12.5},
  {type: 'LCD 12 Max', quantity: 12, price: 12.5},
  {type: 'LCD 12 Max', quantity: 12, price: 12.5},



];
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})


export class StockComponent {
  products = products;

  constructor(
    private router: Router,
    private dialog: MatDialog) {

  }

addProduct() {
  this.router.navigate(['addProduct']);
}

  onProductAdded(product: Product): void {
    this.products.push(product);
    const newproducts = [...this.products];
      this.products = newproducts;
  }

  deleteProduct(productType: string) {
    const index = this.products.findIndex(product => product.type === productType);
    if (index !== -1) {
      this.products.splice(index, 1);
      const newproducts = [...this.products ];
      this.products = newproducts;
    }
  }

  editProduct(product: Product) {
    const dialogRef = this.dialog.open(EditProductComponent, {
      data: { type: 'product', data: product }
    })
  }

  increment(productQuantity: number) {
    const index = this.products.findIndex(product => product.quantity === productQuantity);
    products[index].quantity += 1;

  }

  decrement(productQuantity: number) {
    const index = this.products.findIndex(product => product.quantity === productQuantity);
    if(products[index].quantity !== 0){
      products[index].quantity -= 1;
    }else {
      alert('Not in stock')
    }
  }
}
