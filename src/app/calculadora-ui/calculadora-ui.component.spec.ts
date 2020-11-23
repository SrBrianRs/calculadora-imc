import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraUiComponent } from './calculadora-ui.component';

describe('CalculadoraUiComponent', () => {
  let component: CalculadoraUiComponent;
  let fixture: ComponentFixture<CalculadoraUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraUiComponent ]
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
});
