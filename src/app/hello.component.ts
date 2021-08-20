import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <div style="margin: 20px">
      <a
        *ngFor="let el of pages"
        [ngClass]="{ active: active == el }"
        (click)="active = el"
      >
        {{ el }}</a
      >
    </div>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
      a {
        padding: 10px 20px;
        background: #ccc;
        border: 1px solid #efefef;
        cursor: pointer;
      }

      a.active {
        color: #e2e2e2;
        background: #2e2e2e;
      }
    `
  ]
})
export class HelloComponent implements OnInit {
  @Input() page: number;

  active = 1;

  pages;

  constructor() {}

  ngOnInit() {

    let value1: number = this.page / 10
    let value2: number = Math.round(this.page / 10)
    console.log(value2)
    console.log(value1)
    let pageValue = 3
    if(value1 > value2){
      
      pageValue = Math.round(this.page / 10) + 2
      console.log("area worked")
      this.pages = Array(pageValue)
        .fill(0)
        .map((x, i) => i + 1);
    }else {
      pageValue = Math.round(this.page / 10) + 1
      console.log("area2 worked")
      this.pages = Array(pageValue)
        .fill(0)
        .map((x, i) => i + 1);
    }
    this.pages.pop();
  }

  get currentPage() {
    return this.active;
  }
}
