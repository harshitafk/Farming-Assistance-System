import { Component, OnInit,ViewChild } from '@angular/core';
import {Advertisement} from "../farmermodel/advertisementmodel";
import { Router } from '@angular/router';
import{ AdvertisementService} from '../farmerservice/advertisement.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-viewadvertisement',
  templateUrl: './viewadvertisement.component.html',
  styleUrls: ['./viewadvertisement.component.scss']
})
export class ViewadvertisementComponent implements OnInit {

  //datasource;
  advertisements: Advertisement[] ;
  //displayedColumns: string[] = ['id', 'cropname', 'quantity'];
  
  
  constructor(private router:Router, private advertisementService : AdvertisementService) { 
    
  }

  ngOnInit() {
    this.advertisementService.getAllAdvertisements()
    .subscribe(data=>{
      this.advertisements=data;
    })
  }

}
