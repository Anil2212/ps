import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerWithoutServiceRoutingModule } from './timer-without-service-routing.module';
import { TimerWithoutServiceComponent } from './timer-without-service.component';
import { CountDownTimerComponent } from './siblings-component/count-down-timer/count-down-timer.component';
import { InputTimerLimitComponent } from './siblings-component/input-timer-limit/input-timer-limit.component';
import { LogTimestampComponent } from './siblings-component/log-timestamp/log-timestamp.component';
import { FormsModule } from '@angular/forms';
import { LogStartPauseCountComponent } from './siblings-component/log-start-pause-count/log-start-pause-count.component';


@NgModule({
  declarations: [
    TimerWithoutServiceComponent,
    CountDownTimerComponent,
    InputTimerLimitComponent,
    LogTimestampComponent,
    LogStartPauseCountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TimerWithoutServiceRoutingModule
  ]
})
export class TimerWithoutServiceModule { }
