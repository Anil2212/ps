import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  private subscription: Subscription = new Subscription();
  constructor(
    private timerService: TimerService
  ) { }

  ngOnInit(): void {
    if (this.timerService.withService) {
      this.subscription.add(
        this.timerService.timerEvent.subscribe((response) => {
          this.countDownTimer = response.timer
        })
      )
      this.subscription.add(
        this.timerService.resetEvent.subscribe(() => {
          this.countDownTimer = ''
        })
      )
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
