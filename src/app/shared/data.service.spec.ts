import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

import Account from './account';

describe('Service', () => {
  let service: DataService;
  let account: Account;
  let amount: number;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.get(DataService);
  });

  account = {
    balance: 200,
    customerName: 'Simmmmon'
  };

  amount = 300;

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
      let actual = service.customerAccount.customerName;
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
      expect(danger).toThrow();
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

    it('Should exist', () => {
      expect(service.deposit).toBeDefined();
    });

    it('should return amount + balance', () => {
      let fakeAccount: Account = {
        balance: 300,
        customerName: 'somom'
      };
      let amount = 200;
      let expectedValue = fakeAccount.balance + amount;
      service.deposit(fakeAccount, amount)
      let actual = service.getBalance(fakeAccount)
      expect(actual).toBe(expectedValue);
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
      expect(actual).toThrow();
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
      };
      dangerAccount.customerName = typeof Boolean;
      service.getBalance(account);
      let actual = () => service.deposit(dangerAccount, amount);
      expect(actual).toThrow();
    });
    it('should throw an Error if Deposit is number 42', () => {
      let danger42Amount = 42;
      let actual = () => service.deposit(account, danger42Amount);
      expect(actual).toThrow();
    });
    it('should throw an Error if Desposit is over 10 000. No Laundry.', () => {
      let moneyLaundryAmount: number = 10001;
      let actual = () => service.deposit(account, moneyLaundryAmount);
      expect(actual).toThrow();
    })
  });

  describe('Withdraw Function', () => {
    it('should exist', () => {
      let actual = service.withdraw(account, amount);
      expect(actual).toBe(service.withdraw(account, amount));
    });

    it('should withdraw balance from account', () => {
      let fakeAccount: Account = {
        balance: 300,
        customerName: 'Jens'
      };
      let amount = 100;
      let expectedValue = fakeAccount.balance - amount;
      service.withdraw(fakeAccount, amount)
      let actual = service.getBalance(fakeAccount);
      expect(actual).toBe(expectedValue)
    })

    it('should throw error if withdraw is NaN', () => {
      let actual = () => service.withdraw(account, NaN);
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
    it('should throw an Error if amount is 42', () => {
      let danger42Ammount: number = 42;
      let actual = () => service.withdraw(account, danger42Ammount);
      expect(actual).toThrow();
    })

    it('should throw error if amount is higher than account.balance', () => {
      let danger: Account = {
        balance: 300,
        customerName: 'Jonas'
      };
      let amount = 301
      let actual = () => service.withdraw(danger, amount);
      service.getBalance(account)
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
      expect(actual).toBe(actual);
    });

    it('should withdrawmoney from one account, and deposit to another', () => {
      let fakeAccount1From: Account = {
        balance: 300,
        customerName: 'Jens'
      }
      let fakeAccount2To: Account = {
        balance: 200,
        customerName: 'noone'
      }
      let amount: number = 50;
      let expectFrom = fakeAccount1From.balance - amount;
      let expectTo = fakeAccount2To.balance + amount;
      service.transfer(fakeAccount1From, fakeAccount2To, amount);

      // TODO:
    })

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
      expect(actual).toThrow();
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
      let dangerAmount = NaN;
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
      expect(actual).toThrow();
    });

    it('should throw Error if Amount is null', () => {
      let dangerAmount = null;
      let actual = () => service.transfer(from, to, dangerAmount);
      expect(actual).toThrow();
    });

    it('should throw an Error if AMOUNT is 42', () => {
      let fail42: number = 42;
      let actual = () => service.transfer(from, to, fail42);
      expect(actual).toThrow();
    });

    it('should throw ERROR if TO is 42', () => {
      let fail42Account: Account = {
        balance: 42,
        customerName: 'Mr. Towel'
      };
      let actual = () => service.transfer(from, fail42Account, amount)
      expect(actual).toThrow();
    });

    it('should trow ERROR if FROM is 42', () => {
      let fail42Account: Account = {
        balance: 42,
        customerName: 'Mr. Towel'
      };
      let actual = () => service.transfer(fail42Account, to, amount);
      expect(actual).toThrow();
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
