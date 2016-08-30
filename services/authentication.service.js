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
//exportamos el tipo usuario, que tendrá un nombre y una contraseña.
var User = (function () {
    function User(name, password) {
        this.name = name;
        this.password = password;
    }
    return User;
}());
exports.User = User;
//Creamos una variable con dos (ampliable, por supuesto) User, que serán los que puedan acceder al sitio.
var users = [
    new User('Lidia', 'lidia'),
    new User('Rodrigo', 'rodrigo')
];
var AuthenticationService = (function () {
    function AuthenticationService(_router) {
        this._router = _router;
    }
    //al apretar login en el formulaio, se valida si el nombre y la contraseña introducidos cuadran con las 
    //guardadas en la matriz users
    AuthenticationService.prototype.login = function (user) {
        var authenticatedUser = users.find(function (u) { return (u.name === user.name) && (u.password === user.password); });
        //si el usuario coincide, guardamos los datos en el localstore y se devuelve un "true"
        if (authenticatedUser) {
            localStorage.setItem("user", JSON.stringify(authenticatedUser));
            return true;
        }
        //si el usuario no coincide se devuelve un "false", lo que hará saltar el error de login.
        return false;
    };
    //checkCredentials nos permite saber si el usuario está loggeado en ese momento, mirando si está en
    //localStorage. Si no está, vuelve a enviarnos a la pantalla de Login. Esto hace que la pantalla de 
    //login se convierta en la "por defecto" aunque intentemos entrar directamente en otra sin loggear.
    AuthenticationService.prototype.checkCredentials = function () {
        if (localStorage.getItem("user") === null) {
            console.log('Credentials Checked: user not loged in');
            this._router.navigate(['']);
            return false;
        }
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map