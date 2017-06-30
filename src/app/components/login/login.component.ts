import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthServiceService} from '../../services/auth-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private router: Router,
    private AuthService: AuthServiceService,
  ) { }

  ngOnInit() {
  }

  onLogin(){  
    this.AuthService.login(this.email, this.password);
    this.router.navigate(['/home']);
  }
}
