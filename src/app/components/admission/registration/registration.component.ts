import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../../services/FetchData.service';
import { TableFilterPipe } from '../../../pipes/table-filter.pipe';
import { Registree } from '../../../models/registree';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {

  

  Response = null;
  items: Registree [] ;
  count = 0 ;
  itemCount = 0 ;

  selectedItem: Registree;

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


  // onSelect(item: Registree): void {
  //   this.selectedItem = item;
  //   console.log(this.selectedItem);
  // }
   


}
