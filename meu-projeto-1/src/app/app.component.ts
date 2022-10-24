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

    <ng-template [ngIf]="getDados" >
      <hr>
      <h1>{{getDados.nome}}</h1>
      <h1>{{getDados.type}}</h1>
    </ng-template>

    <app-output (enviarDados)="setDados($event)"></app-output>

    <router-outlet></router-outlet>

  `,
})
export class AppComponent implements OnInit {
  public addValue: number = 0;
  public getDados:{nome:string, type: string} | undefined;
  ngOnInit(): void {
    //
  }
  public add(){
    this.addValue+=1
  }

  public setDados(event:{nome:string, type: string} ){
    this.getDados = event;
  }
}
