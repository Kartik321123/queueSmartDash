import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBotComponent } from './update-bot.component';

describe('UpdateBotComponent', () => {
  let component: UpdateBotComponent;
  let fixture: ComponentFixture<UpdateBotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBotComponent]
    });
    fixture = TestBed.createComponent(UpdateBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
