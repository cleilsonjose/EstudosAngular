import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

  public title:string = "Bem vindo";

  constructor() {
    // do nothing.
  }

  ngOnInit(): void {
    // do nothing.
  }

  ngOnChanges():void{
    //sempre vem quaundo recebe um dado de fora
  }
}
