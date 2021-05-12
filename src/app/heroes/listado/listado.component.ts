import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Deadpol', 'Iron Man', 'Hulk', 'AntMan'];
  heroeBorrado:string = "";

  borrarHeroe(){
    console.log('borrando..');
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroes);
  
    
  }


  constructor() {
    console.log('constructor');
   }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
