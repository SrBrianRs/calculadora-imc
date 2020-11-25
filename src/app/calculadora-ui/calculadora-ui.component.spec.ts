import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import calcularHombre from '../calculadora-hombre/hombre';
import calcularMujer from '../calculadora-mujer/mujer';

import { CalculadoraUiComponent } from './calculadora-ui.component';

describe('CalculadoraUiComponent', () => {
  let component: CalculadoraUiComponent;
  let fixture: ComponentFixture<CalculadoraUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraUiComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe llamar al metodo de calcular', () => {
    //Arrange 
    let result = 0;
    component.edad = 20;
    component.sexo = "hombre";
  
    component.peso = 85;
    component.altura = 1.75;


    //Act
    component.calcularImc();
    result = component.imc;

    //Assert
    expect(result).toBe(27.755);
  });

  it('El resultado de Altura: 1.75 y Peso: 85 debe ser 27.755 al tocar el botón calcular', () => {
    //Arrange 
    let result = 0;
    component.edad = 20;
    component.sexo = "hombre";
  
    component.peso = 85;
    component.altura = 1.75;

    //Act
    let boton = fixture.debugElement.query(By.css('.btn'));
    fixture.detectChanges();
    boton.triggerEventHandler('click', null);
    result = component.imc;
    
    //Assert
    expect(result).toBe(27.755);
  });

  it('El resultado de Altura: 1.68 y Peso: 74 debe ser 26.219 al tocar el botón calcular', () => {
    //Arrange 
    let result = 0;
    component.edad = 20;
    component.sexo = "hombre";
  
    component.peso = 74;
    component.altura = 1.68;

    //Act
    let boton = fixture.debugElement.query(By.css('.btn'));
    fixture.detectChanges();
    boton.triggerEventHandler('click', null);
    result = component.imc;
    
    //Assert
    expect(result).toBe(26.219);
  });

  it('El resultado de Altura: 1.50 y Peso: 52 debe ser 23.111 al tocar el botón calcular', () => {
    //Arrange 
    let result = 0;
    component.edad = 20;
    component.sexo = "hombre";
  
    component.peso = 52;
    component.altura = 1.50;

    //Act
    let boton = fixture.debugElement.query(By.css('.btn'));
    fixture.detectChanges();
    boton.triggerEventHandler('click', null);
    result = component.imc;
    
    //Assert
    expect(result).toBe(23.111);
  });

  it('El resultado de Altura: 1.65 y Peso: 50 debe ser 18.365 al tocar el botón calcular', () => {
    //Arrange 
    let result = 0;
    component.edad = 20;
    component.sexo = "hombre";
  
    component.peso = 50;
    component.altura = 1.65;

    //Act
    let boton = fixture.debugElement.query(By.css('.btn'));
    fixture.detectChanges();
    boton.triggerEventHandler('click', null);
    result = component.imc;
    
    //Assert
    expect(result).toBe(18.365);
  });

  it('El resultado de Altura: 1.70 y Peso: 95 debe ser 32.872 al tocar el botón calcular', () => {
    //Arrange 
    let result = 0;
    component.edad = 20;
    component.sexo = "hombre";
  
    component.peso = 95;
    component.altura = 1.70;

    //Act
    let boton = fixture.debugElement.query(By.css('.btn'));
    fixture.detectChanges();
    boton.triggerEventHandler('click', null);
    result = component.imc;
    
    //Assert
    expect(result).toBe(32.872);
  });

  it('El resultado debe renredizar el imc de Altura: 1.75 y Peso: 85, debe ser 27.755 al tocar el botón calcular', () => {
    //Arrange 
    let result = 0;
    component.edad = 20;
    component.sexo = "hombre";
  
    component.peso = 85;
    component.altura = 1.75;

    //Act
    component.calcularImc();
    fixture.detectChanges();
    let diagnosticoEl = fixture.debugElement.query(By.css('#diagnostico'));
    let renderDiagnostico : HTMLElement = diagnosticoEl.nativeElement;
       
    // Assert
    expect(renderDiagnostico.innerText).toContain('Sobrepeso');  
  });

  it('El resultado debe renredizar el imc de Altura: 1.68 y Peso: 74, debe ser 26.219 al tocar el botón calcular', () => {
    //Arrange 
    let result = 0;
    component.edad = 20;
    component.sexo = "mujer";
  
    component.peso = 74;
    component.altura = 1.68;

   //Act
   component.calcularImc();
   fixture.detectChanges();
   let diagnosticoEl = fixture.debugElement.query(By.css('#diagnostico'));
   let renderDiagnostico : HTMLElement = diagnosticoEl.nativeElement;
      
   // Assert
   expect(renderDiagnostico.innerText).toContain('Sobrepeso');  
  });

  it('El resultado debe renredizar el imc de Altura: 1.50 y Peso: 52, debe ser 23.111 al tocar el botón calcular', () => {
    //Arrange 
    let result = 0;
    component.edad = 20;
    component.sexo = "mujer";
  
    component.peso = 52;
    component.altura = 1.50;

   //Act
   component.calcularImc();
   fixture.detectChanges();
   let diagnosticoEl = fixture.debugElement.query(By.css('#diagnostico'));
   let renderDiagnostico : HTMLElement = diagnosticoEl.nativeElement;
      
   // Assert
   expect(renderDiagnostico.innerText).toContain('Peso Normal');  
  });

  it('El resultado debe renredizar el imc de Altura: 1.65 y Peso: 50, debe ser 18.365 al tocar el botón calcular', () => {
    //Arrange 
    let result = 0;
    component.edad = 20;
    component.sexo = "mujer";
  
    component.peso = 50;
    component.altura = 1.65;

   //Act
   component.calcularImc();
   fixture.detectChanges();
   let diagnosticoEl = fixture.debugElement.query(By.css('#diagnostico'));
   let renderDiagnostico : HTMLElement = diagnosticoEl.nativeElement;
      
   // Assert
   expect(renderDiagnostico.innerText).toContain('Peso Bajo');  
  });

  it('El resultado debe renredizar el imc de Altura: 1.70 y Peso: 95, debe ser 32.872 al tocar el botón calcular', () => {
    //Arrange 
    let result = 0;
    component.edad = 20;
    component.sexo = "hombre";
  
    component.peso = 95;
    component.altura = 1.70;

   //Act
   component.calcularImc();
   fixture.detectChanges();
   let diagnosticoEl = fixture.debugElement.query(By.css('#diagnostico'));
   let renderDiagnostico : HTMLElement = diagnosticoEl.nativeElement;
      
   // Assert
   expect(renderDiagnostico.innerText).toContain('Obesidad');  
  });


  
});
