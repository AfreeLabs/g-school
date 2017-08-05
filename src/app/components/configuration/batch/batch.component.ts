import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataTableResource } from 'angular-2-data-table';
import { FetchData } from '../../../services/FetchData.service';


@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  // batch = "";
  departments = "";
  batchname: string;
  start_date: string;
  end_date: string;
  department: string;
  Response = null;
  items = "" ;
  count = 0 ;
  itemCount = 0 ;


  constructor(private fetchData: FetchData) { }

  ngOnInit() {
    let endPoint = 'api/v1/school/batch/';

    this.fetchData.get(endPoint)
      .subscribe(
      (data) => {
        this.items = data;
        console.log(this.items);
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
          console.log(this.departments[0]);
        },
        (error) => {
        console.log('unable to get info');
          
        });
  }

  onCreate() {
    // console.log('unable to get info');
    const batchForm = {
    name: this.batchname,
    start_date: this.start_date,
    end_date: this.end_date,
    department: this.department,
  }

    let endPoint = 'api/v1/school/batch/';

    this.fetchData.post(endPoint, batchForm)
      .subscribe();
       console.log(batchForm);
  }

  reloadItems(params) {
    // just reinit the component that gonna fetch and reload the data
    this.ngOnInit() ;
    }
  rowClick(param){

  }
  rowDoubleClick(){

  }
}
