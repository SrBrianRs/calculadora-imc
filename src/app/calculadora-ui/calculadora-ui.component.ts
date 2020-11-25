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

    if(this.peso !== null && this.altura !== null && this.sexo !== null && this.edad !== null){

      borraFlecha();
      let result = 0;

      if(this.sexo === 'hombre'){
        result = calcularHombre(this.peso,this.altura);
        console.log('entró a hombre');
      } else {
        result = calcularMujer(this.peso, this.altura);
      }
      this.imc = result;
      
      console.log('resultado', result);

      console.log('imc',this.imc);

      if( this.imc < 18.5){
        this.diagnostico = "Peso Bajo";
        document.querySelector('#f1').innerHTML = '&#8681'
      } else if (this.imc >= 18.5 && this.imc <= 24.9) {
        this.diagnostico = "Peso Normal";
        document.querySelector('#f2').innerHTML = '&#8681'
      } else if (this.imc >= 25.0 && this.imc <= 29.9){
        this.diagnostico = "Sobrepeso";
        document.querySelector('#f3').innerHTML = '&#8681'
      } else {
        this.diagnostico = "Obesidad";
        document.querySelector('#f4').innerHTML = '&#8681'
      }

    
      
    }
  }
}
function borraFlecha(){
  document.querySelector('#f1').innerHTML = '';
  document.querySelector('#f2').innerHTML = '';
  document.querySelector('#f3').innerHTML = '';
  document.querySelector('#f4').innerHTML = '';
}
