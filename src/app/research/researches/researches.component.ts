import { Component, OnInit,Injectable } from '@angular/core';
import { GlobalService } from './../../global.service';
import {Http, Headers, RequestOptions} from '@angular/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ViewChild,ElementRef } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
import { ResearchStatusComponent } from './research-status/research-status.component';
import { ResearchPdfComponent } from './research-pdf/research-pdf.component';
const swal = Swal;

@Component({
  selector: 'app-researches',
  templateUrl: './researches.component.html',
  styleUrls: ['./researches.component.scss']
})
export class ResearchesComponent implements OnInit {


	displayedColumns = ['title','level','company','datecreated','status','action'];
      @ViewChild(MatSort) sort: MatSort;
       @ViewChild('paginator') paginator: MatPaginator;

	  dataSource;
	  tableArr:Array<any>;

    injectid
      ngOnInit() {
        this.createTable();
      }

      draft=[];
      submmited=[];
      researches
      degreelevel

      title
      level
      status


  constructor(public dialog: MatDialog,private global: GlobalService,private http: Http,private router: Router) {
    
    this.http.get(this.global.api + 'api.php?action=degreelevel',
         this.global.option)
            .map(response => response.json())
            .subscribe(res => {
              this.degreelevel= res;
        });
  }

  Viewpdf(id){
    var header = new Headers();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");    
        let option = new RequestOptions({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchDocument_Select&rid='+id+"&type=0",
           option)
              .map(response => response.json())
              .subscribe(res => {
                if(res[0].id!=null){

                const dialogRef = this.dialog.open(ResearchPdfComponent, {
                      width: '90%',data:{pdf: id}, disableClose: false });

                    dialogRef.afterClosed().subscribe(result => {
                      if (result==1) { 
                      }
                    });
                }else{
                  this.global.swalAlert('No main Document','','warning')
                }
            });
  }

  ViewHistory(title,status): void {
    const dialogRef = this.dialog.open(ResearchStatusComponent, {
      width: '50%',data:{title:title,status:status}, disableClose: false });

    dialogRef.afterClosed().subscribe(result => {
      if (result==1) { 
      }
    });
  }

  createTable() {
    this.global.swalLoading('');
        this.http.get(this.global.api + 'api.php?action=spResearch_List&company=' + this.global.useraccess.companyid,
         this.global.option)
            .map(response => response.json())
            .subscribe(res => {
            this.global.swalClose();
            this.tableArr= res;
            console.log(res)
            this.dataSource = new MatTableDataSource(this.tableArr);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.applyFilter2('0');
        },error=>{
            console.log(error);
            this.global.swalClose();
        });

      }

updateresearch(id,title,abstract,dlid){
  this.global.researchid = id;
  this.global.researchtitle = title;
  this.global.researchabstract = abstract;
  this.global.researchlevel = dlid;
  this.router.navigate(['../main',{outlets:{div:'update-research'}}]);
}

applyFilter(filterValue: string) {
  this.dataSource.filterPredicate = (data:
  {title: string}, filterValue: string) =>
  data.title.trim().toLowerCase().indexOf(filterValue) !== -1;

    this.dataSource.filter = filterValue.trim().toLowerCase();

this.level=''
this.status=''

}

applyFilter2(filterValue: string) {
  this.dataSource.filterPredicate = (data:
  {status}, filterValue: string) =>
  data.status[0].id.trim().toLowerCase().indexOf(filterValue) !== -1;

    this.dataSource.filter = filterValue.trim().toLowerCase();

this.title=''
this.level=''
}
applyFilter3(filterValue: string) {
  this.dataSource.filterPredicate = (data:
  {level}, filterValue: string) =>
  data.level.trim().toLowerCase().indexOf(filterValue) !== -1;

    this.dataSource.filter = filterValue.trim().toLowerCase();
this.title=''
this.status=''
}


removeRole(id){
    this.swalConfirm("Delete Research?","You won't be able to revert this!",'warning','Yes','Research has been Removed','','delete',id);
  }
returntoDraft(id){
    this.swalConfirm("Return the Status to Draft?","",'warning','Yes','Research status has been changed','','returntodraft',id);
  }
  swalConfirm(title,text,type,button,d1,d2,remove,id)
  {
    swal({
        title: title,
        type: type,
        html:text,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: button
      }).then((result) => {
        if (result.value) {
          if (remove=='delete') {
            this.http.get(this.global.api+'api.php?action=researchdelete&researchid='+id)
              .map(response => response.text())
              .subscribe(res => {
                this.createTable();
              },Error=>{
                //console.log(Error);
                this.global.swalAlertError();
                console.log(Error)
              });
          }else 
          if (remove=='returntodraft') {
             let urlSearchParams2 = new URLSearchParams();
                urlSearchParams2.append("rid",id);
                 urlSearchParams2.append('remarks', null);
                 urlSearchParams2.append('status', '0');
              let body2 = urlSearchParams2.toString()
              var header = new Headers();
                    header.append("Accept", "application/pdf");
                    header.append("Content-Type", "application/x-www-form-urlencoded");    
                    let option2 = new RequestOptions({ headers: header });
               this.http.post(this.global.api + 'api.php?action=spResearchResearchStatus_Insert',body2,option2)
                    .map(response => response.text())
                    .subscribe(res => {
                      this.createTable();
                    });
          }
        }
      })
  }
}
