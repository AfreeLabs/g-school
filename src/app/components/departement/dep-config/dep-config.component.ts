import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-dep-config',
  templateUrl: './dep-config.component.html',
  styleUrls: ['./dep-config.component.css']
})
export class DepConfigComponent implements OnInit {

  item: FirebaseObjectObservable<any>;
  database = firebase.database();
  ref = this.database.ref("/Ecole/");
  departementRef = this.ref.child("Departements/");

  depName: string;
  depAbrv: string;
  depRspnsbl: string;
  depPrncpl: string;
  introDep: string;

  constructor() {
    // this.item = db.object('/Ecole/Departements', {preserveSnapshot: true});
   }

  ngOnInit() {
  }

  // onSave(db: AngularFireDatabase){
  //   this.item.set({
  //     depName: this.depName,
  //     depAbrv: this.depAbrv,
  //     depRspnsbl: this.depRspnsbl,
  //     depPrncpl: this.depPrncpl,
  //     introDep: this.introDep,
  //   });
  // }

  onSave(){
    this.departementRef.push({
      depName: this.depName,
      depAbrv: this.depAbrv,
      depRspnsbl: this.depRspnsbl,
      depPrncpl: this.depPrncpl,
      introDep: this.introDep, 
    });
  }

}
