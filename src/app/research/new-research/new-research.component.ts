import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../../global.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 
import { MatStepper,MatDialog,MatDialogRef } from '@angular/material';
import {Http, Headers, RequestOptions} from '@angular/http';
import Swal from 'sweetalert2';


import { ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
const swal = Swal;
@Component({
  selector: 'app-new-research',
  templateUrl: './new-research.component.html',
  styleUrls: ['./new-research.component.scss']
})
export class NewResearchComponent implements OnInit {
 
  form: FormGroup;
  loading: boolean = false;
  @ViewChild('fileInput') fileInput: ElementRef;

  form2: FormGroup;
  loading2: boolean = false;
  @ViewChild('fileInput2') fileInput2: ElementRef;

company;
degreelevel

inputcompany
inputtitle;
inputabstract;
inputdegreelevel

researchid

author
authorid
authorarray

maindoclabel='Choose File'
supdoclabel="Choose File"

 createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      avatar: null
    });
    this.form2 = this.fb.group({
      name: ['', Validators.required],
      avatar: null
    });
  }
  constructor(private fb: FormBuilder,private global: GlobalService,private http: Http) {
  	this.http.get(this.global.api + 'api.php?action=company_List',
         this.global.option)
            .map(response => response.json())
            .subscribe(res => {
              this.company= res;
        });

  	this.http.get(this.global.api + 'api.php?action=degreelevel',
         this.global.option)
            .map(response => response.json())
            .subscribe(res => {
              this.degreelevel= res;
        });

    this.inputcompany = global.user.agency;
  }

  ngOnInit() {
    this.createForm()
  }

  insertauthor(){

let x='';
    if (this.author==undefined||this.author=="") {
      x=x+"*Author is required\n";
    }

    if (x=='') {
     let urlSearchParams = new URLSearchParams();
                    urlSearchParams.append("rid",this.researchid.toString());
                     urlSearchParams.append('aid', this.author.toString() );
                  let body = urlSearchParams.toString()
      var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Content-Type", "application/x-www-form-urlencoded");    
                  let option = new RequestOptions({ headers: header });
      this.global.swalLoading('Adding Author');

       this.http.post(this.global.api + 'api.php?action=spResearchAuthor_Insert_Update',
       body,option)
          .map(response => response.json())
          .subscribe(res => {
             this.global.swalClose();
             this.getauthor(this.researchid);     
          },error => {
            console.log(Error); 
                this.global.swalAlertError();
           } );
        }else
          alert(x)
  }

  swalConfirm(id,text,ctr,ps,moe,co)
  {
    swal({
        title: text,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.value) {
          if (ctr==1) {
             this.getauthor(id);
            // code...
          }
             
        }
      })
  }
  removeauthor(id){
                                                                                              
    var header = new Headers();
      header.append("Accept", "application/json");
      header.append("Content-Type", "application/x-www-form-urlencoded");    
      let option = new RequestOptions({ headers: header });
      this.http.get(this.global.api + 'api.php?action=spResearchAuthorDelete&rid='+id,
         option)
            .map(response => response.json())
            .subscribe(res => {
             this.getauthor(this.researchid); 

        },error => {
                this.global.swalAlertError();
           } );
  }

  getauthor(rid){
  var header = new Headers();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");    
        let option = new RequestOptions({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchAuthor_Select&rid='+rid,
           option)
              .map(response => response.json())
              .subscribe(res => {
                this.authorarray= res;
          });
  }

  add(stepper: MatStepper) {
  	let x=''
  	if (this.inputtitle==undefined||this.inputtitle=="") {
  		x=x+"*Research Title is required\n";
  	}if (this.inputcompany==undefined||this.inputcompany=="") {
  		x=x+"*Company is required\n";
  	}if (this.inputabstract==undefined||this.inputabstract=="") {
  		x=x+"*Abstract is required\n";
  	}if (this.inputdegreelevel==undefined||this.inputdegreelevel=="") {
  		x=x+"*Degree Level is required\n";
  	}

  	if (x=='') {
			let urlSearchParams = new URLSearchParams();
	                    urlSearchParams.append("title",this.inputtitle);
	                     urlSearchParams.append('company', this.inputcompany);
	                     urlSearchParams.append('abstract', this.inputabstract);
	                     urlSearchParams.append('degreelevel', this.inputdegreelevel);
	                     urlSearchParams.append('user', this.global.requestid());
	                  let body = urlSearchParams.toString()
	     	 var header = new Headers();
	                  header.append("Accept", "application/json");
	                  header.append("Content-Type", "application/x-www-form-urlencoded");    
	                  let option = new RequestOptions({ headers: header });
	      	this.global.swalLoading('Adding project title');
	       	this.http.post(this.global.api + 'api.php?action=researchadd',body,option)
	          .map(response => response.json())
	          .subscribe(res => {
	             this.global.swalClose();
	             this.researchid = res.id;console.log(this.researchid)
	          },error => {
	            console.log(Error); 
	                this.global.swalAlertError();
	           } );

      stepper.next();
  	}else
  		alert(x)
  }
}
