import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollDivRoutingModule } from './scroll-div-routing.module';
import { ScrollDivComponent } from './scroll-div.component';

@NgModule({
  declarations: [
    ScrollDivComponent
  ],
  imports: [
    CommonModule,
    ScrollDivRoutingModule
  ]
})
export class ScrollDivModule { }
