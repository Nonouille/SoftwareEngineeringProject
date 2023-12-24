import {Component, OnInit} from '@angular/core';
import {studentService} from "../student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit{
  students: any;

  constructor(private studentService: studentService, private router: Router) { }

  navigateToEditGrades(studentId: number): void {
    this.router.navigate(['/grade-detail/', studentId]);
  }


  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

}
