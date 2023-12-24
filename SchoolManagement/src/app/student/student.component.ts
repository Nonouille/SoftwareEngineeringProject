import { Component, OnInit } from '@angular/core';
import {studentService} from "../student.service";
import {Router} from "@angular/router";


interface student {
  Nom :string,
  Prenom: string,
  id: number,
  Adresse: string,
  Mail : string,
  Majeur : string,
  Year : number,
  Grades : {
    Database_Management: string,
    Fonctions_et_Suite: string,
    Transfert_Thermique: string,
    Node_React: string,
    OS_Architecture: string
  }
}

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
