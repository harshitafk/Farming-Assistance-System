import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/farmer/addcomplaint/complaint.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcomplaint',
  templateUrl: './viewcomplaint.component.html',
  styleUrls: ['./viewcomplaint.component.scss']
})
export class ViewcomplaintComponent implements OnInit {

  complaints;
  complaint = {
    id: '',
    farmerId:'',
    message:'',
    status: ''

  }
  constructor(private cs: ComplaintService,private router:Router) { 
    cs.getAll().subscribe((res)=>this.complaints=res);
  }

//   updateComplaint(){
//     this.cs.updateComplaint(this.complaint).subscribe(()=>{alert("updated...")
//           })
//  }

  ngOnInit(): void {
  }

}
