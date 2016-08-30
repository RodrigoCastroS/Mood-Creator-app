import { Component }                     from '@angular/core';
import { ROUTER_DIRECTIVES, Router }     from '@angular/router';

import { AuthenticationService }         from '../services/authentication.service';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES], 
    templateUrl:'app/templates/app.component.html' ,
    styleUrls: ['app/styles/app.component.css'],
    providers:[AuthenticationService]   
})

//en el constructor se invoca a checkCredentials que forma parte del servicio de autentificacion.
export class AppComponent {
      constructor(private _router:Router,
                  private _service:AuthenticationService){
                       this._service.checkCredentials();
                      }

//el boton de Logout elimina los datos del usuario del Localstorage y vuelve a enviarnos a la pantalla de login.
    logout() {
      localStorage.removeItem("user");
      this._router.navigate(['']);
      return false;
    }
}