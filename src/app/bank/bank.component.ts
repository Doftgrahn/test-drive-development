import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service';

import Account from '../shared/account';


@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {
  account: Account;
  amount: number = null;
  balance: number = null;

  ngOnInit() {
    this.account = this.service.customerAccount;
  }

  constructor(private service: DataService) { }

  showBalance(account: Account):number {
    return this.balance = this.service.getBalance(account)
  }

  depositMoney(account: Account, amount: number):void {
    this.service.deposit(account, amount)
    this.amount = null;
  }

  withdrawMoney(account: Account, amount: number): void {
    this.service.withdraw(account, amount);
    this.amount = null;

  }

}
