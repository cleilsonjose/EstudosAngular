import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--
    <app-title></app-title>
    <app-data-biding></app-data-biding>
    <app-diretivas-estruturais></app-diretivas-estruturais>

    <app-diretivas-atributos>
      <h1>Diretivas Atributos</h1>
      <h3>Fim do ng-content</h3>
    </app-diretivas-atributos>
    -->
    <app-new-component></app-new-component>
    <app-input [contador] = "addValue"></app-input>
    <button (click)="add()">add</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  public addValue: number = 0;
  ngOnInit(): void {
    //
  }
  public add(){
    this.addValue+=1
  }
}
