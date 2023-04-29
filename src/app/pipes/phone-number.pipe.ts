import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneNumberPipe implements PipeTransform {
  phoneNumberArray!: string[];

  transform(phoneNumber : string) {
      this.phoneNumberArray = phoneNumber.split('');

    for(let i=1; i<=this.phoneNumberArray.length; i += 4) {
      this.phoneNumberArray.splice(2+i  ,0, '-');
  }
    this.phoneNumberArray.pop();
    return this.phoneNumberArray.join('');
}
}
