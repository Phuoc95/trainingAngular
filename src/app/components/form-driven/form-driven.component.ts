import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';

@Component({
  selector: 'app-form-driven',
  templateUrl: './form-driven.component.html',
  styleUrls: ['./form-driven.component.css']
})
export class FormDrivenComponent implements OnInit {
  public user = {
                  gender: 1,
                  favorite: {
                    
                  }
                };

  constructor() { }

  ngOnInit() {
  }

  onSaveUser(form) {
    if (form.valid) {
      console.log(this.user, 33);
    }
  }

}
