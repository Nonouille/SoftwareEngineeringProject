import { Component, OnInit } from '@angular/core';
import {convertToParamMap, ActivatedRoute,Router} from "@angular/router";
import {environment} from "../environments/environment";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'SchoolManagement';
  constructor(private route: ActivatedRoute, private router: Router) {
  }
  user: string | undefined;
  ngOnInit(): void  {
    this.route.queryParams.subscribe((params:any) =>{
      this.user = params.data
    })
  }
  goHome(){
    this.router.navigate(['/']);
  }
  goStudent(){
    this.router.navigate(['/student']);
  }
  goCourse(){
    this.router.navigate(['/course']);
  }
  goGrades(){
    this.router.navigate(['/grades']);
  }
}


