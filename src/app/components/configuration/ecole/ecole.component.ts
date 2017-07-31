import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FetchData } from '../../../services/FetchData.service';

@Component({
  selector: 'app-ecole',
  templateUrl: './ecole.component.html',
  styleUrls: ['./ecole.component.css'],
  providers: [FetchData],
})
export class EcoleComponent implements OnInit {
  
  data = "";
  Http = null;
  Response = null;
  items = "";
  count = 0;
  itemCount = 0;


  constructor(private fetchData: FetchData) { 
    
  }

  ngOnInit() {
    this.Http = Http;
    this.Response = Response;
    let endPoint = 'api/v1/schoolschool/';

    this.fetchData.get(endPoint)
      .subscribe(
      (data) => {
        // we assign the tab now
        this.setItems(data);
        this.items = data;
        this.itemCount = this.count = this.items.length;
      },
      (error) => {
        console.error(error);
      });


    console.log('ok ', this.items);

  }

  reloadItems(params) {
    // just reinit the component that gonna fetch and reload the data
    this.ngOnInit();
  }
  rowClick(param) {

  }
  rowDoubleClick() {

  }
  
  setItems(item) {
    this.items = item;
    // this.frstName = this.items[0].firstName;
    console.log('ok ', this.items);
  }

}


