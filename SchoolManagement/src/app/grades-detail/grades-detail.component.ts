import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {student} from "../student.service";
import {studentService} from "../student.service";
import { Location } from '@angular/common';


@Component({
  selector: 'app-grades-detail',
  templateUrl: './grades-detail.component.html',
  styleUrls: ['./grades-detail.component.css']
})


export class GradesDetailComponent implements OnInit{
  student: student = {} as student;
  studentId: number | undefined;
  constructor(private route: ActivatedRoute, private studentService: studentService, private router : Router, private location : Location) {
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

  Classes : string[] =
  [
      "Software_Engineering",
      "Securing_Embedded_Software",
      "Operating_System",
      "Espace_Vectoriels"
  ];

  selectedGrade: string = '';
  selectedClass: string = '';

  postGrade()
  {
      const classIndex = this.Classes.indexOf(this.selectedClass);
      console.log("Selected Class", this.selectedClass)
      console.log('Class Index ', classIndex);
      if (classIndex !== -1) {
          this.Classes.splice(classIndex, 1); // Remove the selectedClass from the Classes array
      }
      this.studentService.postNewGrade(this.student.id,this.selectedClass, this.selectedGrade);
      window.alert("New note added");
      //window.location.reload();
  }
  protected readonly Object = Object;
}
