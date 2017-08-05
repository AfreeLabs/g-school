import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
// import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class FetchData {
    baseURL = 'http://127.0.0.1:8000/';

    constructor(private http: Http) { }
    // define the request header
    getHeader() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'JWT ' + this.getToken());
        return headers;
    }

    getToken() {
        // get the token stored in localStorage
        return localStorage.getItem('id_token');
    }

    // post data to server
    post(endPoint, data) {
        let header = this.getHeader();
        if (endPoint === null) {
            return;
        }

        return this.http.post(this.baseURL + endPoint, data, {headers: header})
            .map((res) => res.json());
    }
        
    // get data from server
    get(endPoint) {
        let header = this.getHeader();
        if (endPoint === null) {
            return;
        }
        return this.http.get(this.baseURL + endPoint, {headers: header})
            .map(res => res.json());
    }
}
