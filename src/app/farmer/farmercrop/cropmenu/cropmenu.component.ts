import { Component, OnInit } from '@angular/core';
import { CropMenu } from '../cropmenu/cropmenu';
import { CROPMENUS } from '../cropmenu/cropmenus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cropmenu',
  templateUrl: './cropmenu.component.html',
  styleUrls: ['./cropmenu.component.scss']
})
export class CropmenuComponent implements OnInit {

  cropmenus: CropMenu[];

selectecropMenu: CropMenu;

  constructor(private _router : Router) { }

  ngOnInit(){
    this.cropmenus = this.getmenus();
  }

  onSelect(menuoption: CropMenu) {
    this.selectecropMenu = menuoption;
  }

  openMenuOption(value) {
    if(value=== '0'){
      this._router.navigate(['/crophome'])
    }
    if(value=== '1'){
      this._router.navigate(['/cropsell'])
    }
    
  }

  getmenus(): CropMenu[] {
    return CROPMENUS;
  }

}
