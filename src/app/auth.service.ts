import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(
        (success) => {
           const user: any = this.firebaseAuth.auth.currentUser;
           user.sendEmailVerification().then(
             (success) => {
              console.log('please verify your email');
              alert('please verify your email');
            }
           ).catch(
             (err) => {
               console.log('Error:' + err);
               alert('Error:' + err);
             }
           );

        })
      .catch(
        error => alert(error.message)
      );

  }

  login(email: string, password: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          this.firebaseAuth.auth.currentUser.getIdToken()
            .then(
              (token: string) =>  {
                localStorage.setItem('token', token);
                localStorage.setItem('uid', this.firebaseAuth.auth.currentUser.uid);
                localStorage.setItem('email', this.firebaseAuth.auth.currentUser.email);
              }
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    this.firebaseAuth.auth.signOut();
    localStorage.clear();
  }

  getEmail() {
    return localStorage.getItem('email');
  }

  getUID() {
    return localStorage.getItem('uid');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    return localStorage.getItem('token') != null;
  }
}

