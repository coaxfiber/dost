import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {
title;

  constructor(public dialogRef: MatDialogRef<UpdateProjectComponent>,@Inject(MAT_DIALOG_DATA) public data: any,) { 
  	this.title = data.progtitle;
  	console.log(data.progtitle);
  }

  ngOnInit() {
  }

}
