import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { DailyExpDataService } from '../../services/daily-exp-data.service';
import { MatTableModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-daily-exp-list',
  templateUrl: './daily-exp-list.component.html',
  styleUrls: ['./daily-exp-list.component.css']
})
export class DailyExpListComponent implements OnInit {

  dailyExpList: Observable<any[]>;
  allExpList = [];
  total: number;
  constructor(public dailyExpDataService: DailyExpDataService) {
    this.allExpList = this.dailyExpDataService.allExpLists;
  }

  ngOnInit() {

  }

}
