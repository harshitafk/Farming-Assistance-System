import { Component, OnInit } from '@angular/core';
import { AdminMenu } from './adminmenu';
import { AdminmenuService } from '../adminservice/adminmenu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {

  adminmenu: AdminMenu;

  adminmenus: AdminMenu[];

  selectedMenu: AdminMenu;

  constructor(private menuService : AdminmenuService,private _router : Router) { }

  ngOnInit(): void {
    this.adminmenus = this.menuService.getMenus();
  }

  onSelect(menu: AdminMenu) {
    this.selectedMenu = menu;
  }

  openMenuOption(value) {
    if(value=== '0'){
      this._router.navigate(['/viewcomplaint'])
    }
    if(value=== '1'){
      this._router.navigate(['/viewfarmingtips'])
    }
  }

}
