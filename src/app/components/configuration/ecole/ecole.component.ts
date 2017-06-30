import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-ecole',
  templateUrl: './ecole.component.html',
  styleUrls: ['./ecole.component.css']
})
export class EcoleComponent implements OnInit {
  
  item: FirebaseObjectObservable<any>;
  database = firebase.database();
  ref = this.database.ref("/Ecole/");
  departementRef = this.ref.child("Departements");
  classRef = this.ref.child("Classes");
  coursRef = this.ref.child("Cours")

  etsName: string;
  etsAbrv: string;
  annSco: string;
  email: string;
  adress: string;
  telephone: string;


  constructor(db: AngularFireDatabase) { 
    this.item = db.object('/Ecole/', {preserveSnapshot: true});
    this.item.subscribe(snapshot => {
      console.log(snapshot.key)
      console.log(snapshot.val())
      this.etsName = snapshot.val().etsName,
      this.etsAbrv = snapshot.val().etsAbrv,
      this.annSco = snapshot.val().annSco,
      this.adress = snapshot.val().adress,
      this.telephone = snapshot.val().telephone,
      this.email = snapshot.val().email

    });
  }

  ngOnInit() {
  }

  onSave(){
    this.ref.set({
      etsName: this.etsName,
      etsAbrv: this.etsAbrv,
      annSco: this.annSco,
      email: this.email,
      adress: this.adress,
      telephone: this.telephone,  
    });
  }

  // onSave(){
  //   this.departementRef.push({
  //     etsName: this.etsName,
  //     etsAbrv: this.etsAbrv,
  //     annSco: this.annSco,
  //     email: this.email,
  //     adress: this.adress,
  //     telephone: this.telephone, 
  //   });
  // }

  saveCours(){
    this.coursRef.push({
      
    });
  }

  saveClasses(){
    this.classRef.push({
      
    });
  }

  saveDepartements(){
    this.departementRef.push({
      
    });
  }

  
}


