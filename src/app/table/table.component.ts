import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/service/http.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  tableHeader: any = [];
  tableData: any = [];
  _tableData: any = [];
  order: string = 'none';
  key: string = '';
  constructor(
    private _HttpService: HttpService
  ) { }

  ngOnInit(): void {
    this._HttpService.get('assets/students.json').subscribe((response: any) => {
      this._tableData = [...response];
      this.tableData = response;
      this.tableHeader = [];
      for (let prop in response[0]) {
        this.tableHeader.push(prop);
      }
      this.key = this.tableHeader[0]
    })
  }
  headerEvent(prop: string) {
    if (prop === this.key) {

    } else {
      this.key = prop;
      this.order = 'none'
    }
    switch (this.order) {
      case 'none':
        this.order = 'asc'
        break;
      case 'asc':
        this.order = 'desc'
        break;
      case 'desc':
        this.order = 'none'
        break;
    }
    if (this.order === 'none') {
      let __tableData = [... this._tableData]
      this.tableData = __tableData;
    } else {
      let __tableData = [... this._tableData]
      this.tableData = __tableData.sort((a: any, b: any) => {
        if(typeof a[this.key] === 'string' || typeof b[this.key] === 'string'){
          return this.order === 'asc' ? (a[this.key].localeCompare(b[this.key])) : (b[this.key].localeCompare(a[this.key]))
        }else{
          return this.order === 'asc' ? (a[this.key] - b[this.key]) : (b[this.key] - a[this.key]);
        }
        
      })
    }
  }

}
