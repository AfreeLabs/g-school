import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../../../services/FetchData.service';

@Component({
  selector: 'app-new-admission',
  templateUrl: './new-admission.component.html',
  styleUrls: ['./new-admission.component.css']
})
export class NewAdmissionComponent implements OnInit {

    Response = null;
    items = "" ;
    RegistratioNumber = [];
    registree= "";
    count = 0 ;
    itemCount = 0 ;
    StudentNumber: string;

  // Form fields
     registration_number: string;
     first_name: string;
     middle_name : string;
     last_name : string;
    //  photo : string;
     date_of_birth : string;
     place_of_birth : string;
     genre : string;
     nationality : string;
     father_name : string;
     mother_name : string;
     adress : string;
    //  phone_number : string;
    //  email : string;
     id_card_number : string;
     batch : string;
     department : string;

  constructor(private fetchData: FetchData) { }

  ngOnInit() {
    this.getRegistratioNumber();
  }

  getcurrentAddInfo() {
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

  getRegistratioNumber() {
    let endPoint = 'api/admission/registration/' ;

    this.fetchData.get(endPoint)
      .subscribe(
      (data) => {
        this.RegistratioNumber = data;
        console.log(this.RegistratioNumber);
      },
      (error) => {
        console.log('unable to get info');

      });
  }

  onChange(data) {
    // console.log(data);
    let StudentNbr = this.StudentNumber;
    // console.log(StudentNbr);
    let endPoint = 'api/admission/registration/' + this.StudentNumber;

    this.fetchData.get(endPoint)
      .subscribe(
      (data) => {
        this.registree = data;
        console.log(this.registree);
      },
      (error) => {
        console.log('unable to get info');

      });

  }

  onCreateAdmission() {
    const admissionForm = {
    registration_number: this.registration_number,
    first_name: this.first_name,
    middle_name : this.middle_name,
    last_name : this.last_name,
    //  photo : string,
    date_of_birth : this.date_of_birth,
    place_of_birth : this.place_of_birth,
    genre : this.genre,
    nationality : this.nationality,
    father_name : this.father_name,
    mother_name : this.mother_name,
    adress : this.adress,
  //  phone_number : this.phone_number,
  //  email : this.email,
    id_card_number : this.id_card_number,
  //  guardian : this.guardian,
  //  guardian_adress : this.guardian_adress,
  //  guardian_phone : this.guardian_phone,
  //  guardian_email : this.guardian_email,
  //  school_origin : this.school_origin,
    }

    let endPoint = 'api/v1/admission/admission/';

    this.fetchData.post(endPoint, admissionForm)
      .subscribe();
      this.getcurrentAddInfo();
       console.log(admissionForm);
  }
}
