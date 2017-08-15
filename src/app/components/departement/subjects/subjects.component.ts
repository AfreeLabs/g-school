import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../../services/FetchData.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subject= "";

  constructor(private fetchData: FetchData) { }

  ngOnInit() {
    this.getClassLevel();
    let endPoint = "api/department/subject/";

    this.fetchData.get(endPoint)
      .subscribe(
        (data) => {
          this.subject = data;
        },
        (error) => {
          console.log('unable to get info');
        });
  }

  getClassLevel(){
    let endPoint = 'api/department/subject/';

    this.fetchData.get(endPoint)
      .subscribe(
        (data) => {
          // this.departments = data;
          // console.log(this.departments[0]);
        },
        (error) => {
        console.log('unable to get info');
          
        });
  }

  onSave() {

  //   const classLevelForm = {
  //     // : this.ClassLevelCode
  //     name : this.classLevelName,
  //     department: this.department,

  //   }

  //   let endPoint = "api/department/classlevel/";

  //   this.fetchData.post(endPoint, classLevelForm)
  //     .subscribe();
   }

}
