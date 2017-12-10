import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/observable';
import * as firebase from 'firebase/app';
import {RegisterService} from './services/register.service';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userAuthSate:Observable<firebase.User>;


  constructor(private router:Router,private registerService: RegisterService , afAuth:AngularFireAuth){
    this.userAuthSate = afAuth.authState;
    // if(!this.userAuthSate){
    //   console.log("StartStartStart",this.userAuthSate);
    // }
    this.registerService.toCheckUserAuthState();
    // this.router.navigate(['/SignIn'])
  }
  add(){
    this.router.navigate(['/SaveDailyExp'])
  }
  dailyExpList(){
    this.router.navigate(['/DailyExpList'])
  }
  dailyExpGraph(){
    this.router.navigate(['/DailyExpGraph'])
  }
  logout(){
    this.registerService.logout();
  }
}
