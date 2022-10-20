import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--
    <app-title></app-title>
    <app-data-biding></app-data-biding>
    <app-diretivas-estruturais></app-diretivas-estruturais>
  -->
    <app-diretivas-atributos>
      <h1>Diretivas Atributos</h1>
      <h3>Fim do ng-content</h3>
    </app-diretivas-atributos>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    //
  }
}
