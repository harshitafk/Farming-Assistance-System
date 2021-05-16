import { Injectable } from '@angular/core';
import { FarmerModel } from '../farmermodel/farmermodel';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FarmerregisterService {


  public errorMessage: string = '';
  constructor(private _http : HttpClient) { }

  public loginFarmer(farmer: FarmerModel):Observable<any>{
    return this._http.post<any>("http://localhost:8686/register-service/registration/farmerlogin",farmer);
  }

  public registerFarmer(farmer: FarmerModel):Observable<any>{
    return this._http.post<any>("http://localhost:8686/register-service/registration/farmersignup",farmer);
  }

  public handleError = (error: HttpErrorResponse) => {
    if(error.status === 500){
      this.handle500Error(error);
    }
    else if(error.status === 404){
      this.handle404Error(error)
    }
    else{
     this.handleOtherError(error);
    }
  }

  private handle500Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
  }

  private handle404Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
  }

  private handleOtherError = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    //TODO: this will be fixed later;
  }

  public createErrorMessage(error: HttpErrorResponse){
    return this.errorMessage = error.error ? error.error : error.statusText;
  }

}
