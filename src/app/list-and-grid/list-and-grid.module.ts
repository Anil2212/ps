import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListAndGridRoutingModule } from './list-and-grid-routing.module';
import { ListAndGridComponent } from './list-and-grid.component';
import { SortPipe } from '../shared/pipe/sort.pipe';


@NgModule({
  declarations: [
    ListAndGridComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ListAndGridRoutingModule
  ]
})
export class ListAndGridModule { }
