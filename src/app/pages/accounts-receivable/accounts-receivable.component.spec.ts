import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountrecComponent } from './accounts-receivable.component';

describe('AccountrecComponent', () => {
  let component: AccountrecComponent;
  let fixture: ComponentFixture<AccountrecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountrecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
