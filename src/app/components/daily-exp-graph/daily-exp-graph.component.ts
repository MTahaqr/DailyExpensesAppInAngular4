import { Component, OnInit } from '@angular/core';
import {DailyExpDataService} from '../../services/daily-exp-data.service';

@Component({
  selector: 'app-daily-exp-graph',
  templateUrl: './daily-exp-graph.component.html',
  styleUrls: ['./daily-exp-graph.component.css']
})
export class DailyExpGraphComponent implements OnInit {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  // public barChartLabels:string[] = this.dailyExpDataService.allExpDates;
  public barChartLabels:string[] = this.dailyExpDataService.allExpDays;  
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = 
  [
    {data: this.dailyExpDataService.allExpPricePerDay, label: 'Current Month'},
   
    
  ];
  public lineChartColors:Array<any> = [
   
    { // dark grey
      backgroundColor: '#3F51B5',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  
  ];

  constructor( public dailyExpDataService:DailyExpDataService) {
    // console.log(this.barChartData)
  }

  ngOnInit() {
  }
 
  
 
 
 
  

}
