import { Component, OnInit } from '@angular/core';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FetchData } from '../../../services/FetchData.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  items = "";

  constructor(private fetchData: FetchData, private router: Router) { }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    let endPoint = "api/admission/admission/";
    this.fetchData.get(endPoint)
    .subscribe(
      (data) => {
        this.items = data;
      },
        (error) => {
          console.log('unable to get info');
      });
  }



}
