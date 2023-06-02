import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioproductoComponent } from './inventarioproducto.component';

describe('InventarioproductoComponent', () => {
  let component: InventarioproductoComponent;
  let fixture: ComponentFixture<InventarioproductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventarioproductoComponent]
    });
    fixture = TestBed.createComponent(InventarioproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
