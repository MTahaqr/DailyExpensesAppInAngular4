import { Component, OnInit } from '@angular/core';

import { DailyExpDataService } from '../../services/daily-exp-data.service';
import {RegisterService} from '../../services/register.service';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showTxtBox;
  constructor(private dailyExpDataService: DailyExpDataService,private registerService:RegisterService) {
    this.showTxtBox = false;
    this.registerService.toCheckUserAuthState();    
    this.dailyExpDataService.toGetKeys().then( ()=>{
    // this.toGetData();
    }
      
    )
  }

  ngOnInit() {
   
  }
  
  

}
