import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../../services/FetchData.service';
import { Subjects } from '../../../models/subject';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects: Subjects;
  classLvls = "";
  teachers = ""

  constructor(private fetchData: FetchData) { }

  ngOnInit() {
    this.getClassLvl();
    this.getTeacher();
    this.getSubject();
  }

  onSave() {

    // const subjectForm = {
    //   // this.ClassLevelCode
    //   // name : this.classLevelName,
    //   // department: this.department,

    // }

    const endPoint = 'api/department/subject/';

    this.fetchData.post(endPoint, this.subjects)
      .subscribe();
   }

   getSubject() {
    const endPoint = 'api/department/subject/';
    this.fetchData.get(endPoint)
      .subscribe(
        (data) => {
          this.subjects = data;
        },
        (error) => {
          console.log('unable to get info');
        });
   }
  
   getClassLvl() {
     const endPoint = 'api/department/classlevel/';

     this.fetchData.get(endPoint)
      .subscribe(
        (data) => {
          this.classLvls = data;
        });
    }

    getTeacher() {
      const endPoint = 'api/employee/teacher/';
 
      this.fetchData.get(endPoint)
       .subscribe(
         (data) => {
           this.teachers = data;
         });
      }

}
