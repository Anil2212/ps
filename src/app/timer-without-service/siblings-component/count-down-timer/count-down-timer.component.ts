import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from 'src/app/shared/service/timer.service';

@Component({
  selector: 'app-count-down-timer',
  template: `
  <div class="transfor-center">
    <h2>Count Down Timer</h2>
    <p>
      {{ countDownTimer }}
    </p>
  </div>
  `,
  styleUrls: ['./count-down-timer.component.scss']
})
export class CountDownTimerComponent implements OnInit, OnDestroy {
  @Input() countDownTimer: number | string = '';
  private _subscribe: any;
  private _resetSubscribe: any;
  constructor(
    private timerService: TimerService
  ) { }

  ngOnInit(): void {
    if (this.timerService.withService) {
      this._subscribe = this.timerService.timerEvent.subscribe((response) => {
        this.countDownTimer = response.timer
      })
      this._resetSubscribe = this.timerService.resetEvent.subscribe(() => {
        this.countDownTimer = ''
      })
    }
  }

  ngOnDestroy(): void {
    if (this._subscribe) {
      this._subscribe.unsubscribe()
    }
    if (this._resetSubscribe) {
      this._resetSubscribe.unsubscribe()
    }
  }

}
