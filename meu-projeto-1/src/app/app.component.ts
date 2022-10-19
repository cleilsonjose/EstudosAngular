import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <app-title></app-title>
  <app-data-biding></app-data-biding>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{

  ngOnInit(): void{
    //
  }
}
