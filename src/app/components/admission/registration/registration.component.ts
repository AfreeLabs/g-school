import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../../services/FetchData.service';
import { TableFilterPipe } from '../../../pipes/table-filter.pipe';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  // pipes: [TableFilterPipe],
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
        this.itemCount = this.items.length;
        console.log(this.items);
        console.log(this.itemCount);
      },
      (error) => {
        console.log('unable to get info');

      });

   }
 
  Delete(item) {
    // let element = event.target || event.srcElement || event.currentTarget;
    console.log(item.registration_number);
    let endPoint = 'api/admission/registration/' + item.id;

    this.fetchData.delete(endPoint)
    .subscribe();
    console.log("Delete success");
    (error) => {
      console.log('unable to get info');

    };
  }
   


}
