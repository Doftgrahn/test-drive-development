import { Injectable } from '@angular/core';


import Account from './account';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /*--
      getBalance(account: Account): number;
    deposit(account: Account, amount: number): void;
    withdraw(account: Account, amount: number): void;
    transfer(from: Account, to: Account, amount: number): void;
  --*/

  getBalance(account: Account): number {
    return account.balance;
  }


  deposit(account: Account, amount: number): void {
    if (amount >= 0 && account !== null) {
      account.balance + amount
    }
    else {
      throw Error;
    }
  }


  withdraw(account: Account, amount: number): void {
    if (amount < 10000 && account !== null) {
      account.balance - amount
    }
    else {
      throw Error();
    }
  }


  transfer(from: Account, to: Account, amount: number): void {

  }


}
