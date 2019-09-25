import { Component, OnInit } from '@angular/core';
import { CourseService } from "./../../services/course.service";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  public subscription: Subscription;
  public subscriptionParams: Subscription;
  public course = {};

  constructor(
    public courseService: CourseService,
    public routerService: Router,
    public activatedRouterService: ActivatedRoute
  ) {}

  ngOnInit() {
    this.onLoadData()
  }

  onLoadData() {
    // this.subscriptionParams = this.activatedRouterService.parent.params.subscribe(data => {
    //   console.log(data,20);
    // })
    this.subscriptionParams = this.activatedRouterService.params.subscribe(data => {
      this.subscription = this.courseService.getCourse(data['id']).subscribe(res => {
        this.course = res;
      })
    })
  }

  // onUpdateCourse() {
  //   this.subscription = this.courseService.updateCourse(this.course.id, this.course)
  //     .subscribe(res => {
  //       if (res) {
  //           this.routerService.navigate(['/courses'])
  //       }
  //     });
  // }

  onDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionParams) {
      this.subscriptionParams.unsubscribe();
    }
  }
}
