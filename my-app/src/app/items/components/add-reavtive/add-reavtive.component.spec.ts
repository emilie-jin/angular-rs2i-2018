import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReavtiveComponent } from './add-reavtive.component';

describe('AddReavtiveComponent', () => {
  let component: AddReavtiveComponent;
  let fixture: ComponentFixture<AddReavtiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReavtiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReavtiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
