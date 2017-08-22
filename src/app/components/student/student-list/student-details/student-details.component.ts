import { Component, OnInit, Input } from '@angular/core';
import { FetchData } from '../../../../services/FetchData.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Student } from '../../../../models/student';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  grades= "";
  payments= "";
  item: Student;

  constructor(
    private fetchData: FetchData,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    // this.getGrade();
    // this.getPayment();
    this.getCurrentStudent();
  }


  // getGrade() {
  //   const endPoint = 'api/student/grade/';
  //   this.fetchData.get(endPoint)
  //   .subscribe(
  //     (data) => {
  //       this.grades = data;
  //       console.log(this.grades);
  //     },
  //       (error) => {
  //         console.log('unable to get info');
  //     });
  // }

  // getPayment() {
  //   let endPoint = "api/student/payment/";
  //   this.fetchData.get(endPoint)
  //   .subscribe(
  //     (data) => {
  //       this.payments = data;
  //     },
  //       (error) => {
  //         console.log('unable to get info');
  //     });
  // }

  getCurrentStudent(): void {
    const endPoint = 'api/admission/admission/';
    this.route.paramMap
    .switchMap((params1: ParamMap) => this.fetchData.get(endPoint + params1.get('id')))
    .subscribe(data => this.item = data);
    console.log(this.item);
  }

}
