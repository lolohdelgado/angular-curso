import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{title}}</h1>

    <button (click)="acumular(base)">+ {{base}}</button>
    <h3>La base es: <strong>{{ numero }}</strong></h3>
    <button (click)="acumular(-base)">- {{base}}</button>
`
})
export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 10;
    base: number = 5;


    acumular( valor: number) {
    this.numero += valor;
  }
}