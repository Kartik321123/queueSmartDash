import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWalletComponent } from './update-wallet.component';

describe('UpdateWalletComponent', () => {
  let component: UpdateWalletComponent;
  let fixture: ComponentFixture<UpdateWalletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateWalletComponent]
    });
    fixture = TestBed.createComponent(UpdateWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
