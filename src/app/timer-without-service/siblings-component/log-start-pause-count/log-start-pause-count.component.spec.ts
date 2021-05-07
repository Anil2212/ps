import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogStartPauseCountComponent } from './log-start-pause-count.component';

describe('LogStartPauseCountComponent', () => {
  let component: LogStartPauseCountComponent;
  let fixture: ComponentFixture<LogStartPauseCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogStartPauseCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogStartPauseCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
