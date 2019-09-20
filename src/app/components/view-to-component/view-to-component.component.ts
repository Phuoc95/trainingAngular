import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-to-component',
  templateUrl: './view-to-component.component.html',
  styleUrls: ['./view-to-component.component.css']
})
export class ViewToComponentComponent implements OnInit {
  public count:number = 0;
  public username:string = 'NoName';
  public name:string = 'NoName';

  constructor() { }

  ngOnInit() {
  }

  onClickMe(event) {
    console.log(event.target.innerText);
  }

  onDblClickme(event) {
    console.log(event.target.innerText);
  }

  onKeyUp(event) {
    this.username = event.target.value;
    console.log(event.target.value);
  }

  onKeyUpEnter(event) {
    this.name = event.target.value;
  }

  // incre(event) {
  //   this.count++;
  // }

}
