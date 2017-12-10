import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MatTableModule} from '@angular/material';

import { Routing } from './routing/routing';

import { ChartsModule } from 'ng2-charts';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {RegisterService} from './services/register.service';
import {DailyExpDataService} from './services/daily-exp-data.service';
import { DailyExpListComponent } from './components/daily-exp-list/daily-exp-list.component';
import { DailyExpGraphComponent } from './components/daily-exp-graph/daily-exp-graph.component';
import { SaveDailyExpComponent } from './components/save-daily-exp/save-daily-exp.component';

  var config = {
    apiKey: "AIzaSyDeyhtod2pBBWTARY730gltJkwx4w7w114",
    authDomain: "dailyexpensesappinangular4.firebaseapp.com",
    databaseURL: "https://dailyexpensesappinangular4.firebaseio.com",
    projectId: "dailyexpensesappinangular4",
    storageBucket: "dailyexpensesappinangular4.appspot.com",
    messagingSenderId: "537855645117"
  };


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    DailyExpListComponent,
    DailyExpGraphComponent,
    SaveDailyExpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    Routing,
    NgbModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ChartsModule
  ],
  providers: [
    RegisterService,
    DailyExpDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
