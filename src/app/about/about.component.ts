import { Component, OnInit } from '@angular/core';

import { AboutUs } from '../shared/aboutus';
import { AboutusService } from '../services/aboutus.service';
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  
  aboutus: AboutUs[];

  constructor(private aboutusService: AboutusService) { }

  ngOnInit(): void {
    this.aboutus = this.aboutusService.getAboutUss();
  }

}
