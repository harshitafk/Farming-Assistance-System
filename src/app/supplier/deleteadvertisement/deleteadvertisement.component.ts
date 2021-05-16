import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Router } from '@angular/router';
import{ AdvertisementService} from 'src/app/farmer/farmerservice/advertisement.service';
import { Advertisement } from 'src/app/farmer/farmermodel/advertisementmodel';

@Component({
  selector: 'app-deleteadvertisement',
  templateUrl: './deleteadvertisement.component.html',
  styleUrls: ['./deleteadvertisement.component.scss']
})
export class DeleteadvertisementComponent implements OnInit {

  advertisements: Advertisement[] ;
  message:string;

  constructor(private router:Router, private advertisementService : AdvertisementService) { }

  ngOnInit(){
    this.advertisementService.getAllAdvertisements()
    .subscribe(data=>{
      this.advertisements=data;
    })
  }
  deleteAdvertisement(id){
    this.advertisementService.deleteAdvertisement(id)
    .subscribe(()=> this.message = "Advertisemenrt Deleted Successfully!");
    
    this.router.navigate(['list-advertisement']);
  }

}
