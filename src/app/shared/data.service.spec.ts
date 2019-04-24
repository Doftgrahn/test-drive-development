import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('Service', () => {
  let service: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.get(DataService);
  })

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

});


/*--
Get Balance Syndrome deluxe
--*/


describe('getBalance Function', () => {
  let service: DataService;
  beforeEach(() => {

    TestBed.configureTestingModule({});
    
    service = TestBed.get(DataService);

  })

  it('should exist', () => {

    let actual = service.getBalance();

    expect(actual).toBeTruthy();

  })

  it('Should return Balance', () => {

    let expected = typeof Number;

    let actual = service.getBalance();

    expect(actual).toBe(expected);
  })

});


/* --
Deposit Syndrome
--*/


describe('Deposit function', () => {
  let service: DataService;
  beforeEach(() => {

    TestBed.configureTestingModule({});

    service = TestBed.get(DataService);

  });

  it('Deposit is Defined', () => {

    let actual = service.deposit();

    expect(actual).toBeTruthy()
  });

  it('should throw an eror in deposition is invalid', () => {

    let actual = service.deposit();

    expect(actual).toThrowError()
  })

  it('should check if customer has a valid account, otherwise return false', () => {
    let actual = service.deposit()

    expect(actual).toBeFalsy()
  })

  it('should only accept values bigger than zero', () => {
    let actual = service.deposit();

    expect(actual).toBeGreaterThan(0)
  })
});


/*--
Withdrawal syndrome
--*/


describe('withdraw function all testing', () => {
  let service: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(DataService);
  })
  it('should av a withdraw function', () => {
    let actual = service.withdraw();

    expect(actual).toBeTruthy()
  })
  it('should not be able to withdraw more than 10k sek', () => {
    let actual = service.withdraw();

    expect(actual).toBeLessThan(10000);
  })
});


/*--
Transfer Syndrome
--*/


describe('Transfer Function', () => {
  let service: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(DataService);
  })
  it('should have a transfer function', () => {

    let actual = service.transfer();

    expect(actual).toBeTruthy();
  });

  it('should be higher than zero', () => {
    let actual = service.transfer();

    expect(actual).toBeGreaterThan(10);
  })

});
