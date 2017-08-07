import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../../services/FetchData.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {



  Response = null;
  items = "" ;
  count = 0 ;
  itemCount = 0 ;

  constructor(private fetchData: FetchData) { }

  ngOnInit() {
   let endPoint = 'api/admission/registration/' ;

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


}
