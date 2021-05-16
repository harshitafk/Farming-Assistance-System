import { Component, OnInit, Input } from '@angular/core';
import { LoginMenu } from '../shared/loginmenu';

import { LoginmenuService } from '../services/loginmenu.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { FarmersignupComponent } from '../farmer/farmersignup/farmersignup.component';
import { FarmerloginComponent } from '../farmer/farmerlogin/farmerlogin.component';
import { AdminloginComponent } from '../admin/adminlogin/adminlogin.component';
import { SuppliersignupComponent } from '../supplier/suppliersignup/suppliersignup.component';
import { SupplierloginComponent } from '../supplier/supplierlogin/supplierlogin.component';


@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {

  
  loginmenu: LoginMenu;

  loginmenus: LoginMenu[];
  selectedUser: LoginMenu;

  constructor(private loginmenuservice : LoginmenuService,private route: ActivatedRoute,
    private location: Location,public dialog: MatDialog) { }

  ngOnInit(){ 
    const id = this.route.snapshot.params['id'];
    this.loginmenu = this.loginmenuservice.getUser(id);
  }

  goBack(): void {
    this.location.back();
  }

  openLoginForm(value) {
    if(value=== '0'){
    this.dialog.open(FarmerloginComponent, {width: '400px', height: '400px'});
    }
    if(value=== '1'){
      this.dialog.open(SupplierloginComponent, {width: '500px', height: '400px'});
    }
    if(value=== '2'){
      this.dialog.open(AdminloginComponent, {width: '500px', height: '400px'});
    }
  }

  openSignupForm(value) {
    if(value=== '0'){
    this.dialog.open(FarmersignupComponent, {width: '400px', height: '830px'});
    }
    if(value=== '1'){
      this.dialog.open(SuppliersignupComponent,{width: '400px', height: '790px'});
    }
  }

  onSelect(login: LoginMenu) {
    this.selectedUser = login;
  }

}
