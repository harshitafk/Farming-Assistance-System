import { Component, OnInit } from '@angular/core';
import { SupplierCropMenu } from '../suppliercropmenu/suppliercropmenu';
import { SUPPLIERSCROPMENUS } from '../suppliercropmenu/suppliercropmenus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suppliercropmenu',
  templateUrl: './suppliercropmenu.component.html',
  styleUrls: ['./suppliercropmenu.component.scss']
})
export class SuppliercropmenuComponent implements OnInit {

  cropmenus: SupplierCropMenu[];

selectecropMenu: SupplierCropMenu;

  constructor(private _router : Router) { }

  ngOnInit(){
    this.cropmenus = this.getmenus();
  }

  onSelect(menuoption: SupplierCropMenu) {
    this.selectecropMenu = menuoption;
  }

  openMenuOption(value) {
    
    if(value=== '1'){
      this._router.navigate(['/buycrophome'])
    }
    if(value=== '2'){
      this._router.navigate(['/buytransaction'])
    }
    
  }

  getmenus(): SupplierCropMenu[] {
    return SUPPLIERSCROPMENUS;
  }


}
