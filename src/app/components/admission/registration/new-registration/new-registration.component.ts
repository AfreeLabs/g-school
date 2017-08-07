import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../../../services/FetchData.service';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {

    // Form fields
     registration_number = "164565699526626";
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
     phone_number : string;
     email : string;
     id_card_number : string;
     guardian : string;
     guardian_adress : string;
     guardian_phone : string;
     guardian_email : string;
     school_origin : string;
     batch : string;
     department : string;

  constructor(private fetchData: FetchData) { }

  ngOnInit() {
  }

  onCreateRegistree() {
     const registreeForm = {
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
     phone_number : this.phone_number,
     email : this.email,
     id_card_number : this.id_card_number,
     guardian : this.guardian,
     guardian_adress : this.guardian_adress,
     guardian_phone : this.guardian_phone,
     guardian_email : this.guardian_email,
     school_origin : this.school_origin,
    }

    let endPoint = 'api/admission/registration/';

    this.fetchData.post(endPoint, registreeForm)
      .subscribe();
       console.log(registreeForm);
  }

}
