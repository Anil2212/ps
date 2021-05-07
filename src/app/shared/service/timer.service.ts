import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timerEvent = new Subject<{ timer: number }>();
  resetEvent = new Subject<null>();
  startPauseEvent = new Subject<{ type: string, message: string, count: number }>();
  withService: boolean = false;
  constructor() { }
}
