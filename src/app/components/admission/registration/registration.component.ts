import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../../services/FetchData.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private registry= "";

  constructor(private fetchData: FetchData) { }

  ngOnInit() {
    // this.Http = Http;
    // this.Response = Response;
  //   let endPoint = 'api/v1/admission/';

  //   this.fetchData.get(endPoint)
  //     .subscribe(
  //     (data) => {
  //       // we assign the tab now
  //       // this.fetchData.get(endPoint);
  //       this.registry = data;
  //       // this.itemCount = this.count = this.items.length;
  //       console.log(this.registry);
  //     },
  //     (error) => {
  //       console.error(error);
  //     });


  //   console.log('ok ');
   }

}
