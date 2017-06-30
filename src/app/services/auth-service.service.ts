import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthServiceService {

  user: Observable<firebase.User>;

  userEmail: string;

  constructor(public afAuth: AngularFireAuth) { 
    this.user = afAuth.authState;
  }


  login(email: string, password: string) {
    // this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    this.userEmail = this.afAuth.auth.currentUser.email
    console.log('Wellcom! You are now logged in')
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  
}
