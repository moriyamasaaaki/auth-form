import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  afUser$: Observable<User> = this.afAuth.user;
  uid: string;
  constructor(
    private afAuth: AngularFireAuth,
    private snackbar: MatSnackBar
  ) {
    this.afUser$.subscribe(user => {
      this.uid = user && user.displayName;
      console.log(user);
    });
  }

  googleLogin() {
    this.afAuth.signInWithPopup(
      new auth.GoogleAuthProvider()
    ).then(() => {
      this.snackbar.open('Googleログインに成功しました', null, {
        duration: 3000
      });
    });
  }

  facebookLogin() {
    this.afAuth.signInWithPopup(
      new auth.FacebookAuthProvider()
    ).then(() => {
      this.snackbar.open('Facebookログインに成功しました', null, {
        duration: 3000
      });
    });
  }

  githubLogin() {
    this.afAuth.signInWithPopup(
      new auth.GithubAuthProvider()
    ).then(() => {
      this.snackbar.open('Githubログインに成功しました。', null, {
        duration: 3000
      });
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.snackbar.open('ログアウトしました。', null, {
        duration: 3000
      });
    });
  }
}
