import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FetchData } from '../../../services/FetchData.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  listStudent = "";
  @Output () onGetDetails = new EventEmitter();

  constructor(private fetchData: FetchData, private router: Router) { }

  ngOnInit() {
    // this.getInfo();
  }

  // getInfo() {
  //   let endPoint = "api/admission/admission/";
  //   this.fetchData.get(endPoint)
  //   .subscribe(
  //     (data) => {
  //       this.listStudent = data;
  //     },
  //       (error) => {
  //         console.log('unable to get info');
  //     });
  // }

  getDetails(event: Event) {
    // this.onGetDetails.emit(this.item)
    // this.router.navigate(['/studentDetails'] {
    //   // item: item;
    // });
    
  }

}
