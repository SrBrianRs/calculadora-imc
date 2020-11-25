(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gusky/Documentos/Proyectos TDD/brian/calculadora-imc/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "PRmv":
/*!********************************************!*\
  !*** ./src/app/calculadora-mujer/mujer.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calcular(peso, altura) {
    const result = (peso / (altura * altura)).toFixed(3);
    return Number(result);
}
/* harmony default export */ __webpack_exports__["default"] = (calcular);


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _calculadora_ui_calculadora_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculadora-ui/calculadora-ui.component */ "quHZ");



class AppComponent {
    constructor() {
        this.title = 'calculadora-imc';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-calculadora-ui");
    } }, directives: [_calculadora_ui_calculadora_ui_component__WEBPACK_IMPORTED_MODULE_1__["CalculadoraUiComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "YUSq":
/*!**********************************************!*\
  !*** ./src/app/calculadora-hombre/hombre.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calcular(peso, altura) {
    const result = (peso / (altura * altura)).toFixed(3);
    return Number(result);
}
/* harmony default export */ __webpack_exports__["default"] = (calcular);


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _calculadora_ui_calculadora_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculadora-ui/calculadora-ui.component */ "quHZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _calculadora_ui_calculadora_ui_component__WEBPACK_IMPORTED_MODULE_3__["CalculadoraUiComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _calculadora_ui_calculadora_ui_component__WEBPACK_IMPORTED_MODULE_3__["CalculadoraUiComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "quHZ":
/*!************************************************************!*\
  !*** ./src/app/calculadora-ui/calculadora-ui.component.ts ***!
  \************************************************************/
/*! exports provided: CalculadoraUiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculadoraUiComponent", function() { return CalculadoraUiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _calculadora_hombre_hombre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calculadora-hombre/hombre */ "YUSq");
/* harmony import */ var _calculadora_mujer_mujer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calculadora-mujer/mujer */ "PRmv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class CalculadoraUiComponent {
    constructor() {
        this.imc = null;
        this.diagnostico = null;
        this.edad = null;
        this.sexo = null;
        this.peso = null;
        this.altura = null;
    }
    ngOnInit() {
    }
    calcularImc() {
        if (this.peso !== null && this.altura !== null && this.sexo !== null && this.edad !== null) {
            borraFlecha();
            let result = 0;
            if (this.sexo === 'hombre') {
                result = Object(_calculadora_hombre_hombre__WEBPACK_IMPORTED_MODULE_1__["default"])(this.peso, this.altura);
                console.log('entró a hombre');
            }
            else {
                result = Object(_calculadora_mujer_mujer__WEBPACK_IMPORTED_MODULE_2__["default"])(this.peso, this.altura);
            }
            this.imc = result;
            console.log('resultado', result);
            console.log('imc', this.imc);
            if (this.imc < 18.5) {
                this.diagnostico = "Peso Bajo";
                document.querySelector('#f1').innerHTML = '&#8681';
            }
            else if (this.imc >= 18.5 && this.imc <= 24.9) {
                this.diagnostico = "Peso Normal";
                document.querySelector('#f2').innerHTML = '&#8681';
            }
            else if (this.imc >= 25.0 && this.imc <= 29.9) {
                this.diagnostico = "Sobrepeso";
                document.querySelector('#f3').innerHTML = '&#8681';
            }
            else {
                this.diagnostico = "Obesidad";
                document.querySelector('#f4').innerHTML = '&#8681';
            }
        }
    }
}
CalculadoraUiComponent.ɵfac = function CalculadoraUiComponent_Factory(t) { return new (t || CalculadoraUiComponent)(); };
CalculadoraUiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculadoraUiComponent, selectors: [["app-calculadora-ui"]], decls: 63, vars: 7, consts: [[1, "calculadora"], ["action", ""], ["type", "radio", "name", "sexo", "id", "hombre", "value", "hombre", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "sexo", "id", "mujer", "value", "mujer", 3, "ngModel", "ngModelChange"], ["for", "edad"], ["type", "text", "id", "edad", "name", "edad", 3, "ngModel", "ngModelChange"], ["for", "altura"], ["type", "text", "id", "altura", "name", "altura", 3, "ngModel", "ngModelChange"], ["for", ""], ["for", "peso"], ["type", "text", "id", "peso", "name", "peso", 3, "ngModel", "ngModelChange"], ["value", "Calcular", 1, "btn", 3, "click"], ["id", "resultado", 1, "resultado"], ["id", "diagnostico", 1, "diagnostico"], [1, "tabla"], ["id", "f1"], ["id", "f2"], ["id", "f3"], ["id", "f4"]], template: function CalculadoraUiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Calculadora de IMC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculadoraUiComponent_Template_input_ngModelChange_4_listener($event) { return ctx.sexo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hombre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculadoraUiComponent_Template_input_ngModelChange_6_listener($event) { return ctx.sexo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mujer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculadoraUiComponent_Template_input_ngModelChange_12_listener($event) { return ctx.edad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Altura ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculadoraUiComponent_Template_input_ngModelChange_17_listener($event) { return ctx.altura = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Peso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculadoraUiComponent_Template_input_ngModelChange_24_listener($event) { return ctx.peso = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculadoraUiComponent_Template_button_click_29_listener() { return ctx.calcularImc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Calcular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Resultado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Peso bajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Peso Normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Sobrepeso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Obesidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "menos de 18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "entre 18.5 y 24.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "entre 25 y 29.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "mas de 30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sexo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sexo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.edad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.altura);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.peso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.imc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.diagnostico, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".calculadora[_ngcontent-%COMP%] {\n  padding: 30px 250px;\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{\n  text-align: center;\n  color: blueviolet;\n}\nform[_ngcontent-%COMP%] {\n  text-align: center;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n  font-size: 1.3rem;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 0px solid white;\n  border-bottom: 1px solid gray;\n  color: crimson;\n  font-size: 1.1rem;\n  text-align: center;\n  max-width: 50px;\n}\nbutton[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 1.1rem;\n  background-color: rgba(183, 159, 197, 0.459);\n  border: 2px solid rgba(183, 159, 197, 0.808);\n  border-radius: 5px;\n\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: rgba(120, 100, 131, 0.459);\n  border: 2px solid rgba(82, 69, 90, 0.808);\n  cursor: pointer;\n}\n.resultado[_ngcontent-%COMP%] {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 3.5rem;\n  font-weight: bold;\n  color: darkgoldenrod;\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.diagnostico[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 2.5rem;\n  font-weight: bold;\n  color: darksalmon;\n  text-align: center;\n}\n.tabla[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n}\ntable[_ngcontent-%COMP%]{\n  background-color: gainsboro;\n  border-radius: 10px;\n}\ntr[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  text-align: center;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-of-type{\n  font-weight: bold;\n}\nth[_ngcontent-%COMP%] {\n   font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYWRvcmEtdWkvY2FsY3VsYWRvcmEtdWkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixzSEFBc0g7QUFDeEg7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsNENBQTRDO0VBQzVDLDRDQUE0QztFQUM1QyxrQkFBa0I7O0FBRXBCO0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakI7QUFFQTtFQUNFLDREQUE0RDtFQUM1RCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDREQUE0RDtFQUM1RCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0dBQ0csaUJBQWlCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2FsY3VsYWRvcmEtdWkvY2FsY3VsYWRvcmEtdWkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxjdWxhZG9yYSB7XG4gIHBhZGRpbmc6IDMwcHggMjUwcHg7XG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5oMSwgaDJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsdWV2aW9sZXQ7XG59XG5cbmZvcm0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvcm0gbGFiZWx7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG5mb3JtIGlucHV0IHtcbiAgYm9yZGVyOiAwcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICBjb2xvcjogY3JpbXNvbjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA1MHB4O1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODMsIDE1OSwgMTk3LCAwLjQ1OSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTgzLCAxNTksIDE5NywgMC44MDgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjAsIDEwMCwgMTMxLCAwLjQ1OSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoODIsIDY5LCA5MCwgMC44MDgpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZXN1bHRhZG8ge1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGRhcmtnb2xkZW5yb2Q7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5kaWFnbm9zdGljbyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZGFya3NhbG1vbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFibGEge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxudGFibGV7XG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbnRyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnRib2R5IHRyOmZpcnN0LW9mLXR5cGV7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxudGgge1xuICAgZm9udC1zaXplOiAxLjVyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculadoraUiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calculadora-ui',
                templateUrl: './calculadora-ui.component.html',
                styleUrls: ['./calculadora-ui.component.css']
            }]
    }], function () { return []; }, null); })();
function borraFlecha() {
    document.querySelector('#f1').innerHTML = '';
    document.querySelector('#f2').innerHTML = '';
    document.querySelector('#f3').innerHTML = '';
    document.querySelector('#f4').innerHTML = '';
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map