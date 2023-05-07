import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjmgntComponent } from './project-management.component';

describe('ProjmgntComponent', () => {
  let component: ProjmgntComponent;
  let fixture: ComponentFixture<ProjmgntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjmgntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjmgntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
