import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms'
import { MatDialog } from '@angular/material/dialog';

import { BillGeneratorComponent } from '../bill-generator/bill-generator.component';
import { Unit } from 'src/app/interfaces/unit.interface';
import { BillService } from 'src/app/services/bill.service';

const units = [
  {type:'LCD 7/8 G', price: 10, quantity: 0 ,total: 0},
  {type:'LCD 7/8 Plus', price: 10, quantity: 0 ,total: 0},
  {type:'LCD X/Xs', price: 19, quantity: 0 ,total: 0},
  {type:'LCD Xr', price: 14, quantity: 0 ,total: 0},
  {type:'LCD XSmax', price: 27, quantity: 0 ,total: 0},
  {type:'LCD 11 G', price: 16, quantity: 0 ,total: 0},
  {type:'LCD 11 Pro', price: 27, quantity: 0 ,total: 0},
  {type:'LCD 11 Pro Max', price: 38, quantity: 0 ,total: 0},
  {type:'LCD 12/12 Pro', price: 50, quantity: 0 ,total: 0},
  {type:'LCD 12 Pro Max', price: 75, quantity: 0 ,total: 0},
  {type:'LCD 13 G', price:80 , quantity: 0 ,total: 0},
  {type:'LCD 13 Pro', price: 19, quantity: 0 ,total: 0},
  {type:'LCD 13 Pro Max', price: 100, quantity: 0 ,total: 0},


]

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit{
  billForm!: FormGroup;
  selectedUnits: Unit[] = [];
  units = units;
  billTotal! : number;

  @Output() productAdded = new EventEmitter<Unit[]>();

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private billService: BillService
  ) { }

  ngOnInit(): void {
    this.billForm = this.formBuilder.group({});
  }

  addToCart(unit: Unit): void {
    this.billService.addToCart(unit)
  }

  removeFromCart(unit: Unit): void {
    this.billService.removeFromCart(unit);
  }

  openCart() {
    const dialogRef = this.dialog.open(BillGeneratorComponent, {
      data: {
        selectedUnits: this.selectedUnits
      }
    });
  }

  increment(uniti: Unit) {
    const index = this.units.findIndex(unit => unit === uniti);
    units[index].quantity! += 1;
    this.units[index].total = this.units[index].price * this.units[index].quantity

  }
  decrement(uniti: Unit) {
    const index = this.units.findIndex(unit => unit === uniti);
    if(units[index].quantity > 0){
      units[index].quantity! -= 1;
      this.units[index].total = this.units[index].price * this.units[index].quantity

    }

  }

  getTotal() {
    let total: number = 0;
    for( let i=0; i<this.units.length; i++){
      total += this.units[i].total;
    }
    this.billTotal = total;
  }
}
