import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-div',
  templateUrl: './scroll-div.component.html',
  styleUrls: ['./scroll-div.component.scss']
})
export class ScrollDivComponent implements OnInit {
  @HostListener("window:scroll", ['$event'])
  scroll($event: any) {
    let offset = $event.target.documentElement.scrollTop + $event.path[1].innerHeight;
    let documentHeight = $event.target.documentElement.offsetHeight;
    if (Math.ceil(offset) >= documentHeight) {
      this.divs.push(this.divs.length)
    }
  }
  divs = [0, 1, 2, 3, 4, 5]
  constructor() { }

  ngOnInit(): void {
  }
  
  clickHandler(div:any){
    alert(`Button  in ${div}th div clicked`)
  }
}
