import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../../global.service';
import {Http, Headers, RequestOptions} from '@angular/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ViewChild,ElementRef } from '@angular/core';
import Swal from 'sweetalert2';
const swal = Swal;
@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {
displayedColumns = ['title','fagency','datecreated','status'];
      @ViewChild(MatSort) sort: MatSort;
       @ViewChild('paginator') paginator: MatPaginator;

	  dataSource;
	  tableArr:Array<any>;
      ngOnInit() {
        this.createTable();
      }

      draft=[];
      submmited=[];
  constructor(private global: GlobalService,private http: Http) { }
tabClick(tab) {
    this.createTablestatus(tab.index);
}
createTable() {
      this.draft=[];
      this.submmited=[];

    this.global.swalLoading('Loading Proposals...');
        this.http.get(this.global.api+'api.php?action=proposallists&user='+this.global.userid,this.global.option)
          .map(response => response.json())
          .subscribe(res => {
            this.tableArr=res;
            console.log(res)
             for (var i = 0; i < this.tableArr.length; i++) {
                   if (this.tableArr[i].status[0].name=='Draft') {
                     this.draft.push(this.tableArr[i]);
                   }else 
                   if (this.tableArr[i].status[0].name=='Submitted') {
                     this.submmited.push(this.tableArr[i]);
                   }
                 }
            this.dataSource = new MatTableDataSource(this.tableArr);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.global.swalClose();
          },Error=>{
            //console.log(Error);
            console.log(Error)
          });
      }

createTablestatus(text){

                 if (text==0) {
                    this.dataSource = new MatTableDataSource(this.draft);
                 }
                 else if(text==1) {
                    this.dataSource = new MatTableDataSource(this.submmited);
                 }

            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
}


applyFilter(filterValue: string) {
  this.dataSource.filterPredicate = (data:
  {GeneralTitle: string}, filterValue: string) =>
  data.GeneralTitle.trim().toLowerCase().indexOf(filterValue) !== -1;

    this.dataSource.filter = filterValue.trim().toLowerCase();
}

removeRole(id){
    this.swalConfirm("Are you sure?","You won't be able to revert this!",'warning','Delete Proposal','Proposal has been Removed','','role',id);
  }
  
  swalConfirm(title,text,type,button,d1,d2,remove,id)
  {
    swal({
        title: title,
        text: text,
        type: type,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: button
      }).then((result) => {
        if (result.value) {
          if (remove=='role') {
            this.http.get(this.global.api+'api.php?action=proposaldelete&proposalid='+id)
              .map(response => response.json())
              .subscribe(res => {
                this.createTable();
              },Error=>{
                //console.log(Error);
                this.global.swalAlertError();
                console.log(Error)
              });
          }
        }
      })
  }
}
