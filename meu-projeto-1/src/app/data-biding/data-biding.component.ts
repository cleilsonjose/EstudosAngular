import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome:string = "Cleilson";
  public idade:number = 33;
  public check: boolean = true;
  public myPath:string = "https://scontent.fpcs1-1.fna.fbcdn.net/v/t1.6435-9/36519244_1666204826810556_5754684898744991744_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qe0jWrRA7EAAX_d5elF&_nc_ht=scontent.fpcs1-1.fna&oh=00_AT9A-E9owIOtHEU6DsAFs2QZNkNypFR1RRX3kJ-w9KprSA&oe=63720D1D";
  public position:{x:number, y:number} = {x: 0, y: 0};

  public mouseMove(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
  constructor() {
    //
   }

  ngOnInit(): void {
    //
  }

}
