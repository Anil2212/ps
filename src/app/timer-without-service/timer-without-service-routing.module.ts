import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerWithoutServiceComponent } from './timer-without-service.component';

const routes: Routes = [
  {
    path: '', component: TimerWithoutServiceComponent,
  }, {
    path: ':withService', component: TimerWithoutServiceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerWithoutServiceRoutingModule { }
