import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
// import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  database = firebase.database();
  ref = this.database.ref("/Ecole/");
  coursRef = this.ref.child("Cours/");

  NameCrs: string;
  cdeCrs: string;
  abrvCrs: string;
  DepCrs: string;
  introCrs: string;

  constructor() {

   }

  ngOnInit() {
  }

  onSaveCours(){
    this.coursRef.push({
      NameCrs: this.NameCrs,
      cdeCrs: this.cdeCrs,
      abrvCrs: this.abrvCrs,
      DepCrs: this.DepCrs,
      introCrs: this.introCrs, 
    });
  }

}
