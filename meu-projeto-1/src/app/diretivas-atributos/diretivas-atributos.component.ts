import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true;
  public heightPx: string = "120px";
  public backgroundColor:string = "#1e1e1e";


  constructor() {
    //
  }

  ngOnInit(): void {
    setInterval(()=>{
      if(this.heightPx == "120px"){
        this.heightPx = "150px";
        this.backgroundColor = "#e1e1e1";
      }else{
        this.heightPx = "120px";
        this.backgroundColor = "#751d1d";
      }

    },1000)
  }

  public dark(){
    if(this.valor){
      this.valor = false;
    }else{
      this.valor = true;
    }
  }
}
