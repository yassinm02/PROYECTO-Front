import { TestBed } from '@angular/core/testing';

import { InventarioProductosService } from './inventario-productos.service';

describe('InventarioProductosService', () => {
  let service: InventarioProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
