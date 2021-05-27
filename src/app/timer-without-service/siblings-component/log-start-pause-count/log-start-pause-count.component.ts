import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from 'src/app/shared/service/timer.service';

@Component({
  selector: 'app-log-start-pause-count',
  template: `
    <ul>
      <li> 
        <div class="box">         
         <span>{{start}}</span>
         <label>Started</label>
        </div>
      </li>  
      <li> 
        <div class="box">
         <span>{{pause}}</span>
         <label>Paused</label>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['./log-start-pause-count.component.scss']
})
export class LogStartPauseCountComponent implements OnInit, OnDestroy {
  @Input() start = 0
  @Input() pause = 0
  private subscription: Subscription = new Subscription();
  constructor(
    private timerService: TimerService
  ) { }

  ngOnInit(): void {
    if (this.timerService.withService) {
      this.subscription.add(
        this.timerService.startPauseEvent.subscribe((response) => {
          if (response.type === 'start') {
            this.start = response.count
          }
          if (response.type === 'pause') {
            this.pause = response.count
          }
        })
      )
      this.subscription.add(
        this.timerService.resetEvent.subscribe(() => {
          this.start = 0;
          this.pause = 0;
        })
      )
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
