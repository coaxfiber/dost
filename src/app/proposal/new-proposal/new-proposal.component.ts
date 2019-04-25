import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../../global.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 
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

  yeararr=[];

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

  ps=null;
  moe=null;
  co=null;
  budgettotal=0
  budgetlist;
  budgetlist2;
  balltotal=0
  esummary='';

  projecttitle;
  projectduration;
  coopagency='';
  cagencylist
  projectid
  calists

  rndstation
  scommodity
  descipline

 projectclassification = [];
 projectmoi = [];
 projectpa = [];
 projectsector = [];
 projectdiscipline = [];
 significance
 objectives
 methodology
 majora
 expectedo
   targetb
  year1
  year2
  month1
  month2

  constructor( private global: GlobalService,private http: Http,private route: ActivatedRoute, private router: Router) {
    this.http.get(this.global.api + 'api.php?action=FundingAgency_List',
         this.global.option)
            .map(response => response.json())
            .subscribe(res => {
              this.fundingagency= res;
        });

    this.http.get(this.global.api + 'api.php?action=company_List',
         this.global.option)
            .map(response => response.json())
            .subscribe(res => {
              this.cagencylist= res;
        });

            console.log(this.projectclassification.length);
    if (global.user.ext==null) {
      global.user.ext = '';
    }
    if (global.user.mname==null) {
      global.user.mname = '';
    }
    if (global.user.telno==null) {
      global.user.telno = '';
    }

    this.cleader = global.user.fname+" "+global.user.mname+" "+global.user.surname+" "+global.user.ext;
    this.gender = global.user.sex;
    this.email = global.requestemail();
    this.agencies = global.user.agency;
    this.address = global.user.address;
    this.telephone = global.user.telno;

    var dt = new Date();
     var year = dt.getFullYear() - 10;
    for (var i = 0; i < 20; i++) {
      this.yeararr[i] = year;
      year++;
    }

  }

  checkbox(event,type,text){
    if (event.checked==true) {
       if (type==1) {
         this.projectclassification.push(text);
       }else 
       if (type==2) {
         this.projectmoi.push(text);
       }else 
       if (type==3) {
         this.projectpa.push(text);
       }else 
       if (type==4) {
         this.projectsector.push(text);
       }else 
       if (type==5) {
         this.projectdiscipline.push(text);
       }
    }else{
      if (type==1) {
           for( var i = 0; i < this.projectclassification.length; i++){ 
             if ( this.projectclassification[i] === text) {
               this.projectclassification.splice(i, 1); 
             }
          }
       }else
      if (type==2) {
           for( var i = 0; i < this.projectmoi.length; i++){ 
             if ( this.projectmoi[i] === text) {
               this.projectmoi.splice(i, 1); 
             }
          }
       }else
      if (type==3) {
           for( var i = 0; i < this.projectpa.length; i++){ 
             if ( this.projectpa[i] === text) {
               this.projectpa.splice(i, 1); 
             }
          }
       }else
      if (type==4) {
           for( var i = 0; i < this.projectsector.length; i++){ 
             if ( this.projectsector[i] === text) {
               this.projectsector.splice(i, 1); 
             }
          }
       }else
      if (type==4) {
           for( var i = 0; i < this.projectdiscipline.length; i++){ 
             if ( this.projectdiscipline[i] === text) {
               this.projectdiscipline.splice(i, 1); 
             }
          }
       }
    }
  }


  totalb(ps,co,moe){
    return parseInt(ps)+parseInt(moe)+parseInt(co);
  }
  totalb2(ps,co,moe){
    return parseInt(ps)+parseInt(moe)+parseInt(co);
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
  classification(){
    this.global.swalinfo("<b>Classification</b> - indicates whether the program/project is research or development.");
  }
  implementation(){
    this.global.swalinfo("<b>Mode of Implementation</b> - indicate whether the R & D will be undertaken by one or more than one agency.");
  }
  basic(){
    this.global.swalinfo("<b>Basic research </b> - is an experimental or theoretical work undertaken primarily to acquire new knowledge of the underlying foundations of phenomena and observable facts, without any particular or specific application or use in view.");
  }
  applied(){
    this.global.swalinfo("<b>Applied research</b> - is an original investigation undertaken in order to acquire new knowledge directed primarily towards a specific aim or objective.");
  }
  ptesting(){
    this.global.swalinfo("<b>Pilot Testing</b> - is an innovative work to confirm and demonstrate the feasibility of actually using a technology; gauging end user’s reaction to introduction of improved technologies and identifying potential problems related to wider dissemination, utilization and adoption so that these can be fed back to researchers.");
  }
  promotion(){
    this.global.swalinfo("<b>Technology promotion/commercialization</b> - is an activity involving application of technologies on a commercial scale by an identified entrepreneur or user primarily to increase his income/profits and productivity; technologies utilized/produced on a pre-commercial scale including market testing jointly undertaken with a client.");
  }
  development(){
    this.global.swalinfo("<b>Developmental research</b> - is a systematic work, drawing on existing knowledge gained from research and/or practical experience that is directed to producing new materials, products or devices, installing new processes, systems and services and improving substantially those already produced or installed.");
  }
  pagenda(){
    this.global.swalinfo("<b>Priority Areas/STAND Classification</b> - Identify the classification of the R & D proposal in the S & T Agenda for National Development.");
  }
  sectorc(){
    this.global.swalinfo("<b>Sector</b> - indicate whether crops, livestock, forestry, agricultural resources or socio-economics; fisheries or aquatic resources; biotechnical, pharmaceutical, or health services; biotechnology, information technology, material science, photonics or space technology; industry, energy, utilities or infrastructure.");
  }
  disciplineinfo(){
    this.global.swalinfo("<b>Discipline</b> - The specific field to be studied (e.g. plant breeding, taxonomy).");
  }
  significanceinfo(){
    this.global.swalinfo("<b>Significance</b> - State the research problem and significance of the project to the current needs of the country. The proposal should justify resource expenditure. A typical justification would include a brief introduction, a general statement concerning the historical basis for R & D, utilization of the expected output and the impact the information generated will have on science, the target users and the country.");
  }
  expectedoinfo(){
    this.global.swalinfo("<b>Expected Output</b> - Indicate the specific products, processes or services which the project is expected to produce and how these can be used; quantify when possible");
  }
  targetbinfo(){
    this.global.swalinfo("<b>Target Beneficiaries</b> - Who the clienteles are and what are the expected outcome/effects of the use of the project outputs).");
  }
  schedinfo(){
    this.global.swalinfo("<b>Implementing Schedule</b> - The duration of the project in months including planned start date and expected.");
  }
  budgetprojectinfo(){
    this.global.swalinfo("<b>Estimated Annual Budget</b> - The budget requirement for personal services (PS), maintenance and other operating expenses (MOOE), capital outlay(CO) for the first of implementation and the total budget requirement by source of fund.");
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
  	}if (this.proj==false&&this.prog==false) {
      x=x+"*Must select a proposal type!\n";
    }

  	if (x==''&&this.proposalcounter==false) {
                  let urlSearchParams = new URLSearchParams();
                    urlSearchParams.append("GeneralTitle",this.title);
        			     	urlSearchParams.append('LeadAgency', this.agencies);
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

                  if (this.proj!=true) {
                    this.getprojectlist(this.programid);
                  }else{
                    this.projecttitle = this.title;
                    this.projectduration = this.duration;
                         let urlSearchParams = new URLSearchParams();
                                        urlSearchParams.append("programid",this.programid.toString());
                                         urlSearchParams.append('title', this.projecttitle );
                                         urlSearchParams.append('duration', this.projectduration);
                                      let body = urlSearchParams.toString()
                          var header = new Headers();
                                      header.append("Accept", "application/json");
                                      header.append("Content-Type", "application/x-www-form-urlencoded");    
                                      let option = new RequestOptions({ headers: header });
                          this.global.swalLoading('Adding project title');
                           this.http.post(this.global.api + 'api.php?action=projectadd',
                           body,option)
                              .map(response => response.json())
                              .subscribe(res => {
                                 this.global.swalClose();  
                                 this.getprojectlist(this.programid) 
                              },error => {
                                console.log(Error); 
                                    this.global.swalAlertError();
                               } );
                  }
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
              this.projectid=res[0].id;
        });
  }


  insertcagency(){

let x='';
    if (this.coopagency==undefined||this.coopagency=="") {
      x=x+"*Cooperating Agency is required\n";
    }

    if (x=='') {
     let urlSearchParams = new URLSearchParams();
                    urlSearchParams.append("pid",this.projectid.toString());
                     urlSearchParams.append('cid', this.coopagency.toString() );
                  let body = urlSearchParams.toString()
      var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Content-Type", "application/x-www-form-urlencoded");    
                  let option = new RequestOptions({ headers: header });
      this.proposalcounter = true;
      this.global.swalLoading('Adding project title');

       this.http.post(this.global.api + 'api.php?action=projectaddcoopagency',
       body,option)
          .map(response => response.json())
          .subscribe(res => {
             this.global.swalClose();
             this.coopagency = null;
             this.getcooperating(this.projectid);           

          },error => {
            console.log(Error); 
                this.global.swalAlertError();
           } );
        }else
          alert(x)
  }

  getcooperating(projectid){
    var header = new Headers();
      header.append("Accept", "application/json");
      header.append("Content-Type", "application/x-www-form-urlencoded");    
      let option = new RequestOptions({ headers: header });
      this.http.get(this.global.api + 'api.php?action=getcoopagency&projectid='+projectid,
         option)
            .map(response => response.json())
            .subscribe(res => {
              this.calists= res;
        });
  }

  getbudget(programid){
    var header = new Headers();
      header.append("Accept", "application/json");
      header.append("Content-Type", "application/x-www-form-urlencoded");    
      let option = new RequestOptions({ headers: header });
      this.http.get(this.global.api + 'api.php?action=getbudget&programid='+programid,
         option)
            .map(response => response.json())
            .subscribe(res => {
              this.budgetlist= res;
             console.log(res);
        });
  }

  getbudget2(projectid){
    var header = new Headers();
      header.append("Accept", "application/json");
      header.append("Content-Type", "application/x-www-form-urlencoded");    
      let option = new RequestOptions({ headers: header });
      this.http.get(this.global.api + 'api.php?action=getbudget2&projectid='+projectid,
         option)
            .map(response => response.json())
            .subscribe(res => {
              this.budgetlist2= res;
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
  removecagency(id){
                                                                                              
    var header = new Headers();
      header.append("Accept", "application/json");
      header.append("Content-Type", "application/x-www-form-urlencoded");    
      let option = new RequestOptions({ headers: header });
      this.http.get(this.global.api + 'api.php?action=projectdeletecoopagency&id='+id,
         option)
            .map(response => response.json())
            .subscribe(res => {
             this.getcooperating(this.projectid);    
        },error => {
                this.global.swalAlertError();
           } );
  }
  removebudget(id,ps,moe,co){                                                                                    
    var header = new Headers();
      header.append("Accept", "application/json");
      header.append("Content-Type", "application/x-www-form-urlencoded");    
      let option = new RequestOptions({ headers: header });
      this.http.get(this.global.api + 'api.php?action=removebudget&bid='+id,
         option)
            .map(response => response.json())
            .subscribe(res => {
       this.balltotal = this.balltotal - (parseInt(ps)+parseInt(moe)+parseInt(co)) ; 
             this.getbudget(this.programid);   
        },error => {
                this.global.swalAlertError();
           } );
  }
  removebudget2(id,ps,moe,co){                                                                                    
    var header = new Headers();
      header.append("Accept", "application/json");
      header.append("Content-Type", "application/x-www-form-urlencoded");    
      let option = new RequestOptions({ headers: header });
      this.http.get(this.global.api + 'api.php?action=removebudget2&bid='+id,
         option)
            .map(response => response.json())
            .subscribe(res => {
             this.balltotal = this.balltotal - (parseInt(ps)+parseInt(moe)+parseInt(co)) ; 
             this.getbudget2(this.projectid);   
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
             this.removeprojecttitle(id);
            // code...
          }else if (ctr==2) {
             this.removebudget(id,ps,moe,co);
          }else if (ctr==3) {
             this.removecagency(id);
          }else if (ctr==4) {
             this.removebudget2(id,ps,moe,co);
          }
             
        }
      })
  }


  addbudget(){
  let x=''
    if (this.fangency1==undefined||this.fangency1=="") {
      x=x+"*Source of Fund is Required\n";
    }if (this.ps==''||this.ps==null) {
      x=x+"*PS is required\n";
    }if (this.co==''||this.co==null) {
      x=x+"*Co is required\n";
    }if (this.moe==''||this.moe==null) {
      x=x+"*MOE is required\n";
    }
    if (x=='') {
                  let urlSearchParams = new URLSearchParams();
                    urlSearchParams.append("sof",this.fangency1);
                     urlSearchParams.append('ps', this.ps.toString());
                     urlSearchParams.append('moe', this.moe.toString());
                     urlSearchParams.append('co', this.co.toString());
                     urlSearchParams.append('programid', this.programid.toString());
                  let body = urlSearchParams.toString()
      var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Content-Type", "application/x-www-form-urlencoded");    
                  let option = new RequestOptions({ headers: header });
      this.proposalcounter = true;
      this.global.requestToken();
       this.global.swalLoading('Adding Budget');

       this.http.post(this.global.api + 'api.php?action=addbudget',
       body,option)
          .map(response => response.json())
          .subscribe(res => {

             this.balltotal = this.balltotal+this.budgettotal;
             this.global.swalClose(); 
             this.fangency1 = '';
             this.ps = '';
             this.moe = '';
             this.co = '';
             this.budgettotal = 0;
             this.getbudget(this.programid);             

          },error => {
            console.log(Error); 
                this.global.swalAlertError();
           } );
      }
    if (x!='') {
      alert(x)
    }
  }

  addbudget2(){
  let x=''
    if (this.fangency1==undefined||this.fangency1=="") {
      x=x+"*Source of Fund is Required\n";
    }if (this.ps==''||this.ps==null) {
      x=x+"*PS is required\n";
    }if (this.co==''||this.co==null) {
      x=x+"*Co is required\n";
    }if (this.moe==''||this.moe==null) {
      x=x+"*MOE is required\n";
    }
    if (x=='') {
                  let urlSearchParams = new URLSearchParams();
                    urlSearchParams.append("sof",this.fangency1);
                     urlSearchParams.append('ps', this.ps.toString());
                     urlSearchParams.append('moe', this.moe.toString());
                     urlSearchParams.append('co', this.co.toString());
                     urlSearchParams.append('projectid', this.projectid.toString());
                  let body = urlSearchParams.toString()
      var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Content-Type", "application/x-www-form-urlencoded");    
                  let option = new RequestOptions({ headers: header });
      this.proposalcounter = true;
      this.global.requestToken();
       this.global.swalLoading('Adding Budget');

       this.http.post(this.global.api + 'api.php?action=addbudget2',
       body,option)
          .map(response => response.json())
          .subscribe(res => {

             this.balltotal = this.balltotal+this.budgettotal;
             this.global.swalClose(); 
             this.fangency1 = '';
             this.ps = '';
             this.moe = '';
             this.co = '';
             this.budgettotal = 0;
             this.getbudget2(this.projectid);
          },error => {
            console.log(Error); 
                this.global.swalAlertError();
           } );
      }
    if (x!='') {
      alert(x)
    }
  }

 proposaldone(){
   if (this.prog==true) {
      let x=''
        if (!(this.projectlists!=undefined&&this.projectlists[0].id!=null)) {
          x=x+"*At least 1 project title is required\n";
        }if (!(this.budgetlist!=undefined&&this.budgetlist[0].id!=null)) {
          x=x+"*At least 1 source of fund is required\n";
        }if (this.esummary==''||this.esummary==null) {
          x=x+"*Executive Summary is required\n";
        }
        if (x=='') {
                      let urlSearchParams = new URLSearchParams();
                        urlSearchParams.append("esummary",this.esummary);
                         urlSearchParams.append('pid', this.proposalid.toString());
                      let body = urlSearchParams.toString()
          var header = new Headers();
                      header.append("Accept", "application/json");
                      header.append("Content-Type", "application/x-www-form-urlencoded");    
                      let option = new RequestOptions({ headers: header });
          this.proposalcounter = true;
          this.global.requestToken();
           this.global.swalLoading('Saving New Proposal...');

           this.http.post(this.global.api + 'api.php?action=proposaldone',
           body,option)
              .map(response => response.json())
              .subscribe(res => {
                 this.global.swalClose(); 
                 this.router.navigate(['../main',{outlets:{div:'proposals'}}]);
              },error => {
                console.log(Error); 
                    this.global.swalAlertError();
               } );
          }
        if (x!='') {
          alert(x)
        }
     }else{
       let x=''


        if (!(this.calists!=undefined&&this.calists[0].id!=null)) {
          x=x+"*At least 1 Cooperating Agency is required\n";
        if (this.rndstation==''||this.rndstation==null) {
          x=x+"*Research & Development Station is required\n";
        }}if (this.projectclassification==[]) {
          x=x+"*Please check at least 1 Classification is required\n";
        }if (this.projectpa==[]) {
          x=x+"*Please check at least 1 Priority Agenda is required\n";
        }if (this.projectsector==[]) {
          x=x+"*Please check at least 1 Sector Commodity is required\n";
        }if (this.projectdiscipline==[]) {
          x=x+"*Please check at least 1 Discipline is required\n";
        }if (this.significance==''||this.significance==null) {
          x=x+"*Significance is required\n";
        }if (this.objectives==''||this.objectives==null) {
          x=x+"*Objectives is required\n";
        }if (this.methodology==''||this.methodology==null) {
          x=x+"*Methodology is required\n";
        }if (this.majora==''||this.majora==null) {
          x=x+"*Major Activities is required\n";
        }if (this.targetb==''||this.targetb==null) {
          x=x+"*Target Beneficiaries is required\n";
        }if ((this.month1==''||this.month1==null)&&(this.year1==''||this.year1==null)) {
          x=x+"*Planned Start date is required\n";
        }if ((this.month2==''||this.month2==null)&&(this.year2==''||this.year2==null)) {
          x=x+"*Planned Completion date is required\n";
        }if (!(this.budgetlist2!=undefined&&this.budgetlist2[0].id!=null)) {
          x=x+"*At least 1 Estimated Budget is required\n";
        }
        if (x=='') {
                      let urlSearchParams = new URLSearchParams();
                        urlSearchParams.append("esummary",this.esummary);
                         urlSearchParams.append('pid', this.proposalid.toString());
                      let body = urlSearchParams.toString()
          var header = new Headers();
                      header.append("Accept", "application/json");
                      header.append("Content-Type", "application/x-www-form-urlencoded");    
                      let option = new RequestOptions({ headers: header });
          this.proposalcounter = true;
          this.global.requestToken();
           this.global.swalLoading('Saving New Proposal...');

           this.http.post(this.global.api + 'api.php?action=proposaldone1b',
           body,option)
              .map(response => response.json())
              .subscribe(res => {
                 this.global.swalClose(); 
                 this.router.navigate(['../main',{outlets:{div:'proposals'}}]);
              },error => {
                console.log(Error); 
                    this.global.swalAlertError();
               } );
          }
        if (x!='') {
          alert(x)
        }
     }
  }
}
