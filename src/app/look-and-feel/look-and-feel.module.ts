import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LookAndFeelComponent } from './look-and-feel.component';
import { LookAndFeelRoutingModule } from './look-and-feel-routing.module';



@NgModule({
  declarations: [
    LookAndFeelComponent
  ],
  imports: [
    CommonModule,
    LookAndFeelRoutingModule
  ]
})
export class LookAndFeelModule { }
