import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklypcloseComponent } from './weekly-physical-closing.component';

describe('WeeklypcloseComponent', () => {
  let component: WeeklypcloseComponent;
  let fixture: ComponentFixture<WeeklypcloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklypcloseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklypcloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
