import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/observable'
import * as firebase from 'firebase/app'
@Injectable()
export class RegisterService {

  userAuthState: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth, private afDB: AngularFireDatabase, private router: Router) {
    this.userAuthState = this.afAuth.authState;
  }
  signUp(form) {
    this.afAuth.auth.createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        localStorage.setItem('uid', success.uid);
        this.afDB.object(`Users/${success.uid}`).set(form)
        this.userAuthState = this.afAuth.authState;
        this.router.navigate(['/Dashboard']);        
      })
      .catch(err => console.log(err, 'You dont have access!'));

  }
  signIn(form) {
    this.afAuth.auth.signInWithEmailAndPassword(form.email, form.password)
      .then(success => {
        localStorage.setItem('uid', success.uid);
        this.router.navigate(['/Dashboard']);
        this.userAuthState = this.afAuth.authState;
      })
  }

  logout() {
    this.afAuth.auth.signOut()

      .then((successFull) => {
        this.userAuthState = this.afAuth.authState; 
        localStorage.clear();       
        this.router.navigate(['/SignIn']);
      })
      .catch(function (error) {
        alert(error);
      })
  }
  toCheckUserAuthState() {

     this.afAuth.authState.subscribe(auth=>{
        if(auth){
      this.router.navigateByUrl('/Dashboard');
          
    }
    else{
      this.router.navigateByUrl('/SignIn');
      
    }
      })
  }
}
