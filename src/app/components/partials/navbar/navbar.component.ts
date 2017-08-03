import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FlashMessagesService } from 'angular2-flash-messages';

// import {AuthServiceService} from '../../../services/auth-service.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  email: string;

  constructor(
    // private FlashMessages: FlashMessagesService,
    private router: Router,
    // private AuthService: AuthServiceService
  ) { 
    // this.email = this.AuthService.userEmail;
    // console.log(this.email)
  }

  ngOnInit() {

  }

  onLogout() {

    // this.AuthService.logoutUser();
    this.router.navigate(['']);
    // this.FlashMessages.show('You are now logged out!', { cssClass: 'alert-success', timeout: 3000 })

  }

}
