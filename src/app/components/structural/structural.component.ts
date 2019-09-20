import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
  public isShow: boolean  = true;
  public username: string  = 'PHuoc';
  public isCheck: boolean = true;
  public age: number = 0;
  public states:any = [
    {
      id:1,
      name: 'QN',
      area: 123,
    },
    {
      id:2,
      name: 'QN2',
      area: 123,
    },
    {
      id:3,
      name: 'QN2',
      area: 123,
    },
  ]


  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.isShow  = !this.isShow
  }  

  onChange(value) {
    this.isCheck = value
  }

  myTrackBy(index, item) {
    console.log(index);
  }

}
