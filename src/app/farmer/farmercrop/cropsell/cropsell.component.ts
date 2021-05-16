import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CropserviceService } from '../cropservice.service';
import { CropsModel } from 'src/app/shared/crops';

@Component({
  selector: 'app-cropsell',
  templateUrl: './cropsell.component.html',
  styleUrls: ['./cropsell.component.scss']
})
export class CropsellComponent implements OnInit {
  constructor(private cs:CropserviceService, private router:Router) {
    
  }
 crops = {
   id:'',
   name:'',
   price:'',
   quantity:''
 }
 
 
 ngOnInit(): void {
 }
 
 sellCrop(){
   this.cs.add(this.crops).subscribe(()=>{
     alert("added")
 })

 }

}
