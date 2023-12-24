import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent {
  cours= [
    {
      Nom: 'Transfert Thermique',
      Replays: ['lien 1', 'lien 2'],
      ContactProf: 'DUPONT Jean : Jean.Dupont@edu.devinci.fr',
      Coefficient: 2
    },
    {
      Nom: 'Fonctions et Suite',
      Replays: ['lien 1', 'lien 2'],
      ContactProf: 'LEFEVRE Marie: Marie.Lefevre@edu.devinci.fr',
      Coefficient: 2
    },
    {
      Nom: 'Database Management',
      Replays: ['lien 1', 'lien 2'],
      ContactProf: 'DUBOIS Pierre: Pierre.Dubois@edu.devinci.fr',
      Coefficient: 2
    },
    {
      Nom: 'Node & React',
      Replays: ['lien 1', 'lien 2'],
      ContactProf: 'MARTIN Sophie: Sophie.Martin@edu.devinci.fr',
      Coefficient: 2
    },
    {
      Nom: 'OS Architecture',
      Replays: ['lien 1', 'lien 2'],
      ContactProf: 'DELACROIX Luc: Luc.Delacroix@edu.devinci.fr',
      Coefficient: 2
    }
  ];
}
