import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Departement } from '../../../models/departement';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  database = firebase.database();
  ref = this.database.ref("/Ecole/");
  // classeRef = this.ref.child("Classe/");
  departementRef = this.ref.child("Departements/");
  departement= [];

  constructor() {
    this.departementRef.once("value", snapshot => {
      this.departement = Array.of(snapshot.val());
      // console.log(snapshot.val().depName);
      console.log(this.departement);
    });
    
   }

  ngOnInit() {

  }

  getClassData(){
    // this.departementRef = this.ref.child("Departements/");
  }

}
