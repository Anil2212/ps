import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TimerService } from 'src/app/shared/service/timer.service';

@Component({
  selector: 'app-input-timer-limit',
  template: `
    <div class="transfor-center">
    <div class="input-text-con">
        <label> Enter Time Limit</label>
        <input class="input-text-field" type="number" [disabled]="toggleState" [min]="10" [(ngModel)]="timer" (keyup)="ngModelChangeEvent()" (mouseup)="ngModelChangeEvent()" />
    </div>
    <div class="action-btn">
    <button class="btn btn-primary" (click)="startPause()">{{(toggleState)? 'Pause':'Start'}}</button>
    <button class="btn btn-primary"(click)="reset()">Reset</button>    
    </div>
    </div>
  `,
  styleUrls: ['./input-timer-limit.component.scss']
})
export class InputTimerLimitComponent implements OnInit {
  toggleState: boolean = false;
  count: number = 0
  startCount: number = 0
  pauseCount: number = 0
  clearInterval: any;
  @Input() timer: number = 3000;
  @Output() timerEvent = new EventEmitter<{ timer: number }>();
  @Output() resetEvent = new EventEmitter<null>();
  @Output() startPauseEvent = new EventEmitter<{ type: string, message: string, count: number }>();
  constructor(
    private timerService: TimerService
  ) { }

  ngOnInit(): void {
    this.count = this.timer - 1;
  }
  ngModelChangeEvent() {
    if (this.timer < 10) {
      this.timer = 10;
    }
    this.count = (this.timer - 1)
  }
  startPause() {
    this.toggleState = !this.toggleState;
    if (this.toggleState) {
      if (this.timerService.withService) {
        this.timerService.startPauseEvent.next({ type: 'start', message: `Start at ${new Date().toLocaleString()}`, count: (this.startCount += 1) })
      } else {
        this.startPauseEvent.emit({ type: 'start', message: `Start at ${new Date().toLocaleString()}`, count: (this.startCount += 1) })
      }

      this.clearInterval = setInterval(() => {
        if (this.timerService.withService) {
          this.timerService.timerEvent.next({ timer: this.count })
        } else {
          this.timerEvent.emit({ timer: this.count })
        }
        if (this.count === 0) {
          this.toggleState = false;
          this.count = this.timer - 1;
          if (this.timerService.withService) {
            this.timerService.startPauseEvent.next({ type: 'pause', message: `Pause at ${new Date().toLocaleString()}`, count: (this.pauseCount += 1) })
          } else {
            this.startPauseEvent.emit({ type: 'pause', message: `Pause at ${new Date().toLocaleString()}`, count: (this.pauseCount += 1) })
          }
          clearInterval(this.clearInterval)
          return
        }
        this.count = this.count - 1;
      }, 1000)
    } else {
      if (this.timerService.withService) {
        this.timerService.startPauseEvent.next({ type: 'pause', message: `Pause at ${new Date().toLocaleString()}`, count: (this.pauseCount += 1) })
      } else {
        this.startPauseEvent.emit({ type: 'pause', message: `Pause at ${new Date().toLocaleString()}`, count: (this.pauseCount += 1) })
      }
      clearInterval(this.clearInterval);
    }
  }
  reset() {
    clearInterval(this.clearInterval);
    if (this.timerService.withService) {
      this.timerService.resetEvent.next()
    } else {
      this.resetEvent.emit()
    }
    this.startCount = 0;
    this.pauseCount = 0;
    this.count = this.timer - 1;
    this.toggleState = false;
  }
}
