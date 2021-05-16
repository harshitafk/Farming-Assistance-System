import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AdminModel } from '../adminmodel/adminmodel';
import { AdminregisterService } from '../adminregister/adminregister.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  admin = new AdminModel();
  message='';

  adminModel = {username: '', password: '', remember: false};
  constructor(public dialogRef: MatDialogRef<AdminloginComponent>
    ,private _service : AdminregisterService
    ,private _router : Router) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    this._service.loginAdmin(this.admin).subscribe(
      data =>{
        console.log("response received");
        this._router.navigate(['/adminhome'])
        this.dialogRef.close();
      },
      error => {
        console.log("exception occured");
        this.message="Hey! Please enter valid username and password";
      }

    );
    //console.log('User: ', this.user);
    
  }

}
