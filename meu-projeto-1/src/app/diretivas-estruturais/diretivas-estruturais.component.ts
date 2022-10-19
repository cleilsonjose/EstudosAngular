import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public condition2: boolean = true;
  public bandas: string[] = ['cefa', 'fresno', 'matanza', 'huaska'];
  public umaBanda: string = "";
  //switch
  public pokemon:string = 'Charmander';

  constructor() {
    //
  }

  ngOnInit(): void {
    setInterval(() =>{
      if(this.condition){
        this.condition = false;
      }else{
        this.condition = true;
      }
    },2000)
  }

  public clicar(){
    if(this.condition2){
      this.condition2 = false;
    }else{
      this.condition2 = true;
    }
  }

  public clicarAddBandas(){
    this.bandas.push(this.umaBanda);
  }


}
