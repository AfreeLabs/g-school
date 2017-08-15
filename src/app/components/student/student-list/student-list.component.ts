import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../../services/FetchData.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  listStudent = "";
  constructor(private fetchData: FetchData) { }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    let endPoint = "api/admission/admission/";
    this.fetchData.get(endPoint)
    .subscribe(
      (data) => {
        this.listStudent = data;
      },
        (error) => {
          console.log('unable to get info');
      });
  }

}
