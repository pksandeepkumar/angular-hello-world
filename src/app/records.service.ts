import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  info1 : String[] = [ "Adam", "E123", "adam@gmail.com"];
  info2 : String[] = [ "George", "E456", "george@gmail.com"];
  info3 : String[] = [ "Lolan", "E789", "lolan@gmail.com"];

  getInfo1(): String[] {
    return this.info1;
  }

  getInfo2(): String[] {
    return this.info2;
  }

  getInfo3(): String[] {
    return this.info3;
  }

  constructor() { }
}
