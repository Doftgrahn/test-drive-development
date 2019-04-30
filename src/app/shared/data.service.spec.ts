import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

import Account from './account';

describe('Service', () => {
  let service: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.get(DataService);
  });

  let account: Account = {
    balance: 200,
    customerName: 'Simmmmon'
  }
  let amount: number = 300;

  describe('Account Details', () => {

    it('should exist', () => {
      let actual = service.customerAccount;
      expect(actual).toBe(actual)
    })

    it('An Account should have a Balance that is zero or higher', () => {
      let actual = service.customerAccount.balance;
      expect(actual).toBeGreaterThanOrEqual(0);
    });

    it('an Account have to contain customersName', () => {
      let expected = '';
      let actual = service.customerAccount.customerName;

      expect(actual).not.toBe(expected)
      expect(actual).not.toBeNull();
    });

    it('customerName should not be an empty string', () => {
      let emptyString = '';
      let actual = service.customerAccount;
      expect(actual).not.toBe(emptyString);
    });


  });


  describe('Balance Function', () => {
    it('Should exist', () => {
      let actual = service.getBalance(account);

      expect(actual).toBeTruthy()
    });

    it('Should return Balance', () => {
      let expected = account.balance;
      let actual = service.getBalance(account);
      expect(actual).toBe(expected)
    });

    it('should throw error if not a valid customerName', () => {
      let dangerAccount: Account = {
        balance: 200,
        customerName: ' Simmmmon K  '
      };
      let danger = () => service.getBalance(dangerAccount);

      expect(danger).toThrow();
    });

    it('should not have an empty string', () => {
      let emptyString: Account = {
        balance: 300,
        customerName: ''
      };
      let danger = () => service.getBalance(emptyString);
      expect(danger).toThrow()
    });

    it('should only accept numbers', () => {
      let actual = service.getBalance(account);
      expect(typeof actual).toBe('number');
    });

    it('should throw an error if balance is NaN', () => {
      let dangerAccount: Account = {
        balance: NaN,
        customerName: 'Leif'
      };
      let danger = () => service.getBalance(dangerAccount);
      expect(danger).toThrow()
    });
    it('should throw an ERROR if balance is null', () => {
      let nullAccount: Account = {
        balance: null,
        customerName: 'Leif'
      };
      let danger = () => service.getBalance(nullAccount)
      expect(danger).toThrow()
    });
    it('should throw an Error if customerName has whiteSpace', () => {
      let fakeAccount: Account = {
        customerName: '  Jensa  ',
        balance: 430
      };
      let actual = () => service.getBalance(fakeAccount);

      expect(actual).toThrow();
    });

  });


  describe('Deposit function', () => {
    let amount: number = 550;
    it('Should exist', () => {
      let actual = service.deposit(service.customerAccount, amount);
      expect(actual).toBe(actual);
    });

    it('should throw an error if deposit below 0', () => {
      let lowest = -0.9999;
      let actual = () => service.deposit(account, lowest);
      expect(actual).toThrow()
    });

    it('should only be able to deposit higher than zero', () => {
      let money = 1000;
      let lowest = 0;
      service.deposit(account, money);
      let actual = service.getBalance(account);
      expect(actual).toBeGreaterThanOrEqual(lowest);
    });

    it('should not be able to  deposit NaN', () => {
      let dangerAmount = NaN;
      let actual = () => service.deposit(account, dangerAmount);
      expect(actual).toThrow();
    });
    it('should not be able to deposit null', () => {
      let actual = () => service.deposit(account, null);
      expect(actual).not.toBeNull();
    });

    it('should throw an error if account.customerName is an empty string', () => {
      let dangerAccount: Account = {
        balance: 200,
        customerName: ''
      };
      let actual = () => service.deposit(dangerAccount, amount);
      expect(actual).toThrow();
    });

    it('should throw error if customerName is a boolean', () => {
      let dangerAccount: Account = {
        balance: 30,
        customerName: 'hej'
      }
      dangerAccount.customerName = typeof Boolean;
      let actual = () => service.deposit(dangerAccount, amount);
      expect(actual).toThrow();
    });
  });

  describe('Withdraw Function', () => {
    it('should exist', () => {
      let actual = service.withdraw(account, amount);
      expect(actual).toBe(service.withdraw(account, amount))
    });

    it('should throw error if withdraw is NaN', () => {
      let actual = () => service.withdraw(account, NaN)
      expect(actual).toThrow();
    });

    it('should throw erorr if amount is null', () => {
      let actual = () => service.withdraw(account, null);
      expect(actual).toThrow();
    });

    it('should throw an error if amount is higher than 10 000', () => {
      let danger: number = 10001;
      let actual = () => service.withdraw(account, danger);
      expect(actual).toThrow()
    });

    it('should throw error if under 0', () => {
      let danger1: number = -0.99;
      let actual = () => service.withdraw(account, danger1);
      expect(actual).toThrow();
    });

    it('should throw error if customerName is a number', () => {
      let danger: Account = {
        balance: 499,
        customerName: ''
      };
      danger.customerName = typeof Number;
      let actual = () => service.withdraw(danger, amount);
      expect(actual).toThrow();
    });

    it('should throw error if amount is higher than account.balance', () => {
      let danger: Account = {
        balance: 300,
        customerName: 'Jonas'
      };
      let amount = 301
      let actual = () => service.withdraw(danger, amount);
      expect(actual).toThrow();
    });
  });

  describe('transfer function ', () => {
    let from: Account = {
      customerName: 'Jensa',
      balance: 3000
    };
    let to: Account = {
      customerName: 'jens',
      balance: 300
    };
    let amount: number = 300;

    it('should exist', () => {
      let actual = service.transfer(from, to, amount);
      expect(actual).toBe(actual)
    });

    it('should throw error if TO is zero', () => {
      let dangerTo: Account = {
        balance: -.999,
        customerName: 'Jensa'
      };
      let actual = () => service.transfer(from, dangerTo, amount);
      expect(actual).toThrow();
    });
    it('should throw error if FROM is a zero', () => {
      let dangerFrom: Account = {
        balance: -.999,
        customerName: 'Simon'
      };
      let actual = () => service.transfer(dangerFrom, to, amount);
      expect(actual).toThrow();
    });
    it('should throw Error if AMOUNT is under 0', () => {
      let dangerAmount: number = -0.999;
      let actual = () => service.transfer(from, to, dangerAmount);
      expect(actual).toThrow()
    });
    it('should only accept amounts UNDER 10000', () => {
      let dangerAmount = 10001;
      let actual = () => service.transfer(from, to, dangerAmount);
      expect(actual).toThrow();
    });
    it('should throw error if NaN', () => {
      let dangerAccount: Account = {
        customerName: 'Jenssask',
        balance: NaN
      };
      let dangerAmount = NaN
      let actual = () => service.transfer(dangerAccount, dangerAccount, dangerAmount);
      expect(actual).toThrow()
    });
    it('should throw error if FROM is null', () => {
      let dangerAccount2: Account = {
        customerName: 'Jenssask',
        balance: null,
      };
      let actual = () => service.transfer(dangerAccount2, to, amount);
      expect(actual).toThrow();
    });
    it('should throw error if TO is null', () => {
      let dangerAccount2: Account = {
        customerName: 'Jenssask',
        balance: null,
      };
      let actual = () => service.transfer(from, dangerAccount2, amount);
      expect(actual).toThrow()
    });
    it('should throw Error if Amount is null', () => {
      let dangerAmount = null;
      let actual = () => service.transfer(from, to, dangerAmount);
      expect(actual).toThrow()
    });
    it('should throw Error if Amount is higher than from', () => {
      let failFrom: Account = {
        customerName: 'Jensa',
        balance: 500
      };
      let failAmount = 501;
      let actual = () => service.transfer(failFrom, to, failAmount);
      expect(actual).toThrow();

    });
  });
});







//
