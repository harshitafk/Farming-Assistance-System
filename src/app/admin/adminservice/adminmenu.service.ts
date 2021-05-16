import { Injectable } from '@angular/core';
import { AdminMenu } from '../adminhome/adminmenu';
import { ADMINMENUS } from '../adminhome/adminmenus';

@Injectable({
  providedIn: 'root'
})
export class AdminmenuService {

  getMenus(): AdminMenu[] {
    return ADMINMENUS;
  }
  getMenu(id: string) : AdminMenu{
    return ADMINMENUS.filter((menu) =>(menu.id === id))[0];
}

  constructor() { }
}
