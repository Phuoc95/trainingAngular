import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public check = false;
  public toggle = false;

  constructor() { }

  ngOnInit() {
  }

  activeLogin() {
    localStorage.setItem('checkLogin', JSON.stringify({check: true}))
    this.toggle = !this.toggle;
  }

  disableLogin() {
    if (localStorage.getItem('checkLogin')) {
        localStorage.removeItem('checkLogin')
    }
  }

  enableDeactivate() {
    localStorage.setItem('active', JSON.stringify({check: true}))
    this.toggle = !this.toggle;
  }

  disableDeactivate() {
    if (localStorage.getItem('active')) {
        localStorage.removeItem('active')
    }
  }


}
