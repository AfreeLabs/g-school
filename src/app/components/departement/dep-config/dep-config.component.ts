import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../../services/FetchData.service';

@Component({
  selector: 'app-dep-config',
  templateUrl: './dep-config.component.html',
  styleUrls: ['./dep-config.component.css']
})
export class DepConfigComponent implements OnInit {

  items = "";
  Department: string;
  abreviation: string;
  fees: string;
  // introDep: string;

  constructor(private fetchData: FetchData) {
    // this.item = db.object('/Ecole/Departements', {preserveSnapshot: true});
   }

  ngOnInit() {
    const endPoint = 'api/department/department/';

    this.fetchData.get(endPoint)
      .subscribe(
        (data) => {
          this.items = data;
        },
        (error) => {
          console.log('unable to get info');
        });
  }


  onSave(){

    const depForm = {
      name: this.Department,
      code: this.abreviation,
      fees: this.fees,
    }

    const endPoint = 'api/department/department/';

    this.fetchData.post(endPoint, depForm)
      .subscribe();
  }

}
