import { Component }                     from '@angular/core';
import { ROUTER_DIRECTIVES, Router }     from '@angular/router';

import { User, AuthenticationService }   from '../services/authentication.service'

@Component({
    selector: 'login-form',
    directives: [ROUTER_DIRECTIVES], 
    templateUrl: 'app/templates/login.component.html',
    styleUrls: ['app/styles/login.component.css']
})

//se importa el tipo 'User' de autenthication service y se define un usuario vacío de momento.
export class LoginComponent {
    public user = new User('','');
    public errorMsg = '';
    constructor(private _service:AuthenticationService,
                private _router:Router) {}
 //cuando se presiona el boton de Login se ejecuta la funcion de Login, que valida los datos
 //a través del servicio. Si el usuario no existe, salta error. Si los datos son correctos, va a "photos".
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = '*Failed to login. Try again please.';
        }else{
            this._router.navigate(['photos']);
            //el return false, previene el comportamiento default y no recarga la página.
            return false; 
            }
        }
}