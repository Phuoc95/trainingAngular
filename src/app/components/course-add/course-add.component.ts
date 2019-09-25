import { Component, OnInit } from "@angular/core";
import { CourseService } from "./../../services/course.service";
import { Subscription } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: "app-course-add",
  templateUrl: "./course-add.component.html",
  styleUrls: ["./course-add.component.css"]
})
export class CourseAddComponent implements OnInit {
  public course = {};
  public subscription: Subscription;

  constructor(
    public courseService: CourseService,
    public routerService: Router
  ) {}

  ngOnInit() {}

  onAddCourse() {
    this.subscription = this.courseService
      .addCourse(this.course)
      .subscribe(res => {
        // if (res && res.id) {
        //     this.routerService.navigate(['/courses'])
        // }
      });
  }

  onDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
