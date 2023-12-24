import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {student} from "../student.service";
import {studentService} from "../student.service";


@Component({
  selector: 'app-grades-detail',
  templateUrl: './grades-detail.component.html',
  styleUrls: ['./grades-detail.component.css']
})


export class GradesDetailComponent implements OnInit{
  student: student = {} as student;
  studentId: number | undefined;
  constructor(private route: ActivatedRoute, private studentService: studentService, private router : Router) {
  }
  ngOnInit(): void {
    // Retrieve the ID parameter from the URL
    this.route.params.subscribe(params => {
      this.studentId = +params['id']; // Convert the extracted ID to a number
      if (this.studentId) {
        // Call the getStudentById method with the extracted ID
        this.studentService.getStudentById(this.studentId).subscribe(
            (data: student) => {
              this.student = data; // Assign fetched data to component's students array
            },
            (error: any) => {
              console.error('Error fetching students:', error);
            }
        )
      }
    });
  }
}
