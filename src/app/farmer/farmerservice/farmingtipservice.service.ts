import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FarmingTip } from '../farmermodel/farmingtip';


@Injectable({
  providedIn: 'root'
})
export class FarmingtipserviceService {

  // mockUrl: string = 'http://localhost:3000/Farmingtip';

  currentFarmingtip: FarmingTip = {
  tipsMessage: '',
  id: null
  
}

  constructor( private http: HttpClient) { }

  getAllFarmingtips():Observable<FarmingTip[]> {
    
    return this.http.get<FarmingTip[]>("http://localhost:8686/farmerconsumermicro-service/ConsumerCtrl/viewAllTips");
  }
     

  deleteFarmingtip(id: number): Observable<FarmingTip> {
    return this.http.delete<FarmingTip>("http://localhost:8686/farmerconsumermicro-service/ConsumerCtrl/deleteTip" + '/' + id);
  }


  createFarmingtip(tips: FarmingTip): Observable<FarmingTip> {
    return this.http.post<FarmingTip>("http://localhost:8686/farmerconsumermicro-service/ConsumerCtrl/addTip", tips);
  }

  updateFarmingtip(tips: FarmingTip): Observable<FarmingTip> {
    return this.http.put<FarmingTip>("http://localhost:8686/farmerconsumermicro-service/ConsumerCtrl/updateTip" + '/' + tips.id, tips);
  }
}
