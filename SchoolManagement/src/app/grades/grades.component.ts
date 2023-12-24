import {Component, OnInit} from '@angular/core';
import {studentService} from "../student.service";
import {Router} from "@angular/router";
import {student} from "../student.service";

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit{
  students: student[] = [];

  constructor(private studentService: studentService, private router: Router) { }

  navigateToEditGrades(studentId: number): void {
    this.router.navigate(['/grade-detail/', studentId]);
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

}
