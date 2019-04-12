import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../../global.service';
import { MatStepper,MatDialog,MatDialogRef } from '@angular/material';
import {Http, Headers, RequestOptions} from '@angular/http';
import Swal from 'sweetalert2';
const swal = Swal;
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

  proposalid=1;
  programid=24;
	proposalcounter=false;
  projectlists;

  protitle='';
  produration='';
  fundingagency;
  fangency1;

  ps=0
  moe=0
  co=0
  budgettotal=0

  constructor( private global: GlobalService,private http: Http) {
    this.http.get(this.global.api + 'api.php?action=FundingAgency_List',
         this.global.option)
            .map(response => response.json())
            .subscribe(res => {
              this.fundingagency= res;
        });


  }
  btotal(){
    this.budgettotal=this.ps +this.moe + this.co;
  }
  ngOnInit() {
  }

  agency(){
    this.global.swalinfo("<p style='text-align:left;'><b>Cooperating Agencies</b> – agencies participating in the R & D work.<br><br><b>R & D Station</b> – station or unit where R & D will be actually conducted.<br><br><b>Classification</b> – indicates whether the program/project is research or development.</p>");
  }
  infoduration(){
    this.global.swalinfo("<p><b>Duration</b> - Number of months the program will be implemented.</p>");
  }
  infops(){
    this.global.swalinfo("<p><b>PS</b> - Requirement for wages, salaries, honoraria, additional hire and other personnel benefits.</p>");
  }
  infomoe(){
    this.global.swalinfo("<p><b>MOE</b> - Requirement for supplies materials, travel expenses, communnication and othher services.</p>");
  }
  infoco(){
    this.global.swalinfo("<p><b>CO</b> - Requirement for facilities and equipment needed by the program.</p>");
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
        			     	urlSearchParams.append('createdBy', this.global.userid.toString());
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
             this.proposalid=res.id;
             this.http.get(this.global.api + 'api.php?action=programinsert&proposalid='+this.proposalid,
             option)
                .map(response => response.json())
                .subscribe(res => {
                  this.programid= res.id;
                  this.getprojectlist(this.programid);
                });


             

          },error => {
          	console.log(Error); 
                this.global.swalAlertError();
           } );
	     

  	}
  	if (x!='') {
  		alert(x)
  	}else
        stepper.next();

  	

  }
  getprojectlist(programid){
    var header = new Headers();
      header.append("Accept", "application/json");
      header.append("Content-Type", "application/x-www-form-urlencoded");    
      let option = new RequestOptions({ headers: header });
      this.http.get(this.global.api + 'api.php?action=getprojecttitles&programid='+programid,
         option)
            .map(response => response.json())
            .subscribe(res => {
              this.projectlists= res;
             console.log(res);
        });
  }


  addproject(){
    if (this.protitle==''||this.produration=='') {
      alert("Project title and Duration is required!")
    }else
    {
     let urlSearchParams = new URLSearchParams();
                    urlSearchParams.append("programid",this.programid.toString());
                     urlSearchParams.append('title', this.protitle );
                     urlSearchParams.append('duration', this.produration);
                  let body = urlSearchParams.toString()
      var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Content-Type", "application/x-www-form-urlencoded");    
                  let option = new RequestOptions({ headers: header });
      this.proposalcounter = true;
      this.global.swalLoading('Adding project title');

       this.http.post(this.global.api + 'api.php?action=projectadd',
       body,option)
          .map(response => response.json())
          .subscribe(res => {
             this.global.swalClose();
             this.protitle = '';
             this.produration = '';
             this.getprojectlist(this.programid);           

          },error => {
            console.log(Error); 
                this.global.swalAlertError();
           } );
    }
  }
  removeprojecttitle(projectid){

    var header = new Headers();
      header.append("Accept", "application/json");
      header.append("Content-Type", "application/x-www-form-urlencoded");    
      let option = new RequestOptions({ headers: header });
      this.http.get(this.global.api + 'api.php?action=removeprojecttitle&projectid='+projectid,
         option)
            .map(response => response.json())
            .subscribe(res => {
             this.getprojectlist(this.programid);   
        },error => {
                this.global.swalAlertError();
           } );
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

  swalConfirm(id)
  {
    swal({
        title: 'Remove Project Title?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.value) {
             this.removeprojecttitle(id);
             
        }
      })
  }
}
