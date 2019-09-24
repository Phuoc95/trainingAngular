import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-errors-validate',
  templateUrl: './errors-validate.component.html',
  styleUrls: ['./errors-validate.component.css']
})
export class ErrorsValidateComponent implements OnInit {

  @Input('control') control;
  @Input('name-control') nameControl;

  constructor() { }

  ngOnInit() {
  }

  get message() {
    for (let keyErr in this.control.errors) {
      if (this.control.dirty) {
        return this.getErrorMessage(keyErr, this.control.errors[keyErr])
      }
    }
    return null
  }

  getErrorMessage(keyErr, value) {
    let messages = {
      'required' : `${this.nameControl} bat buoc nhap`,
      'minlength' : `Toi thieu ${value.requiredLength} ky tu`,
      'mathlength' : `Toi da ${value.requiredLength} ky tu`,
      'pattern' : `${this.nameControl} Ko dung dinh dang nha`,
    }
    return messages[keyErr]
  }

}
