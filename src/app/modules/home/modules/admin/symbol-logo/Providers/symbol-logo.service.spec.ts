import { TestBed } from '@angular/core/testing';

import { SymbolLogoService } from './symbol-logo.service';

describe('SymbolLogoService', () => {
  let service: SymbolLogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SymbolLogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
