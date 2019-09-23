import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {Course} from './../models/courses.model'

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    public API: string = 'http://5ad4580533667e00146244b0.mockapi.io/api/courses';
    constructor(
        public http: HttpClient
    ) { }

    getAllCourses() {
        return this.http.get(this.API);
    }

    addCourse(data) {
        return this.http.post(this.API, data);
    }

}
