import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerrepComponent } from './ledger-reports.component';

describe('LedgerrepComponent', () => {
  let component: LedgerrepComponent;
  let fixture: ComponentFixture<LedgerrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerrepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedgerrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
