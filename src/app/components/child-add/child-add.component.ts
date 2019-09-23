import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-add',
  templateUrl: './child-add.component.html',
  styleUrls: ['./child-add.component.css']
})
export class ChildAddComponent implements OnInit {
  public course = {};
  @Output('keyOut') newCourse = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    console.log(this.course);
    this.newCourse.emit(this.course);
  }

}
