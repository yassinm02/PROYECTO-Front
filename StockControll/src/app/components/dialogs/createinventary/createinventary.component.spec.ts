import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateinventaryComponent } from './createinventary.component';

describe('CreateinventaryComponent', () => {
  let component: CreateinventaryComponent;
  let fixture: ComponentFixture<CreateinventaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateinventaryComponent]
    });
    fixture = TestBed.createComponent(CreateinventaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
