import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  @Input() variable:number;
  constructor() { }

  ngOnInit(): void {
  }

}
