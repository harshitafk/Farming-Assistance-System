import { Component, OnInit } from '@angular/core';
import { FarmingTip } from '../farmermodel/farmingtip';
import { FarmingtipserviceService } from '../farmerservice/farmingtipservice.service';

@Component({
  selector: 'app-farmingtips',
  templateUrl: './farmingtips.component.html',
  styleUrls: ['./farmingtips.component.scss']
})
export class FarmingtipsComponent implements OnInit {

  allFarmingtip: FarmingTip[];

  constructor(public farmingtipService: FarmingtipserviceService) { }

  ngOnInit() {
    this.getAllFarmingtip();
  }

  getAllFarmingtip() {
    this.farmingtipService.getAllFarmingtips().subscribe(
      (data: FarmingTip[]) => {
        this.allFarmingtip=data;
      });
  }

}
