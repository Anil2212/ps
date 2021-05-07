import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { HttpService } from '../shared/service/http.service';

@Component({
  selector: 'app-list-and-grid',
  templateUrl: './list-and-grid.component.html',
  styleUrls: ['./list-and-grid.component.scss']
})
export class ListAndGridComponent implements OnInit {
  layout = 'list';
  sortOptionModel = 'asc'
  items:any = [];
  constructor(
    private _HttpService:HttpService
  ) { }

  ngOnInit(): void {
    this._HttpService.get('assets/products.json').subscribe((response) => {
       this.items = response;
    })
  }

}