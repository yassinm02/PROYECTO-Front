import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDITPROVIDERComponent } from './editprovider.component';

describe('EDITPROVIDERComponent', () => {
  let component: EDITPROVIDERComponent;
  let fixture: ComponentFixture<EDITPROVIDERComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EDITPROVIDERComponent]
    });
    fixture = TestBed.createComponent(EDITPROVIDERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
