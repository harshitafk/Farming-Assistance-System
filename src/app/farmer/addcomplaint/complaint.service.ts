import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComplaintModel } from 'src/app/shared/complaintmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http: HttpClient) { }


  getAll(){
    return this.http.get('http://localhost:3000/complaints')
  }

  // updateComplaint(complaint){
  //   let opt=new HttpHeaders({'Content-type':'application/json'})
  //   return this.http.put('http://localhost:3000/complaints/'+complaint.id,complaint,{headers:opt});
  // }

  add(complaint){
    let opt=new HttpHeaders({'Content-Type':'application/json'})
    return this.http.post('http://localhost:3000/complaints',complaint,{headers:opt})
  }
}
