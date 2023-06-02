import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarislistComponent } from './inventarislist.component';

describe('InventarislistComponent', () => {
  let component: InventarislistComponent;
  let fixture: ComponentFixture<InventarislistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventarislistComponent]
    });
    fixture = TestBed.createComponent(InventarislistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
