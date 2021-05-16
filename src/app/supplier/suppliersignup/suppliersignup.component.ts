import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,FormsModule, ReactiveFormsModule,NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SupplierregsiterService } from '../supplierregister/supplierregsiter.service';
import { SupplierModel } from '../suppliermodel/suppliermodel';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { DialogElementsExampleDialogComponent } from '../suppliersignup/dialog-elements-example-dialog/dialog-elements-example-dialog.component';

@Component({
  selector: 'app-suppliersignup',
  templateUrl: './suppliersignup.component.html',
  styleUrls: ['./suppliersignup.component.scss']
})
export class SuppliersignupComponent implements OnInit {

    msg = '';
    supplier = new SupplierModel();
    //registerForm: FormGroup;
    @ViewChild('registerForm') private registerForm: NgForm;
    hide = true;

  constructor(private formBuilder: FormBuilder,private _router : Router,private _service : SupplierregsiterService
    ,private errorService: SupplierregsiterService, public dialog: MatDialog) { }

  ngOnInit(): void {
      
  }

  

  // convenience getter for easy access to form fields
  onSubmit() {
    this._service.registerSupplier(this.supplier).subscribe(
      data =>{
          console.log("response received");
          this.dialog.open(DialogElementsExampleDialogComponent);
          this.registerForm.resetForm();
          
        },error => {
          console.log("Exception occured");
          this.msg = this.errorService.createErrorMessage(error);
        }  
    )     
}

}



