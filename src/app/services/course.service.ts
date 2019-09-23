import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {Course} from './../models/courses.model'

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    public API: string = 'http://localhost:3000/courses';
    constructor(
        public http: HttpClient
    ) { }

    getAllCourses() {
        return this.http.get(this.API);
    }
    
    getCourse(id) {
        return this.http.get(`${this.API}/${id}`)
    }

    addCourse(data) {
        return this.http.post(this.API, data);
    }

    delCourse(id) {
        return this.http.delete(`${this.API}/${id}`);
    }

    updateCourse(id, data) {
        return this.http.put(`${this.API}/${id}`, data);
    }

}
