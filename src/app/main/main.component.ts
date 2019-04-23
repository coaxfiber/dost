import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router';
import { GlobalService } from './../global.service';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
		panelOpenState: boolean = false;
    image:any = 'assets/noimage.jpg';
    id:any;
    name:any;
    user={fname:'',surname:'',mname:'',ext:''}

  constructor( private domSanitizer: DomSanitizer,private global: GlobalService,private http: Http,private route: ActivatedRoute, private router: Router) {
  	this.router.navigate(['../main',{outlets:{div:'home'}}]);
    this.id = this.global.requestid();
     
     this.global.swalLoading('Loading User Information');
     this.http.get(this.global.api + 'api.php?action=getuserinfo&id='+this.global.requestid(),
         this.global.option)
            .map(response => response.json())
            .subscribe(res => {
              this.user= res;
              this.global.user=res;
             this.global.swalClose(); 
        });

   }

  ngOnInit() {
  }

}
