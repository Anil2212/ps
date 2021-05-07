import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTimerLimitComponent } from './input-timer-limit.component';

describe('InputTimerLimitComponent', () => {
  let component: InputTimerLimitComponent;
  let fixture: ComponentFixture<InputTimerLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTimerLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTimerLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
