import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimerService } from '../shared/service/timer.service';

@Component({
  selector: 'app-timer-without-service',
  templateUrl: './timer-without-service.component.html',
  styleUrls: ['./timer-without-service.component.scss']
})
export class TimerWithoutServiceComponent implements OnInit {

  constructor(    
    private route: ActivatedRoute,
    private timerService: TimerService
  ) { }
  _logs: Array<string> = [];
   coutTime: number | string = '';
   startedCount: number = 0;
   pausedCount: number = 0;
  ngOnInit(): void { 
    this.route.params.subscribe((params) => {
      this.timerService.withService = (params.withService) ? true : false;
    })
  }
  timerEventHandler($event: any) {
     this.coutTime = $event.timer;
  }
  startPauseEventHandler($event: any){
    if($event.type === 'start'){
      this.startedCount = $event.count
    }
    if($event.type === 'pause'){
      this.pausedCount = $event.count
    }
    this._logs.push($event.message)
  }
  resetEventHandler(){
    this._logs = [];
    this.coutTime = '';
    this.startedCount = 0;
    this.pausedCount = 0;
  }
}
