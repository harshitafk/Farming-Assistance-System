import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';
import { mixinColor } from '@angular/material/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

}
