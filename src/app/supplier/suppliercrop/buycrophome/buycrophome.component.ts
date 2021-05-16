import { Component, OnInit } from '@angular/core';
import { CropserviceService } from 'src/app/farmer/farmercrop/cropservice.service';
import { Router } from '@angular/router';
import { CropsModel } from 'src/app/shared/crops';

@Component({
  selector: 'app-buycrophome',
  templateUrl: './buycrophome.component.html',
  styleUrls: ['./buycrophome.component.scss']
})
export class BuycrophomeComponent implements OnInit {

  crops;
  
    constructor(private cs: CropserviceService,private router:Router) { 
      cs.getAll().subscribe((res)=>this.crops=res);
    }
 
  

    ngOnInit() {
    

    }
}
