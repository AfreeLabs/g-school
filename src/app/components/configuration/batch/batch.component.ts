import { Component, OnInit } from '@angular/core';

import { FetchData } from '../../../services/FetchData.service';

export class Batch {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  department: [any];
}

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  batch = "";
  departments = "";
  batchname: string;
  start_date: string;
  end_date: string;
  department: string;

  batchForm = {
    name: this.batchname,
    start_date: this.start_date,
    end_date: this.end_date,
    department: this.department,
  }

  constructor(private fetchData: FetchData) { }

  ngOnInit() {
    let endPoint = 'api/v1/schoolbatch/';

    this.fetchData.get(endPoint)
      .subscribe(
      (data) => {
        this.batch = data;
        console.log(this.batch);
      },
      (error) => {
        console.log('unable to get info');

      });

    this.getDepartement(); 
  }


  getDepartement(){
    let endPoint = 'api/v1/department/department/';

    this.fetchData.get(endPoint)
      .subscribe(
        (data) => {
          this.departments = data;
          console.log(this.departments[1]);
        },
        (error) => {
        console.log('unable to get info');
          
        });
  }

  onCreate() {
    // console.log('unable to get info');

    let endPoint = 'api/v1/schoolbatch/';

    this.fetchData.post(endPoint, this.batchForm)
      .subscribe();
  }
}
