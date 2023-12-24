import { Component, OnInit } from '@angular/core';
import {studentService} from "../student.service";
import {Router} from "@angular/router";
import {student} from "../student.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
    students : student[] = [];

    constructor(private studentService: studentService, private router: Router) { }

    navigateToEdit(studentId: number): void {
        this.router.navigate(['/student-detail/', studentId]);
    }


    ngOnInit(): void {
      this.studentService.getStudents().subscribe(
        (data: student[]) => {
          this.students = data; // Assign fetched data to component's students array
        },
        (error:any) => {
          console.error('Error fetching students:', error);
        }
      );
    }
    protected readonly navigator = navigator;
}
