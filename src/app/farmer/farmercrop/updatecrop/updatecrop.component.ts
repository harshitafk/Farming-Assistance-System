import { Component, OnInit } from '@angular/core';
import { CropserviceService } from '../cropservice.service';
import { Router } from '@angular/router';
import { CropsModel } from 'src/app/shared/crops';
import {MatStepperModule} from '@angular/material/stepper';


@Component({
  selector: 'app-updatecrop',
  templateUrl: './updatecrop.component.html',
  styleUrls: ['./updatecrop.component.scss']
})
export class UpdatecropComponent implements OnInit {

  crop;
  constructor(private cs:CropserviceService,private router:Router) {
    this.crop=history.state.crops;
   }

   updateCrop(){
    this.cs.updateCrop(this.crop).subscribe((data)=>{
      console.log(data)
      alert("updated...")
})
 }

  ngOnInit(): void {
  }

}
