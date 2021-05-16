import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FarmerregisterService } from '../farmerregister/farmerregister.service';
import { FarmerModel } from '../farmermodel/farmermodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmerlogin',
  templateUrl: './farmerlogin.component.html',
  styleUrls: ['./farmerlogin.component.scss']
})
export class FarmerloginComponent implements OnInit {

  farmer = new FarmerModel();
  message='';
 

  farmerModel = {username: '', password: '', remember: false};

  constructor(public dialogRef: MatDialogRef<FarmerloginComponent>
    ,private _service : FarmerregisterService
    ,private _router : Router) { }


  ngOnInit(): void {
  }

 
  onSubmit() {
    this._service.loginFarmer(this.farmer).subscribe(
      data =>{
        console.log("response received");
        this._router.navigate(['/farmerhome'])
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
