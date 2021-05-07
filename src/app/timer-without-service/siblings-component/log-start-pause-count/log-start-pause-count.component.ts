import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
  private _subscribe: any;
  private _resetSubscribe: any;
  constructor(
    private timerService: TimerService
  ) { }

  ngOnInit(): void {
    if (this.timerService.withService) {
      this._subscribe = this.timerService.startPauseEvent.subscribe((response) => {
        if (response.type === 'start') {
          this.start = response.count
        }
        if (response.type === 'pause') {
          this.pause = response.count
        }
      })

      this._resetSubscribe = this.timerService.resetEvent.subscribe(() => {
        this.start = 0;
      })
      this._resetSubscribe = this.timerService.resetEvent.subscribe(() => {
        this.pause = 0;
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
