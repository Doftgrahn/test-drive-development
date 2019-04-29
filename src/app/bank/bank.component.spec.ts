import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BankComponent } from './bank.component';

import Account from '../shared/account';

describe('BankComponent', () => {
  let component: BankComponent;
  let fixture: ComponentFixture<BankComponent>;
  let domElement;

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

  describe('Mock Service', () => {

    it('Should be able to show Balance', () => {
      //arrenge
      let mockService = jasmine.createSpyObj(['getBalance']);
      let fakeAccount: Account = {
        balance: 100,
        customerName: 'simon'
      }
      let expectedResult = fakeAccount.balance;
      mockService.getBalance.and.returnValue(expectedResult);
      let component = new BankComponent(mockService);
      //act

      component.showBalance(fakeAccount)
      //assert

      expect(component.account.balance).toBe(expectedResult);
      expect(mockService.getBalance).toHaveBeenCalled();
    });

    it('should be able to deposit', () => {
      //arrenge
      let mockService = jasmine.createSpyObj(['deposit']);
      let fakeAccount: Account = {
        balance: 400,
        customerName: 'Simpoa'
      }
      let fakeValue1 = fakeAccount.balance;
      let fakeValue2 = 499;
      let expectedValue = fakeValue1 + fakeValue2;
      mockService.deposit.and.returnValue(expectedValue);
      let component = new BankComponent(mockService);

      //act
      component.depositMoney(fakeAccount, fakeValue2);

      //assert
      expect(mockService.deposit).toHaveBeenCalled()
    });
    it('Should be able to Withdraw', () => {
      let mockService = jasmine.createSpyObj(['withdraw']);
      let faceAccount2: Account = {
        balance: 300,
        customerName: 'Servera'
      }
      let fakeValue1 = faceAccount2.balance;
      let fakeValue2 = 400;
      let expectedValue = fakeValue1 - fakeValue2;
      mockService.withdraw.and.returnValue(expectedValue);
      let component = new BankComponent(mockService);
      //act
      component.withdrawMoney(faceAccount2, fakeValue2);
      //assert
      expect(mockService.withdraw).toHaveBeenCalled()
    })
  });

});

/*

komponenten ska kunna visa ett konto
komponenten ska använda sig av BankService för att hämta saldot, göra insättning och göra uttag
den ska visa saldot i ett DOM-element som har CSS-klassen "accountBalance"
det ska finnas ett textfält där användaren kan skriva in ett belopp
det ska finnas en funktion som kan köras för att sätta in det inskrivna beloppet på kontot
det ska finnas en knapp som kör funktionen när man klickar på den
det ska finnas en funktion som kan köras för att ta ut det inskrivna beloppet från kontot
det ska finnas en knapp som kör funktionen när man klickar på den
*/


/*
it('should render title in a h1 tag', () => {
  fixture.detectChanges();
  const compiled = fixture.debugElement.nativeElement;
  expect(compiled.querySelector('h1').textContent).toContain('Hallå eller');
});

*/
