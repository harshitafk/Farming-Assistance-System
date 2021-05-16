import { Component, OnInit } from '@angular/core';
import { FarmerMenu } from './farmermenu';
import { MenuserviceService } from '../farmerservice/menuservice.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-farmerhome',
  templateUrl: './farmerhome.component.html',
  styleUrls: ['./farmerhome.component.scss']
})
export class FarmerhomeComponent implements OnInit {

  farmermenu: FarmerMenu;

  farmermenus: FarmerMenu[];

  selectedMenu: FarmerMenu;
  

  constructor(private menuService : MenuserviceService,private _router : Router) { }

  ngOnInit(): void {
    this.farmermenus = this.menuService.getMenus();
  }

  onSelect(menu: FarmerMenu) {
    this.selectedMenu = menu;
  }

  openMenuOption(value) {
    if(value=== '0'){
      this._router.navigate(['/viewadvertisement'])
    }
    if(value=== '1'){
      this._router.navigate(['/cropmenu'])
    }
    if(value=== '2'){
      this._router.navigate(['/farmertips'])
    }
    if(value=== '3'){
      this._router.navigate(['/addcomplaint'])
    }
    
  }


}
