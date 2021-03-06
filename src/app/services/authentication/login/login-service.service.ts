import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User, auth } from 'firebase';
import { UserModel } from '../../../models/user/user-model.model';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  userData: UserModel;
  userData$: Observable<any>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private router: Router
  ) { }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.angularFireAuth.auth.signInWithPopup(provider);
    this.setUserData(credential);
  }

  setUserData(userData) {
    this.userData = new UserModel(
      userData.user.uid,
      userData.user.email,
      userData.user.displayName,
      userData.user.photoURL,
      userData.user.emailVerified
    );
    //this.userData$ = new Observable(this.userData);
    this.createNewUser(this.userData);
    this.router.navigate(['/category-selection']);
  }

  createNewUser(user: UserModel) {
    return this.angularFirestore.collection('users').doc(`${user.uid}`).set({...user});
  }

  async signOut() {
    await this.angularFireAuth.auth.signOut();
    return this.router.navigate(['/']);
  }

}
