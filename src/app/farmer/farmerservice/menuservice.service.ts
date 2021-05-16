import { Injectable } from '@angular/core';
import { FarmerMenu } from '../farmerhome/farmermenu';
import { FARMERMENUS } from '../farmerhome/farmermenus';

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {

  getMenus(): FarmerMenu[] {
    return FARMERMENUS;
  }
  getMenu(id: string) : FarmerMenu{
    return FARMERMENUS.filter((menu) =>(menu.id === id))[0];
}

  constructor() { }
}
