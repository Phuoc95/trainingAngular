import { Component, OnInit } from '@angular/core';
import { CourseService } from './../../services/course.service';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';


@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
    public subscription: Subscription;
    public courses = [];
    // public courses:Array<any> = [];

    constructor(
        public courseService: CourseService
    ) { }

    ngOnInit() {
        this.subscription = this.courseService.getAllCourses().subscribe((data: Array<any>) => {
            this.courses = data;
        })
    }

    onDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe()
        }
    }

    onDelete(id) {
        this.subscription = this.courseService.delCourse(id).subscribe(res => {
            _.remove(this.courses, (item)=>{
                return item.id === id
            })
        })
    }

}
