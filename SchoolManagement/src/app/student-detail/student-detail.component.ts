import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {studentService} from "../student.service";

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
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})

@Injectable(
    {
      providedIn: 'root'
    }
)
export class StudentDetailComponent implements OnInit,OnChanges{
    student: student = {} as student;
    studentId: number | undefined;
    constructor(private route: ActivatedRoute, private studentService: studentService, private router : Router) { }


    UpdateInfo(){

        const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
        const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
        const address = (document.getElementById('address') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const major = (document.getElementById('major') as HTMLInputElement).value;
        const year = (document.getElementById('year') as HTMLInputElement).value;
        if (firstName && lastName && address && email && major && year) {
          this.student.Nom = firstName;
          this.student.Prenom = lastName;
          this.student.Adresse = address;
          this.student.Mail = email;
          this.student.Majeur = major;
          this.student.Year = parseInt(year, 10);
        }

        this.studentService.updateStudentDetails(this.student);
        console.log("updateDetails button clicked");
        //this.router.navigate(['/student']);
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
    ngOnChanges(changes: SimpleChanges) {
    }
}
