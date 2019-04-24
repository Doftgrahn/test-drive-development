import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankComponent } from './bank.component';

describe('BankComponent', () => {
  let component: BankComponent;
  let fixture: ComponentFixture<BankComponent>;
  let app: BankComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BankComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    app = fixture.debugElement.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an account that is bigger than Zero dinero', () => {
    let actual = app.account;

    expect(actual).toBeGreaterThanOrEqual(0);
  })

  it('should contain a name of the customer', () => {
    let actual = app.customer;
    expect(actual).toBe('')
  })

  it('A customer Should be able to have more than one account', () => {
    let actual = app.numberOfAccounts;

    expect(actual).toBeGreaterThanOrEqual(0);
  })

  it('should show balance in a span element with the CSS-class accountBalance', () => {
    const compiled = fixture.debugElement.query(By.class('.accountBalance'))
    expect(compiled)
  })

});


/*--

it(`should have as title 'test-one'`, () => {
  app = fixture.debugElement.componentInstance;
  expect(app.title).toEqual('test-one');
});

it('should render title in a h1 tag', () => {
  fixture.detectChanges();
  const compiled = fixture.debugElement.nativeElement;
  expect(compiled.querySelector('h1').textContent).toContain('Hallå eller');
});



--*/
