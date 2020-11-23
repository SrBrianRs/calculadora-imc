import { Component, OnInit } from '@angular/core';
import calcularHombre from '../calculadora-hombre/hombre';
import calcularMujer from '../calculadora-mujer/mujer';

@Component({
  selector: 'app-calculadora-ui',
  templateUrl: './calculadora-ui.component.html',
  styleUrls: ['./calculadora-ui.component.css']
})
export class CalculadoraUiComponent implements OnInit {

  constructor() { }

  imc = null;
  diagnostico = null;
  edad = null;
  sexo = null;
  peso = null;
  altura = null;


  ngOnInit(): void {
  }

  calcularImc(){
    if(this.peso !== null && this.altura !== null){

      if(this.sexo === 'hombre'){
        this.imc = calcularHombre(this.peso,this.altura);
      } else {
        this.imc = calcularMujer(this.peso, this.altura);
      }

      if( this.imc < 18.5){
        this.diagnostico = "Peso Bajo";
      } else if (this.imc >= 18.5 && this.imc <= 24.9) {
        this.diagnostico = "Peso Normal";
      } else if (this.imc >= 25.0 && this.imc <= 29.9){
        this.diagnostico = "Sobrepeso";
      } else {
        this.diagnostico = "Obesidad";
      }
    }
  }
}
