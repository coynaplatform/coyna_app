import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftsheetComponent } from './shift-sheet.component';

describe('ShiftsheetComponent', () => {
  let component: ShiftsheetComponent;
  let fixture: ComponentFixture<ShiftsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
