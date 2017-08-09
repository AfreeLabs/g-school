import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../../services/FetchData.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {


  // hide: boolean = false;
  school="";
  school_name: string;
  // schoolLogo: ImageBitmap;
  schoolAbrev: string;
  SchoolSlogan: string;
  schoolAdress1: string;
  schoolAdress2: string;
  schoolPhone: string;
  schoolWebsite: string;
  schoolFax: string;
  schoolRegistree: string;
  schoolEmail: string;
  schoolTaxId: string;
  schoolAuthorization: string;
  
  // Http = null;
  // Response = null;
  // items =   ;
  // count = 0;
  // itemCount = 0;

   constructor(private fetchData: FetchData) { 
    
  }

  ngOnInit() {
    let endPoint = 'api/school/school/';

    this.fetchData.get(endPoint)
      .subscribe(
        (data) => {
          this.school = data;
          console.log(this.school);
        },
        (error) => {
        console.log('unable to get info');
        
        });
  }


  onSave(){
    
    const schoolForm = {
       name : this.school_name,
       abreviation : this.schoolAbrev,
      //  logo : this.schoolLogo,
       slogan : this.SchoolSlogan,
       adress_1 : this. schoolAdress1,
       adress_2 :  this.schoolAdress2,
       website : this.schoolWebsite,
       phone :  this.schoolPhone,
       fax :  this.schoolFax,
       email : this.schoolEmail,
       tax_id :  this.schoolTaxId,
       registration_number :  this.schoolRegistree,
       authorization_number :  this.schoolAuthorization, 
    }

    let endPoint = 'api/school/school/';

    this.fetchData.post(endPoint, schoolForm)
      .subscribe();
       console.log(schoolForm);
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
