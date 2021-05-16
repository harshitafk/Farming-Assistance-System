import { Component, OnInit } from '@angular/core';
import { LoginMenu } from '../shared/loginmenu';
import { LoginmenuService } from '../services/loginmenu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

loginmenus: LoginMenu[];

selectedUser: LoginMenu;

  constructor(private loginmenuService: LoginmenuService) { }

  ngOnInit(){
    this.loginmenus = this.loginmenuService.getUsers();
  }

  onSelect(login: LoginMenu) {
    this.selectedUser = login;
  }

}
