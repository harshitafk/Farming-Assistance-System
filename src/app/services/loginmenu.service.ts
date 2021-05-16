import { Injectable } from '@angular/core';
import { LoginMenu } from '../shared/loginmenu';
import { LOGINMENUS } from '../shared/loginmenus';


@Injectable({
  providedIn: 'root'
})
export class LoginmenuService {

  getUsers(): LoginMenu[] {
    return LOGINMENUS;
  }
  getUser(id: string) : LoginMenu{
    return LOGINMENUS.filter((login) =>(login.id === id))[0];
}

  constructor() { }
}
