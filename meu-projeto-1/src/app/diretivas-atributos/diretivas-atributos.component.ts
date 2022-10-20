import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  //ngClass
  public valor: boolean = true;
  //ngStyle
  public heightPx: string = "120px";
  public backgroundColor:string = "#751d1d";
  public colorFonte: string = "#e1e1e1";
  public red:number = 0;public green:number = 0;public blue:number = 0;
  public rgb:string = `rgb(${this.red},${this.green},${this.blue})`;
  //ngModel
  public nome:string = "";
  public list: Array<{nome: string}> = [];
  public list2: Array<{nome: string}> = [{nome:"Cleilson"},{nome:"Juliana"}];

  constructor() {
    //
  }

  ngOnInit(): void {
    setInterval(()=>{
      if(this.heightPx == "120px"){
        this.heightPx = "121px";
        this.colorFonte = "#e1e1e1";
        if(this.red == 255){
          while(this.blue != 255){
            this.blue+=25;
            ++this.green;
          }
        }else{
          this.red+=25;
        }

        this.backgroundColor = `rgb(${this.red},${this.green},${this.blue})`
      }else{
        this.heightPx = "120px";
        this.backgroundColor = "#751d1d";
        this.colorFonte = "#1e1e1e";
      }

    },10000)

  }

  public dark(){
    if(this.valor){
      this.valor = false;
    }else{
      this.valor = true;
    }
  }

  //ngModel
  public salvar(){
    this.list.push({nome: this.nome});
  }
}
