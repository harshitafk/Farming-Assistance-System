import { Component, OnInit } from '@angular/core';
import { CropserviceService } from 'src/app/farmer/farmercrop/cropservice.service';
import { Router } from '@angular/router';
import { CropsModel } from 'src/app/shared/crops';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-buycrop',
  templateUrl: './buycrop.component.html',
  styleUrls: ['./buycrop.component.scss']
})
export class BuycropComponent implements OnInit {

  crop;
  constructor(private cs:CropserviceService,private router:Router) {
    this.crop=history.state.crops;
   }

   buyCrop(){
    this.deleteCrop(this.crop.id);
    this.cs.buyCrops(this.crop).subscribe(()=>{alert("Bought Successfully..")
  this.router.navigate(['/buyHome'])
})
 }
 deleteCrop(cropId){
  this.cs.deleteCrop(cropId).subscribe(()=>{
 history.go()
 });

}


  ngOnInit(): void {
  }
}
