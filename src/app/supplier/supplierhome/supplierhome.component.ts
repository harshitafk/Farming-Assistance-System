import { Component, OnInit } from '@angular/core';
import { SupplierMenu } from './suppliermenu';
import { SuppliermenuService } from '../supplierservice/suppliermenu.service';
import { Router } from '@angular/router';
import { DeleteadvertisementComponent } from '../deleteadvertisement/deleteadvertisement.component';

@Component({
  selector: 'app-supplierhome',
  templateUrl: './supplierhome.component.html',
  styleUrls: ['./supplierhome.component.scss']
})
export class SupplierhomeComponent implements OnInit {

  suppliermenu: SupplierMenu;

  suppliermenus: SupplierMenu[];

  selectedMenu: SupplierMenu;

  constructor(private menuService : SuppliermenuService,private _router : Router) { }

  ngOnInit(): void {
    this.suppliermenus = this.menuService.getMenus();
  }

  onSelect(menu: SupplierMenu) {
    this.selectedMenu = menu;
  }

  openMenuOption(value) {
    if(value=== '0'){
      this._router.navigate(['/addadvertisement'])
    }
    if(value=== '1'){
      this._router.navigate(['/suppliercropmenu'])
    }
    if(value=== '2'){
      this._router.navigate(['/deleteadvertisement'])
    }
  }

}
