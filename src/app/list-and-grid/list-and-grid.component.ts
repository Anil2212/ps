import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../shared/service/http.service';

@Component({
  selector: 'app-list-and-grid',
  templateUrl: './list-and-grid.component.html',
  styleUrls: ['./list-and-grid.component.scss']
})
export class ListAndGridComponent implements OnInit, OnDestroy {
  layout = true;
  sortOptionModel = 'asc';
  items: any = [];
  private subscription: Subscription = new Subscription();
  constructor(
    private _HttpService: HttpService
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this._HttpService.get('assets/products.json').subscribe((response) => {
        this.items = response;
      }, (error) => {
        console.log(error)
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}