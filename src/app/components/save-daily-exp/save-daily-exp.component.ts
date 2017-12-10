import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DailyExpDataService } from '../../services/daily-exp-data.service';



@Component({
  selector: 'app-save-daily-exp',
  templateUrl: './save-daily-exp.component.html',
  styleUrls: ['./save-daily-exp.component.css']
})
export class SaveDailyExpComponent implements OnInit {

  dates;
  day;
  showTxtBox = false;

  dailyExpForm;
  blankForm;
  weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


  constructor(private dailyExpDataService: DailyExpDataService) {
    this.dates = ((new Date).getDate()) + '-' + this.months[(new Date).getMonth()];
    this.day = this.weekdays[(new Date).getDay()];
  }

  ngOnInit() {
    this.dailyExpForm = new FormGroup({
      exp: new FormControl('', Validators.compose([Validators.required])),
      price: new FormControl('', Validators.compose([Validators.required])),
      Date: new FormControl(this.dates, Validators.compose([Validators.required])),
      Day: new FormControl(this.day, Validators.compose([Validators.required])),


    });
  }
  add(form: any) {
    this.dailyExpDataService.add(form);
    this.dailyExpForm.reset();
    this.ngOnInit();

  }
  showTextBox() {
    this.showTxtBox = !this.showTxtBox;
    console.log("ShowTextBox");
  }

}
