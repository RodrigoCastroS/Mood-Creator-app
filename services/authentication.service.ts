import { Injectable }                 from '@angular/core';
import { Router }                     from '@angular/router';

//exportamos el tipo usuario, que tendrá un nombre y una contraseña.
export class User {
  constructor(
    public name: string,
    public password: string) { }
}
//Creamos una variable con dos (ampliable, por supuesto) User, que serán los que puedan acceder al sitio.
  let users = [
    new User('Lidia','lidia'),
    new User('Rodrigo','rodrigo')
  ];

@Injectable()
export class AuthenticationService {
  constructor(private _router: Router){}
  //al apretar login en el formulaio, se valida si el nombre y la contraseña introducidos cuadran con las 
  //guardadas en la matriz users
    login(user:User){
        let authenticatedUser = users.find(u => (u.name === user.name) && (u.password === user.password));
        //si el usuario coincide, guardamos los datos en el localstore y se devuelve un "true"
          if (authenticatedUser){
              localStorage.setItem("user", JSON.stringify(authenticatedUser));   
              return true;
            }
        //si el usuario no coincide se devuelve un "false", lo que hará saltar el error de login.
              return false;
      }
    //checkCredentials nos permite saber si el usuario está loggeado en ese momento, mirando si está en
    //localStorage. Si no está, vuelve a enviarnos a la pantalla de Login. Esto hace que la pantalla de 
    //login se convierta en la "por defecto" aunque intentemos entrar directamente en otra sin loggear.
    checkCredentials(){
      if (localStorage.getItem("user") === null){
            console.log ('Credentials Checked: user not loged in');
            this._router.navigate(['']);
            return false;
          } 
        } 
}