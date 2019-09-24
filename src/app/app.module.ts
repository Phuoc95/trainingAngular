import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';


//services
import { CourseService } from './services/course.service';
import { FormDrivenComponent } from './components/form-driven/form-driven.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ErrorsValidateComponent } from './components/errors-validate/errors-validate.component'

@NgModule({
  declarations: [
    AppComponent,
    FormDrivenComponent,
    ReactiveFormComponent,
    ErrorsValidateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
