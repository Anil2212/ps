import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-div',
  templateUrl: './scroll-div.component.html',
  styleUrls: ['./scroll-div.component.scss']
})
export class ScrollDivComponent implements OnInit, AfterViewInit {
  divs: Array<number> = [0, 1, 2, 3, 4, 5]
  constructor(
    private _ElementRef: ElementRef
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {

    if (window.IntersectionObserver) {
      let observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              observer.unobserve(entry.target);
              this.divs.push(this.divs.length)
              setTimeout(() => {
                observer.observe(this._ElementRef.nativeElement.querySelector('.append-div:last-child'))
              }, 100)
            }
          });
        },
        { rootMargin: "0px 0px 0px 0px" });

      observer.observe(this._ElementRef.nativeElement.querySelector('.append-div:last-child'))
    }
  }

  clickHandler(divNumber: number) {
    alert(`Button  in ${divNumber}th div clicked`)
  }
}
