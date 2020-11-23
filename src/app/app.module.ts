import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculadoraUiComponent } from './calculadora-ui/calculadora-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraUiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
