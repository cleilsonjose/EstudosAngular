import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();

  public pokemons: Array<{nome: string, type: string}> =[
    {nome: 'Chamander', type: 'Fire'},
    {nome: 'Pikachu', type: 'Eletric'},
    {nome: 'Nidoran', type: 'Poison'}
  ]

  constructor() {
    //
  }

  ngOnInit(): void {
  //
  }

  public getDados(event: number){
    this.enviarDados.emit(this.pokemons[event]);
  }

}
