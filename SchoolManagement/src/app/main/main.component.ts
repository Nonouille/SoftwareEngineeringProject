import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  // @ts-ignore
  username:string;
  // @ts-ignore
  password:string;
  ID : string[][]= [["theo","samuel","lea","mathilde","admin"],["amadeus1520","chevreuse14","p0p0lette","firefest99","root"]];
  ngOnInit() {
  }

  LoginUser() {
    //Let's delete the red error messages
    // @ts-ignore
    document.getElementById("errorpass").style.display = "none";
    // @ts-ignore
    document.getElementById("erroruser").style.display = "none";

    //We check if the username is in ID[0] and if it is, we check if the ID[1] at the same index is the right password
    for (let i = 0; i < this.ID[0].length; i++) {
      if (this.username == this.ID[0][i]) {
        if (this.password == this.ID[1][i]) {
          //We pass the login & navigate to home page.
          this.router.navigate(['/'], {queryParams: {data: this.username}}).then(r => {
          })
          // @ts-ignore
          document.getElementById("login").style.display = "none";
          // @ts-ignore
          document.getElementById("hello").style.display = "inline";
          return;
        } else {
          //We display there is an error with the password
          // @ts-ignore
          document.getElementById("errorpass").style.display = "inline";
          return;
        }
      } else {
        //We display there is an error with the username
        // @ts-ignore
        document.getElementById("erroruser").style.display = "inline";
        return;
      }
    }
  }
  constructor(private router: Router, private route: ActivatedRoute) {
  }
}
