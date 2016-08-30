"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var authentication_service_1 = require('../services/authentication.service');
var LoginComponent = (function () {
    function LoginComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.user = new authentication_service_1.User('', '');
        this.errorMsg = '';
    }
    //cuando se presiona el boton de Login se ejecuta la funcion de Login, que valida los datos
    //a través del servicio. Si el usuario no existe, salta error. Si los datos son correctos, va a "photos".
    LoginComponent.prototype.login = function () {
        if (!this._service.login(this.user)) {
            this.errorMsg = '*Failed to login. Try again please.';
        }
        else {
            this._router.navigate(['photos']);
            //el return false, previene el comportamiento default y no recarga la página.
            return false;
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: 'app/templates/login.component.html',
            styleUrls: ['app/styles/login.component.css']
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map