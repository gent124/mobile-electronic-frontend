import { Injectable } from '@angular/core';

import { Unit } from '../interfaces/unit.interface';


@Injectable({
  providedIn: 'root'
})
export class BillService {
  units : Unit[] = [];

  constructor() {  }

  addToCart(uniti : Unit) {
      const index = this.units.findIndex(unit => unit === uniti );
      if(index === -1 ){
        this.units.push(uniti);
      }
  }

  removeFromCart(uniti : Unit) {
    const index = this.units.findIndex(unit => unit === uniti );
    console.log(index);
    if(index !== -1) {
      this.units.splice(index, 1);
    }
  }

  getUnits() : Unit[] {
    return this.units;
  }

  getTotal() {
    let sum = 0;
    for(let i=0; i < this.units.length; i++ ){
      sum += this.units[i].total;
    }
    return sum;
  }
}
