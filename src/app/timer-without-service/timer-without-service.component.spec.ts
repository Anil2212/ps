import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerWithoutServiceComponent } from './timer-without-service.component';

describe('TimerWithoutServiceComponent', () => {
  let component: TimerWithoutServiceComponent;
  let fixture: ComponentFixture<TimerWithoutServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerWithoutServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerWithoutServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
