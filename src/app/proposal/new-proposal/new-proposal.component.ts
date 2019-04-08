import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../../global.service';
import { MatStepper,MatDialog,MatDialogRef } from '@angular/material';
import {Http, Headers, RequestOptions} from '@angular/http';
@Component({
  selector: 'app-new-proposal',
  templateUrl: './new-proposal.component.html',
  styleUrls: ['./new-proposal.component.scss']
})
export class NewProposalComponent implements OnInit {

	proj=false;
	prog=false;
	total=0;

	title;
	duration;
	fagency;

	cleader;
	gender;
	email;
	agencies;
	address;
	telephone;
	fax;
	fangency;

	proposalcounter=false;
  constructor( private global: GlobalService,private http: Http) { }

  ngOnInit() {
  }

  agency(){
  	this.global.swalinfo("<p style='text-align:left;'><b>Cooperating Agencies</b> – agencies participating in the R & D work.<br><br><b>R & D Station</b> – station or unit where R & D will be actually conducted.<br><br><b>Classification</b> – indicates whether the program/project is research or development.</p>");
  }
  leader(){
  	this.global.swalinfo("<p style='text-align:left;'>The overall R & D coordinator (whether multi-agency of single-agency R & D) or the program/project leader. Program leader is the overall coordinator while serving also as the project leader.</p>");
  }

  summary(){
  	this.global.swalinfo("<b>Executive Summary</b> - Overview of the program including the significance, objectives, methodology, major activities and expected output of the program.");
  }
  budget(){
  	this.global.swalinfo("<b>Budget Summary</b> - Personal Services (PS), maintenance and other operating expenses (MOE), and capital outlay (CO) requirement of the whole program by source.");
  }

  add(stepper: MatStepper) {
  	let x=''
  	if (this.cleader==undefined||this.cleader=="") {
  		x=x+"*Coordinator/Leader is required\n";
  	}if (this.gender==undefined||this.gender=="") {
  		x=x+"*Gender is required\n";
  	}if (this.email==undefined||this.email=="") {
  		x=x+"*Email is required\n";
  	}if (this.agencies==undefined||this.agencies=="") {
  		x=x+"*Agency(ies) is required\n";
  	}if (this.address==undefined||this.address=="") {
  		x=x+"*Address is required\n";
  	}if (this.telephone==undefined||this.telephone=="") {
  		x=x+"*Telephone is required\n";
  	}if (this.fax==undefined||this.fax=="") {
  		x=x+"*Fax is required\n";
  	}
  	if (x=='') {
  	  

      stepper.next();
  	}else
  		alert(x)
  }

  proposalinsert(stepper: MatStepper) {

let x=''
  	if (this.title==undefined||this.title=="") {
  		x=x+"*Title is required\n";
  	}if (this.duration==undefined||this.duration=="") {
  		x=x+"*Duration is required\n";
  	}if (this.fagency==undefined||this.fagency=="") {
  		x=x+"*Funding Agency is required\n";
  	}

  	if (x==''&&this.proposalcounter==false) {
                  let urlSearchParams = new URLSearchParams();
                    urlSearchParams.append("GeneralTitle",this.title);
			     	urlSearchParams.append('LeadAgency', '01001');
			     	urlSearchParams.append('Street', "go");
			     	urlSearchParams.append('Address_PSGC', "012801001");
			     	urlSearchParams.append('Telephone', this.telephone);
			     	urlSearchParams.append('Fax', this.fax);
			     	urlSearchParams.append('Email', this.email);
			     	urlSearchParams.append('FundingAgency_id', this.fagency);
			     	urlSearchParams.append('TotalDuration', this.duration);
			     	urlSearchParams.append('createdBy', '1');
                  let body = urlSearchParams.toString()
  		var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Content-Type", "application/x-www-form-urlencoded");    
                  let option = new RequestOptions({ headers: header });
  	  this.proposalcounter = true;
  	  this.global.requestToken();
	     this.global.swalLoading('Loading Person Information');

	     this.http.post(this.global.api + 'api.php?action=proposalinsert',
	     body,option)
          .map(response => response.json())
          .subscribe(res => {
             this.global.swalClose();
                console.log(res);       
          },error => {
          	console.log(Error); 
                this.global.swalAlertError();
           } );
	     

      stepper.next();
  	}
  	
  	if (x!='') {
  		alert(x)
  	}

  	

  }


  proposaltype(x){
  	if (x==0) {
  		if (this.prog==false) {
  			this.prog = true;
  			this.proj = false;
  		}
  		else
  			this.prog = false;
  	}
  	else{
  		if (this.proj==false) {
  			this.proj = true;
  			this.prog = false;
  		}
  		else
  			this.proj = false;
  	}
  }
}
