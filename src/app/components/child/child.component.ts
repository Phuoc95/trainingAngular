import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('keyCourses') list_course;

  constructor() { }

  ngOnInit() {
    console.log(this.list_course, 100);
  }

}
