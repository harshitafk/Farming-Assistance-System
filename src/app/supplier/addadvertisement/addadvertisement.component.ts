import { Component, OnInit,ViewChild } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { Advertisement } from 'src/app/farmer/farmermodel/advertisementmodel';
import { FormGroup, FormControl, Validators, FormBuilder,NgForm }  from '@angular/forms';
import { Router } from '@angular/router';
import{ AdvertisementService} from 'src/app/farmer/farmerservice/advertisement.service';


@Component({
  selector: 'app-addadvertisement',
  templateUrl: './addadvertisement.component.html',
  styleUrls: ['./addadvertisement.component.scss']
})
export class AddadvertisementComponent implements OnInit {
  message:string;
 
  constructor(private formBuilder : FormBuilder,private router:Router, private advertisementService : AdvertisementService) { }
addForm:FormGroup;
  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      id:[],
      cropname:[],
      quantity:[]
    })

  }

  onSubmit() {
    
  this.advertisementService.createAdvertisement(this.addForm.value).subscribe(data => {
    console.log('Post created successfully!');
    alert("Crops added successfully.")
       }),error => {
   alert("Fields can not be empty")
      }
}

}
