import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepdailysheetComponent } from './daily-sheet.component';

describe('DepdailysheetComponent', () => {
  let component: DepdailysheetComponent;
  let fixture: ComponentFixture<DepdailysheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepdailysheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepdailysheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
