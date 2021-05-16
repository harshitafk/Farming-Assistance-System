import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CropserviceService } from '../cropservice.service';
import { CropsModel } from 'src/app/shared/crops';

@Component({
  selector: 'app-crophome',
  templateUrl: './crophome.component.html',
  styleUrls: ['./crophome.component.scss']
})
export class CrophomeComponent implements OnInit {

  crops;
  cropId;
  
    constructor(private cs: CropserviceService,private router:Router) { 
      cs.getAll().subscribe((res)=>this.crops=res);
    }
  
  
    deleteCrop(cropId){
      this.cs.deleteCrop(cropId).subscribe(()=>{alert("deleted...")
     history.go()
     });
    
    }
  
  
  
  
  
    ngOnInit() {
      
  
    }

}
