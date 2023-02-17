import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs'; 

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  constructor(private router: Router) { }

  ROUTERS = [1,2,3]

  ngOnInit(): void {
  }

  acomp1() {
    this.router.navigate(['compo1'])
  }

  acomp2() {
    this.router.navigate(['compo2'])
  }

  acomp3() {
    this.router.navigate(['compo3'])
  }

}
