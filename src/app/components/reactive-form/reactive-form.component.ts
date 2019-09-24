import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { logging } from 'protractor';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  public formUser;
  public sites = [ "site-1", "site-2", "site-3", "site-4" ];

  constructor(
    private _formBuider: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formUser = this._formBuider.group({
      username: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]
      ],
      email: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')
      ]
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]
      ],
      phone: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]
      ],
      gender: ['', [
        Validators.required,
      ],
      ],
      favorite: ['', [
        Validators.required,
      ]
      ],
      sites: this._formBuider.array(this.sites.map(s => this._formBuider.control(s)),
          [ Validators.required ]
      )
    })

    // this.formUser.valueChange.subscribe(data => {
    //   console.log(data, 100);
    // })
  }

  onSave() {
    // console.log(this.formUser, 88);
    console.log(this.formUser.value, 88);
  }

  onResetForm() {
    this.formUser.reset()
  }

}
