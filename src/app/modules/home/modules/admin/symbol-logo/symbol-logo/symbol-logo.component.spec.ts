import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolLogoComponent } from './symbol-logo.component';

describe('SymbolLogoComponent', () => {
  let component: SymbolLogoComponent;
  let fixture: ComponentFixture<SymbolLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SymbolLogoComponent]
    });
    fixture = TestBed.createComponent(SymbolLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
