import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User, auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  userData: any;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) { }


  // Sign in with Gmail
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth providers
  AuthLogin(provider) {
    return this.angularFireAuth.auth.signInWithPopup(provider)
    .then((result) => {
      console.log('You are logged in!', result);
      this.router.navigateByUrl('category-selection');
    }).catch((error) => {
      console.log('Dogodila se greška.', error);
    });
  }

  // Sign-out
  SignOut() {
    return this.angularFireAuth.auth.signOut().then(() => {
      this.router.navigate(['']);
    });
  }
}
