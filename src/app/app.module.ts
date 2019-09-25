import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
// import { ComponentToViewComponent } from './components/component-to-view/component-to-view.component';
// import { ViewToComponentComponent } from './components/view-to-component/view-to-component.component';
// import { StructuralComponent } from './components/structural/structural.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { CourseEditComponent } from './components/course-edit/course-edit.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'

//services
import { CourseService } from './services/course.service'
import { AuthGuard } from './services/guards/auth.guard';
import { LoginGuard } from './services/guards/login.guard';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canDeactivate: [LoginGuard]
  },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: CourseListComponent
      },
      {
        path: 'add',
        component: CourseAddComponent
      },
      {
        path: ':id/edit',
        component: CourseEditComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canDeactivate: [LoginGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    CoursesComponent,
    CourseAddComponent,
    CourseEditComponent,
    CourseListComponent,
    HomeComponent,
    LoginComponent,
    // ComponentToViewComponent,
    // ViewToComponentComponent,
    // StructuralComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    // CourseService,
    AuthGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
