import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BankComponent } from './bank.component';


import Account from '../shared/account';

describe('BankComponent', () => {
  let component: BankComponent;
  let fixture: ComponentFixture<BankComponent>;
  let domElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BankComponent], imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankComponent);
    component = fixture.componentInstance;
    domElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('should have the proper DOM ELEMENTS', () => {

    it('should render BALANCE in dom element with CSS-class .accountBalance', () => {
      let balanceElement = domElement.querySelector('.accountBalance');
      expect(balanceElement).toBeTruthy();
    });

    it('should render an Input Field', () => {
      let inputElement = domElement.querySelector('input');
      expect(inputElement).toBeTruthy()
    });
    it('should RENDER a DEPOSIT Button', () => {
      let depositButton = domElement.querySelector('.accountDepositButton');
      expect(depositButton).toBeTruthy();
    })
    it('should RENDER a WITHDRAW Button', () => {
      let withdrawButton = domElement.querySelector('.accountWithdrawButton')
      expect(withdrawButton).toBeTruthy()
    })
  });

  describe('Mockup', () => {
    let dangerAccount: Account = {
      customerName: 'simon',
      balance: 2000
    }

    it('Should be able to show Balance', () => {
      //arrenge

      let mockService = jasmine.createSpyObj(['getBalance']);
      let expectedResult = dangerAccount.balance;
      mockService.getBalance.and.returnValue(expectedResult);
      let bankComponent = new BankComponent(mockService);
      //act
      bankComponent.showBalance(dangerAccount);
      component.account = dangerAccount
      //assert

      expect(component.account.balance).toBe(expectedResult)
      expect(mockService.getBalance).toHaveBeenCalled();
    });

    let fakeAccount: Account = {
      balance: 400,
      customerName: 'Simpoa'
    };

    it('should be able to deposit', () => {
      //arrenge
      let mockService = jasmine.createSpyObj(['deposit', 'getBalance']);

      let fakeValue1 = fakeAccount.balance;
      let fakeValue2 = 499;
      let expectedValue = fakeValue1 + fakeValue2;
      mockService.deposit.and.returnValue(expectedValue);
      let component = new BankComponent(mockService);
      //act
      component.depositMoney(fakeAccount, fakeValue2);
      component.account = fakeAccount;
      //assert
      expect(component.account.balance + fakeValue2).toBe(expectedValue);
      expect(mockService.deposit).toHaveBeenCalled();
    });
    it('Should be able to Withdraw', () => {
      //arrenge
      let mockService = jasmine.createSpyObj(['withdraw']);
      let faceAccount2: Account = {
        balance: 700,
        customerName: 'Servera'
      };
      let fakeValue1 = faceAccount2.balance;
      let fakeValue2 = 400;
      let expectedValue = fakeValue1 - fakeValue2;
      mockService.withdraw
      let component = new BankComponent(mockService);
      //act
      component.withdrawMoney(faceAccount2, fakeValue2);
      component.account = faceAccount2;
      //assert
      expect(component.account.balance - fakeValue2).toBe(expectedValue);
      expect(mockService.withdraw).toHaveBeenCalledWith(faceAccount2, fakeValue2);

    })

  });

});
