import { Injectable } from '@angular/core';
import { AdminModel } from '../adminmodel/adminmodel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminregisterService {

  public errorMessage: string = '';
  constructor(private _http : HttpClient) { }

  // authentication(data):Observable<any>{
  //   return this._http.post("http://localhost:8080/registration/AdminAuthenticate",data);
  // }


  public loginAdmin(admin: AdminModel):Observable<any>{
    return this._http.post<any>("http://localhost:8686/register-service/registration/adminlogin",admin);
  }
}
