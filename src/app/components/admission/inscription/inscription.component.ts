import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {FetchData} from '../../../services/FetchData.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  providers: [FetchData],
})
export class InscriptionComponent implements OnInit {

  // inscription = "" ;
  // Http = null;
  Response = null;
  items = "" ;
  count = 0 ;
  itemCount = 0 ;
  
  constructor(private fetchData: FetchData) { }

  ngOnInit() {
  // this.Http = Http ;
    // this.Response = Response ;
    let endPoint = 'api/admission/admission/' ;

    this.fetchData.get(endPoint)
      .subscribe(
      (data) => {
        this.items = data;
        console.log(this.items);
      },
      (error) => {
        console.log('unable to get info');

      });
  }
  reloadItems(params) {
    // just reinit the component that gonna fetch and reload the data
    this.ngOnInit() ;
    }
  rowClick(param){

  }
  rowDoubleClick(){

  }

  onGetDetails(event: Event){
      console.log(event);

    }

}
