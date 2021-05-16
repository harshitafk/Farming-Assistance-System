import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';


const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class CropserviceService {
  

  private userUrl;

  constructor(private http:HttpClient) {}

   getAll(){
     return this.http.get('http://localhost:3000/crops')
   }

   add(crop){
    let opt=new HttpHeaders({'Content-Type':'application/json'})
    return this.http.post('http://localhost:3000/crops',crop,{headers:opt})
  }
   updateCrop(crops){
     let opt=new HttpHeaders({'Content-type':'application/json'})
     return this.http.put('http://localhost:3000/crops/'+crops.id,crops,{headers:opt});
   }

   deleteCrop(cropId){
    return this.http.delete('http://localhost:3000/crops/'+cropId)
  }

    buyCrops(crop){
    let opt=new HttpHeaders({'Content-Type':'application/json'})
    
    return this.http.post('http://localhost:3000/buyCrop',crop,{headers:opt})
  }

  getBuyAll(){
    return this.http.get('http://localhost:3000/buyCrop')
  }


}
