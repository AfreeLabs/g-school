import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../../services/FetchData.service';

@Component({
  selector: 'app-class-levels',
  templateUrl: './class-levels.component.html',
  styleUrls: ['./class-levels.component.css']
})
export class ClassLevelsComponent implements OnInit {

  classLevel= "";
  departments= "";
  department: string;
  classLevelName: string;
  // ClassLevelCode: string;

  constructor(private fetchData: FetchData) { }

  ngOnInit() {
    this.getDepartement();
    let endPoint = "api/department/classlevel/";

    this.fetchData.get(endPoint)
      .subscribe(
        (data) => {
          this.classLevel = data;
        },
        (error) => {
          console.log('unable to get info');
        });

  }

  getDepartement(){
    let endPoint = 'api/department/department/';

    this.fetchData.get(endPoint)
      .subscribe(
        (data) => {
          this.departments = data;
          console.log(this.departments[0]);
        },
        (error) => {
        console.log('unable to get info');
          
        });
  }

  onSave() {

    const classLevelForm = {
      // : this.ClassLevelCode
      name : this.classLevelName,
      department: this.department,

    }

    let endPoint = "api/department/classlevel/";

    this.fetchData.post(endPoint, classLevelForm)
      .subscribe();
  }

}
