import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { GlobalService } from './../../../global.service';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ViewChild,ElementRef } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-grant-add-update',
  templateUrl: './grant-add-update.component.html',
  styleUrls: ['./grant-add-update.component.scss']
})
export class GrantAddUpdateComponent implements OnInit {
	title
	date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<GrantAddUpdateComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private global: GlobalService,private http: Http) { }

  ngOnInit() {
  	if (this.data.x==1) {
  		this.title = "Add Call for Proposals";
  	}else
  		this.title = "Update Call for Proposals";

  }
 noclick()
	{
	  this.dialogRef.close(1)
	}
}
