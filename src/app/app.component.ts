import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "my-app";
  public listCourse = [
    {
      id: 1,
      name: "php",
      des: "php laravel",
      fee: 29
    },
    {
      name: "nodejs",
      des: "node nang cao",
      fee: 30,
      id: 7
    }
  ];

  onGetCourse(e) {
    this.listCourse.push(e);
    console.log(this.listCourse,22);
  }
}
