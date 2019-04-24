import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {
  /*
    exampleAccount = {
      customerName: '',
      balance: null,
      numberOfAccounts: null
    };
  */

account:5;
customer = '';
numberOfAccounts = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() { }

}
