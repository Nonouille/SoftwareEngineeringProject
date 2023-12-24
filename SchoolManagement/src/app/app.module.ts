import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { CourseComponent } from './course/course.component';
import { GradesComponent } from './grades/grades.component';
import {FormsModule} from "@angular/forms";
import { MainComponent } from './main/main.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { GradesDetailComponent } from './grades-detail/grades-detail.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CourseComponent,
    GradesComponent,
    MainComponent,
    StudentDetailComponent,
    GradesDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
