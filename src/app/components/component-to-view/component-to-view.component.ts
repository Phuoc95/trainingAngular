import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-to-view',
  templateUrl: './component-to-view.component.html',
  styleUrls: ['./component-to-view.component.css']
})
export class ComponentToViewComponent implements OnInit {
  public name : string = 'phuoc';
  public obj : object = {
      age: 20,
      likegame: true,
  }

  public src : string = 'https://hinhanhdephd.com/wp-content/uploads/2017/06/top-100-hinh-nen-thien-nhien-phong-canh-dep-2-800x523.jpg'
  public check : boolean = true
  public color: string = 'red';
  public fontSize: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
