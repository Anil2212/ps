import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAndGridComponent } from './list-and-grid.component';

const routes: Routes = [{
  path : '', component: ListAndGridComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListAndGridRoutingModule { }
