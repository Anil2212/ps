import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollDivComponent } from './scroll-div.component';

const routes: Routes = [
  {
    path: '', component: ScrollDivComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrollDivRoutingModule { }
