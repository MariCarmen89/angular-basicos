import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})

export class ContadorComponent {
    title: string = 'proyectoMaxwell';
    number: number = 55;
  
    base:number = 5;
  
    acumular(valor:number, base:number ) {
      this.number = valor + base;
    }
  
}
