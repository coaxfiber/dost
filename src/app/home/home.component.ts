import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../global.service';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Chart} from 'chart.js';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  LineChart=[];
  BarChart=[];
  PieChart=[];

  loadcompany=1
  companyresearchcount
  myControl = new FormControl();
  optionsdiscipline
  filteredOptions: Observable<string[]>;

  company
  inputcompany=''
  constructor(private http: Http,private global: GlobalService) {
  	this.http.get(this.global.api + 'api.php?action=company_List',
         this.global.option)
            .map(response => response.json())
            .subscribe(res => {
              this.company= res;
        });

            this.companyresearch('get')
     
   }
   temp=[]
   transfer(){
   	for (var i = 0; i < this.optionsdiscipline.length; ++i) {
   		this.temp.push(this.optionsdiscipline[i].name);
   	}
   	console.log(this.temp);
   }

   getresearchcount(x)
   {
     var y = 0
     for (var i = 0; i < x.length; ++i) {
       y = parseInt(x[i].count) + y;
     }
     return y
   }

	private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.temp.filter(option => option.toLowerCase().includes(filterValue));
  	}

    companyresearch(x)
    {
      if (x=='get') {
       this.http.get(this.global.api + 'api.php?action=spRPTResearch_CountByCompany',
         this.global.option)
            .map(response => response.json())
            .subscribe(res => {
              this.companyresearchcount = this.getresearchcount(res)
              console.log(res)
        });
      }else
     this.http.get(this.global.api + 'api.php?action=spRPTResearch_CountByCompany2&id='+x,
         this.global.option)
            .map(response => response.json())
            .subscribe(res => {
              this.companyresearchcount= 0
              if (res[0]!=undefined) {
                this.companyresearchcount = res[0].count
              }
        });
    }

  ngOnInit() {
  	this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );



this.LineChart = new Chart('lineChart', {
  type: 'line',
data: {
 labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
 datasets: [{
     label: 'Number of Proposal Submissions in 2019',
     data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
     fill:false,
     lineTension:0.2,
     borderColor:"red",
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"Line Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});

// Bar chart:
this.BarChart = new Chart('barChart', {
  type: 'bar',
data: {
 labels: ["USLT", "CSU", "UCV", "SPUP", "La Salle"],
 datasets: [{
     label: 'Top 5 Schools (Proposal Submission)',
     data: [9,7 , 3, 5, 15],
     backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)'
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)'
     ],
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"Bar Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});



  }
}
