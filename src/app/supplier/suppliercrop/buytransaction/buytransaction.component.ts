import { Component, OnInit } from '@angular/core';
import { CropserviceService } from 'src/app/farmer/farmercrop/cropservice.service';
import { Router } from '@angular/router';
import { CropsModel } from 'src/app/shared/crops';

@Component({
  selector: 'app-buytransaction',
  templateUrl: './buytransaction.component.html',
  styleUrls: ['./buytransaction.component.scss']
})
export class BuytransactionComponent implements OnInit {

  crops;
  constructor(private cs:CropserviceService,private router:Router) {
    cs.getBuyAll().subscribe((res)=>this.crops=res);
   }

  ngOnInit(): void {
  }


}
