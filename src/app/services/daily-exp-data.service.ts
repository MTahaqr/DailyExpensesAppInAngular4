import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';
import { Router } from '@angular/router';

@Injectable()
export class DailyExpDataService {

  dailyExpList: AngularFireList<any>;
  dailyExpListRefKey: AngularFireList<any>;
  dailyExpListRef: AngularFireList<any>;

  // allExpDates = [];
  // dailyExpTotalPrice = [];
  // allExpList = [];
  //=====================
  allExpLists = [];
  allExpDays = [];
  allExpPricePerDay = [];
  totalExp: number = 0;
  //=====================
  dailyExpObjectRefKey: AngularFireObject<any>;

  dailyExpObject: Observable<any>;
  months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  year: number = 0;
  month;
  uid: string = null;
  iteration = 0;
  dt: number = 0;
  xAxisofGraph: string[] = [];
  // array=['47','8','2','5','7','4','5','32','1','4','25','73','83','73','73','73'];

  constructor(private afDB: AngularFireDatabase, private router: Router) {
    // console.log(this.array.sort(function(a, b){return a - b}));

  }
  toGetKeys() {
    return new Promise((resolve, reject) => {
      this.uid = localStorage.getItem('uid');
      this.year = (new Date).getFullYear();
      this.month = this.months[(new Date).getMonth()];
      this.dt = (new Date).getDate();
      this.dailyExpListRefKey = this.afDB.list(`UserExpenses/${this.uid}/${this.year}/${this.month}`);
      this.dailyExpListRefKey.snapshotChanges()
        .subscribe(actions => {
          // this.allExpDates.length = 0;
          // this.dailyExpTotalPrice.length = 0;
          // this.allExpList.length = 0;
          this.allExpLists.length = 0;
          actions.forEach(action => {
            // this.allExpDates.push(action.key)
            this.allExpLists.push(action.payload.val());
            // console.log(action.payload.val());
          })
          // this.iteration = this.dt - this.allExpDates.length
          // console.log('dfddddddd', this.iteration);
          resolve();
          this.toGetData();
          // if (this.allExpDates.length != 0)
          //   this.toGetData();
        });
    })


  }

  add(form: any) {
    this.dailyExpList = this.afDB.list(`UserExpenses/${this.uid}/${this.year}/${this.month}`);
    this.dailyExpList.push(form);
  }

  toGetData() {
    this.allExpDays.length = 0;
    this.allExpPricePerDay.length = 0;
    this.totalExp = 0;
    for (let i = 0; i < this.allExpLists.length; i++) {
      let date = this.allExpLists[i].Date;
      let check = this.allExpDays.indexOf(date);
      if (check == -1) {
        this.allExpDays.push(date);
        let p = 0;
        for (let j = 0; j < this.allExpLists.length; j++) {
          if (date == this.allExpLists[j].Date) {
            p = p + parseInt(this.allExpLists[j].price);
          }
          else {
          }
        }
        this.allExpPricePerDay.push(p);
        this.totalExp += p;
      }

      // console.log('this.allExpDays',this.allExpDays);
      // console.log('this.allExpPricePerDay',this.allExpPricePerDay)
    }
    // const uid = localStorage.getItem('uid');
    // this.dailyExpTotalPrice.length = 0;
    // this.allExpList.length = 0;
    // this.xAxisofGraph.length = 0;
    // console.log('iteration',this.iteration);
    // for (let i = (this.iteration+1); i <= this.dt; i++) {
    //   console.log(`UserExpenses/${uid}/${this.year}/${this.month}/${i}-${this.month}`)
    //   this.dailyExpListRef = this.afDB.list(`UserExpenses/${uid}/${this.year}/${this.month}/${i}-${this.month}`);
    //   this.dailyExpListRef.snapshotChanges()
    //     .subscribe(actions => {
    //   console.log(`UserExpenses/${uid}/${this.year}/${this.month}/${i}-${this.month}`)          
    //       let p = 0
    //       actions.forEach(level1 => {
    //         this.allExpList.push(level1.payload.val())
    //         console.log(level1.payload.val())
    //         p = p + parseInt(level1.payload.val().price);

    //       })
    //       this.xAxisofGraph.push(`${i}-${this.month}`);
    //       this.dailyExpTotalPrice.push(p);
    //     });
    // }

  }

}
