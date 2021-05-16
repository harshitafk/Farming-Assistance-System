import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { SupplierregsiterService } from '../supplierregister/supplierregsiter.service';
import { SupplierModel } from '../suppliermodel/suppliermodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplierlogin',
  templateUrl: './supplierlogin.component.html',
  styleUrls: ['./supplierlogin.component.scss']
})
export class SupplierloginComponent implements OnInit {

  supplier = new SupplierModel();
  message='';

  userModel = {username: '', password: '', remember: false};
  constructor(public dialogRef: MatDialogRef<SupplierloginComponent>
    ,private _service : SupplierregsiterService
    ,private _router : Router) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    this._service.loginSupplier(this.supplier).subscribe(
      data =>{
        console.log("response received");
        this._router.navigate(['/supplierhome'])
        this.dialogRef.close();
      },
      error => {
        console.log("exception occured");
        this.message="Hey! Please enter valid username and password";
      }

    );
  }
}
