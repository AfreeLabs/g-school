import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';
import { FetchData } from '../../../services/FetchData.service';

export class Element{
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  department: string;
}

@Component({
  selector: 'app-ecole',
  templateUrl: './ecole.component.html',
  styleUrls: ['./ecole.component.css'],
  // providers: [FetchData],
})


export class EcoleComponent implements OnInit {
  
  element = Element;
  school = {
    // schoolName
    // schoolAbrev
    // SchoolSlogan
    // schoolAdress1

    // schoolAdress1
    // schoolAuthorization
  }
  // data = "";
  // Http = null;
  // Response = null;
  // items = "";
  // count = 0;
  // itemCount = 0;


  constructor(private fetchData: FetchData) { 
    
  }

  ngOnInit() {
    // this.Http = Http;
    // this.Response = Response;
    let endPoint = 'api/v1/schoolbatch/';

    this.fetchData.get(endPoint)
      .subscribe(
      (data) => {
        // we assign the tab now
        // this.fetchData.get(endPoint);
        this.element = data;
        // this.itemCount = this.count = this.items.length;
        console.log(this.element.name);
      },
      (error) => {
        console.error(error);
      });


    console.log('ok ');

  }


  onSaveSubmit(){
    let endPoint = 'api/v1/schoolbatch/1/';

    // this.fetchData.post(endPoint, )
  }
  // reloadItems(params) {
  //   // just reinit the component that gonna fetch and reload the data
  //   this.ngOnInit();
  // }
  // rowClick(param) {

  // }
  // rowDoubleClick() {

  // }
  
  // setItems(item) {
    // this.items = item;
    // this.frstName = this.items[0].firstName;
    // console.log('ok ', this.items);
  // }

}


