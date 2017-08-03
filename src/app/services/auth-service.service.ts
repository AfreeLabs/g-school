// import { Injectable } from '@angular/core';
// import {Http, Headers} from '@angular/http';
// import 'rxjs/add/operator/map';
// import {tokenNotExpired} from 'angular2-jwt';

// @Injectable()
// export class AuthServiceService {

//   constructor(private http: Http) { }

//   loginUser(user) {
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     return this.http.post('http://localhost:8000/api/v1/api-token-auth/', user, { headers: headers })
//       .map(res => res.json());
//   }

  

//   StoreToken(token) {
//     // store token in localStorage to keep user logged in between page refereshes
//     localStorage.setItem('id_token', token);
//   }

//   loggedIn() {
//     return tokenNotExpired('id_token');
//   }

//   logoutUser() {
//     // Clear localStorage to remove the token
//     localStorage.clear();
//   }
// }
