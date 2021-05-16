import { Injectable } from '@angular/core';
import { SupplierModel } from '../suppliermodel/suppliermodel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupplierregsiterService {

  public errorMessage: string = '';

  constructor(private _http : HttpClient) { }

  public loginSupplier(supplier: SupplierModel):Observable<any>{
    return this._http.post<any>("http://localhost:8686/register-service/registration/supplierlogin",supplier);
  }

  public registerSupplier(supplier: SupplierModel):Observable<any>{
    return this._http.post<any>("http://localhost:8686/register-service/registration/suppliersignup",supplier);
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
    
  }

  public createErrorMessage(error: HttpErrorResponse){
    return this.errorMessage = error.error ? error.error : error.statusText;
  }
}
