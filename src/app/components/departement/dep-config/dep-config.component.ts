import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-dep-config',
  templateUrl: './dep-config.component.html',
  styleUrls: ['./dep-config.component.css']
})
export class DepConfigComponent implements OnInit {

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
    
  }

}
