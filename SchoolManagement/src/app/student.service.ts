import {Injectable} from '@angular/core';
import {HttpClient, HttpContextToken} from "@angular/common/http";
import {Observable, catchError, tap, throwError} from "rxjs";

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

@Injectable({
  providedIn: 'root'
})

export class studentService{
  constructor(private http: HttpClient) {}

  students: student[] = [];
  student: student = {} as student;

  getStudents() : Observable<student[]> {
    // @ts-ignore
    return this.http.get(`/api/get-students`).pipe(tap((data: student[]) => {
      this.students = data; // Save the response into students array
      console.log("Data set")
    }), catchError((error: any) => {
      console.error('Error fetching students:', error);
      return throwError(error);
    }));
  }

  getStudentById(id:number) : Observable<student> {
    // @ts-ignore
    return this.http.get(`/api/get-students/${id}`).pipe(tap((data: student) => {
      this.student = data;
    }), catchError((error: any) => {
      console.error('Error fetching student by ID:', error);
      return throwError(error);
    }));
  }

  // @ts-ignore
  updateStudentDetails(modifiedStudent: student): Subscription {
    let id = modifiedStudent.id;
    return this.http.put<student>(`/api/modify-student/${id}`,modifiedStudent).subscribe(data => modifiedStudent = data); // Send a PUT request with the updated student data
  }


}
