import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,FormsModule, ReactiveFormsModule,NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FarmerregisterService } from '../farmerregister/farmerregister.service';
import { FarmerModel } from '../farmermodel/farmermodel';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-farmersignup',
  templateUrl: './farmersignup.component.html',
  styleUrls: ['./farmersignup.component.scss']
})
export class FarmersignupComponent implements OnInit {


    message='';
    farmer = new FarmerModel();
    //registerForm: FormGroup;
    @ViewChild('registerForm') private registerForm: NgForm;
    
    hide = true;
    confirmpassword  = this.farmer.farmerpassword;

  constructor(private formBuilder: FormBuilder,private _router : Router,private _service : FarmerregisterService
    ,private errorService: FarmerregisterService) {
     }

  ngOnInit(): void {
      
  }


  // convenience getter for easy access to form fields
  

  onSubmit() {
      this._service.registerFarmer(this.farmer).subscribe(
        data =>{
            console.log("response received");
            alert('Registration Successful!');
            this.registerForm.resetForm(); 
            
            
          },error => {
            console.log("exception occured");
            this.message="Username already exists";
          }
  
      )    
      
  }

}
