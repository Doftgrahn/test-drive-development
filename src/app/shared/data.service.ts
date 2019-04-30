import { Injectable } from '@angular/core';

import Account from './account';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  customerAccount: Account = {
    customerName: 'Leif',
    balance: 200,
  }

  customerAccount2: Account = {
    customerName: 'Simon',
    balance: 0,
  }


  getBalance(account: Account): number {
    if (account.customerName !== account.customerName.trim() || account.customerName === '') {
      throw new Error('Enter correct customerName')
    }
    else if (isNaN(account.balance) || account.balance === null) {
      throw new Error('Account.balance cannot be a NaN or null')
    }
    else if (account.customerName !== account.customerName.trim()) {
      throw new Error('enter Correct CustomerName')
    }
    else {
      return account.balance;
    }
  }

  deposit(account: Account, amount: number): void {
    if (amount <= 0 || isNaN(amount) || amount === null) {
      throw new Error('you need to put in a valid deposit')
    }
    else if (account.customerName === '' || account.customerName === typeof Boolean) {
      throw new Error('not a valid customer Name')
    }
    else if (amount > 0) {
      account.balance += +amount;
    }
    else {
      throw new Error('not valid')
    }
  }

  withdraw(account: Account, amount: number): void {
    if (isNaN(amount) || amount === null || amount >= 10000 || amount < 0) {
      throw new Error('not a valid withdrawal')
    }
    else if (account.customerName === typeof Number) {
      throw new Error('Cannot go under 0, or CustomerName is of type Number')
    }
    else if (account.balance < amount) {
      throw new Error('Cannot withdraw more than what you have on your account')
    } else {
      account.balance -= amount
    }
  }

  transfer(from: Account, to: Account, amount: number): void {
    if (from.balance <= 0 || to.balance <= 0 || amount <= 0) {
      throw new Error('from can only be higher than zero')
    }
    else if (from.balance == null || to.balance === null || amount === null) {
      throw new Error('Cannot be Null')
    }
    else if (amount >= 10000) {
      throw new Error('Cannot deposit over 10 000')
    }
    else if (isNaN(from.balance) || isNaN(to.balance) || isNaN(amount)) {
      throw new Error('Cannot be NaN')
    }
    else if (amount > from.balance) {
      throw new Error('must have a valid balance to be able to transfer')
    }
    else {
      from.balance -= amount;
      to.balance += +amount
    }
  }
}
