import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Advertisement} from "../farmermodel/advertisementmodel";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  constructor(private http: HttpClient) { }

  //baseUrl: string = 'http://localhost:9001/advertisement';
 //baseUrl: string = 'http://localhost:8080/advertisement';




  getAllAdvertisements() {
   
    return this.http.get<Advertisement[]>("http://localhost:8686/farmerconsumermicro-service/ConsumerCtrl/getAdvertisements");
  }

  createAdvertisement(advertisement: Advertisement): Observable<any>{
   // const httpOptions ={headers: new HttpHeaders({'Content-Type':'application/json'})}
    return this.http.post<String>("http://localhost:8686/farmerconsumermicro-service/ConsumerCtrl/postAdvertisement", advertisement);
  }
  

  deleteAdvertisement(id:number){
    return this.http.delete(`${"http://localhost:8686/farmerconsumermicro-service/ConsumerCtrl/deleteAdvertisement"}/${id}`);
  }
}
