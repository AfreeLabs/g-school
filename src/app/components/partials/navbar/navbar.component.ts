import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../../../services/auth-service.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  email: string;

  constructor(
    private AuthService: AuthServiceService,
  ) { 
    this.email = this.AuthService.userEmail;
    console.log(this.email)
  }

  ngOnInit() {

  }

}
