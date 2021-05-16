import { Injectable } from '@angular/core';

import { AboutUs } from '../shared/aboutus';
import { ABOUTUSS } from '../shared/aboutuss';


@Injectable({
  providedIn: 'root'
})
export class AboutusService {

  constructor() { }
  getAboutUss(): AboutUs[] {
    return ABOUTUSS;
  }

  getABoutUs(id: string): AboutUs {
   return ABOUTUSS.filter((aboutus) => (aboutus.id === id))[0];
}

     getFeaturedLeader(): AboutUs {
     return ABOUTUSS.filter((aboutus) => aboutus.featured)[0];
     }
}
