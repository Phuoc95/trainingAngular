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
  public age: number;
  // public idState: number;
  // public name: string;
  // public status: string;
  public states:any = [
    {
      id:1,
      name: 'Quang nam que huong toi',
      status: true
    },
    {
      id:11,
      name: 'Quang nam  yeu thuong',
      status: false
    },
    {
      id:2,
      name: 'Ha Noi',
      status: false
    },
    {
      id:3,
      name: 'Hai phong',
      status: true
    },
    {
      id:4,
      name: 'DaNang',
      status: false
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

  setStyle() {
    return {
      'color': 'white',
      'font-size': '30px'
    }
  }

}
