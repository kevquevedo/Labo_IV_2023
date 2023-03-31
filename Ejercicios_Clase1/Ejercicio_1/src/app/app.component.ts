import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio_1';

  numero1:number = 0;
  numero2:number = 0;
  suma:number = 0;
  promedio:number = 0;

  calcular(){
    this.suma = Number(this.numero1) + Number(this.numero2);
    this.promedio = Number(this.suma/2);
  }
}
