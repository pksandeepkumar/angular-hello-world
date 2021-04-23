import { Component, OnInit } from '@angular/core';

import { RecordsService} from "../records.service"

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [RecordsService]
})
export class EmpInfoComponent implements OnInit {

  infoReceived1 : String[] = [];
  infoReceived2 : String[] = [];
  infoReceived3 : String[] = [];

  getInfoFromServiceClass1() {
    this.infoReceived1 = this.rService.getInfo1();
  }

  getInfoFromServiceClass2() {
    this.infoReceived2 = this.rService.getInfo2();
  }

  getInfoFromServiceClass3() {
    this.infoReceived3 = this.rService.getInfo3();
  }


  constructor(private rService : RecordsService) { }

  ngOnInit(): void {
  }

}
