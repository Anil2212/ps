import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from 'src/app/shared/service/timer.service';

@Component({
  selector: 'app-log-timestamp',
  template: `
    <ul>
      <li *ngFor="let log of logs">
       <p> {{log}}</p>
      </li>
    </ul>
  `,
  styleUrls: ['./log-timestamp.component.scss']
})
export class LogTimestampComponent implements OnInit, OnDestroy {
  @Input() logs: Array<any> = []
  private _subscribe: any;
  private _resetSubscribe: any;

  constructor(
    private timerService: TimerService
  ) { }
  ngOnInit(): void {
    if (this.timerService.withService) {
      this._subscribe = this.timerService.startPauseEvent.subscribe((response) => {
        this.logs.push(response.message)
      })
      this._resetSubscribe = this.timerService.resetEvent.subscribe(() => {
        this.logs = []
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
