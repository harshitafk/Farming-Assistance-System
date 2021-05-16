import { Component, OnInit } from '@angular/core';
import { FarmingTip } from 'src/app/farmer/farmermodel/farmingtip';
import { FarmingtipserviceService } from 'src/app/farmer/farmerservice/farmingtipservice.service';


@Component({
  selector: 'app-viewfarmingtips',
  templateUrl: './viewfarmingtips.component.html',
  styleUrls: ['./viewfarmingtips.component.scss']
})
export class ViewfarmingtipsComponent implements OnInit {

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
  
  
    edit(tips) {
      this.farmingtipService.currentFarmingtip = Object.assign({}, tips);
      
    }
  
    deleteFarmingtip(id: number) {
       console.log(id);
    this.farmingtipService.deleteFarmingtip(id).subscribe(
      (data: FarmingTip) => {
        this.getAllFarmingtip();
  });
  
    }
  
    createAndUpdate(currentFarmingtip : FarmingTip) {
  
      console.log(currentFarmingtip);
      if (currentFarmingtip.id != null) {
        console.log('update');
        this.updateFarmingtip(currentFarmingtip);
      } else {
        console.log('create');
        this.createFarmingtip(currentFarmingtip);
      }
    }
  
    createFarmingtip(tips: FarmingTip) {
      this.farmingtipService.createFarmingtip(tips).subscribe();
       }
  
    updateFarmingtip(tips: FarmingTip) {
      this.farmingtipService.updateFarmingtip(tips).subscribe();
      
      }
  
    clear() {
      this.farmingtipService.currentFarmingtip = {
        id: null,
        tipsMessage: ''
        
      };
    }

}
