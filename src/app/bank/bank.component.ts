import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service';

import Account from '../shared/account';


@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {

  account: Account = {
    customerName: 'Leif',
    balance: 1000,
  };

  ngOnInit() {
    //this.account = this.service.customerAccount;
  }


  amount: number = null;

  constructor(private service: DataService) {

  }

  showBalance(account: Account) {
    this.account.balance = this.service.getBalance(account)
  }

  depositMoney(account: Account, amount: number) {
    this.service.deposit(account, amount)
    this.amount = null;
  }

  withdrawMoney(account: Account, amount: number): void {
    this.service.withdraw(account, amount);
    this.amount = null;

  }




}
