import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list-and-grid', pathMatch: 'full' },
  { path: 'look-and-feel', loadChildren: () => import('./look-and-feel/look-and-feel.module').then(m => m.LookAndFeelModule) },
  { path: 'list-and-grid', loadChildren: () => import('./list-and-grid/list-and-grid.module').then(m => m.ListAndGridModule) },
  { path: 'timer-without-service', loadChildren: () => import('./timer-without-service/timer-without-service.module').then(m => m.TimerWithoutServiceModule) },
  { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
  { path: 'scroll-div', loadChildren: () => import('./scroll-div/scroll-div.module').then(m => m.ScrollDivModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
