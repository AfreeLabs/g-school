export class Registree {

    registration_number: string;
    first_name: string;
    middle_name: string;
    last_name: string;
   //  photo : string,
    date_of_birth: string;
    place_of_birth: string;
    genre: string;
    nationality: string;
    father_name: string;
    mother_name: string;
    adress: string;
    phone_number: string;
    email: string;
    id_card_number: string;
    guardian: string;
    guardian_adress: string;
    guardian_phone: string;
    guardian_email: string;
    school_origin: string;

    constructor(RegistreeData: any){
        this.registration_number = RegistreeData.registration_number;
        this.first_name = RegistreeData.first_name;
        this.middle_name = RegistreeData.middle_name;
        this.last_name = RegistreeData.last_name;
       //  photo : string= RegistreeData.
        this.date_of_birth = RegistreeData.date_of_birth;
        this.place_of_birth = RegistreeData.place_of_birth;
        this.genre = RegistreeData.genre;
        this.nationality = RegistreeData.nationality;
        this.father_name = RegistreeData.father_name;
        this.mother_name = RegistreeData.mother_name;
        this.adress = RegistreeData.adress;
        this.phone_number = RegistreeData.phone_number;
        this.email = RegistreeData.email;
        this.id_card_number = RegistreeData.id_card_number;
        this.guardian = RegistreeData.guardian;
        this.guardian_adress = RegistreeData.guardian_adress;
        this.guardian_phone = RegistreeData.guardian_phone;
        this.guardian_email = RegistreeData.guardian_email;
        this.school_origin = RegistreeData.school_origin;
    }

  }