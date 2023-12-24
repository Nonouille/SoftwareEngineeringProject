import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseComponent} from './course/course.component';
import {GradesComponent} from './grades/grades.component';
import {StudentComponent} from './student/student.component';
import {MainComponent} from "./main/main.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";
import {GradesDetailComponent} from "./grades-detail/grades-detail.component";


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path : 'course', component : CourseComponent},
  { path : 'grades', component : GradesComponent},
  { path : 'student', component : StudentComponent},
  { path : 'main', component : MainComponent},
  { path : 'student-detail/:id', component : StudentDetailComponent},
  { path : 'grade-detail/:id', component : GradesDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
