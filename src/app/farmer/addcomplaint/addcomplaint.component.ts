import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../addcomplaint/complaint.service';
import { Router } from '@angular/router';
import { ComplaintModel } from 'src/app/shared/complaintmodel';


@Component({
  selector: 'app-addcomplaint',
  templateUrl: './addcomplaint.component.html',
  styleUrls: ['./addcomplaint.component.scss']
})
export class AddcomplaintComponent implements OnInit {

  constructor(private cs: ComplaintService, private router:Router) { }
  complaint = {
    id:'',
    farmerId:'',
    message:'',
    status:'False'
  }


  ngOnInit(): void {
  }

  
  addComplaint(){
    this.cs.add(this.complaint).subscribe((data)=>{
      alert("added")
      this.router.navigate(['addcomplaint'])
  })
  

}



}
