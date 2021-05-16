import { Injectable } from '@angular/core';
import { SupplierMenu } from '../supplierhome/suppliermenu';
import { SUPPLIERMENUS } from '../supplierhome/suppliermenus';

@Injectable({
  providedIn: 'root'
})
export class SuppliermenuService {

  getMenus(): SupplierMenu[] {
    return SUPPLIERMENUS;
  }
  getMenu(id: string) : SupplierMenu{
    return SUPPLIERMENUS.filter((menu) =>(menu.id === id))[0];
}

  constructor() { }
}
